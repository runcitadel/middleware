import * as fs from "fs/promises";
import { LndError } from "@runcitadel/utils";

import { createChannel, createClient, Client } from "nice-grpc";
import {
  Channel,
  ChannelBalanceResponse,
  ChannelCloseSummary,
  ChannelPoint,
  ConnectPeerResponse,
  EstimateFeeResponse,
  FeeReportResponse,
  ForwardingHistoryResponse,
  GetInfoResponse,
  LightningDefinition,
  ListInvoiceResponse,
  ListPaymentsResponse,
  ListUnspentResponse,
  NewAddressResponse,
  NodeInfo,
  OpenChannelRequest,
  Peer,
  PendingChannelsResponse,
  PolicyUpdateRequest,
  SendCoinsRequest,
  SendCoinsResponse,
  SendResponse,
  Transaction,
  WalletBalanceResponse,
} from "../../lnrpc/rpc.js";
import {
  GenSeedResponse,
  WalletUnlockerDefinition,
} from "../../lnrpc/walletunlocker.js";
import { StateDefinition, WalletState } from "../../lnrpc/stateservice.js";
import * as grpc from "@grpc/grpc-js";
import ILightningClient, { extendedPaymentRequest } from "./abstract.js";
type RpcClientInfo = {
  Lightning?: Client<typeof LightningDefinition>;
  WalletUnlocker: Client<typeof WalletUnlockerDefinition>;
  State: Client<typeof StateDefinition>;
  state: WalletState;
  offline?: boolean;
};

type RpcClientWithLightningForSure = RpcClientInfo & {
  Lightning: Client<typeof LightningDefinition>;
};

const DEFAULT_RECOVERY_WINDOW = 250;

export default class LNDService implements ILightningClient {
  private macaroonFile: string;
  private connectionUrl: string;
  private cert: Buffer;

  constructor(connectionUrl: string, cert: Buffer, macaroonFile: string) {
    this.connectionUrl = connectionUrl;
    this.cert = cert;
    this.macaroonFile = macaroonFile;
  }
  async initializeRPCClient(): Promise<RpcClientInfo> {
    // Create credentials
    const lndCert = await this.cert;
    const tlsCredentials = grpc.credentials.createSsl(lndCert);
    const channel = createChannel(this.connectionUrl, tlsCredentials);

    const walletUnlocker: Client<typeof WalletUnlockerDefinition> =
      createClient(WalletUnlockerDefinition, channel);

    const stateService: Client<typeof StateDefinition> = createClient(
      StateDefinition,
      channel
    );

    let walletState;
    try {
      walletState = await stateService.getState({});
    } catch {
      return {
        WalletUnlocker: walletUnlocker,
        State: stateService,
        state: WalletState.NON_EXISTING,
        offline: true,
      };
    }

    /* WAIING_TO_START will be used in the future
     * https://github.com/Lightningnetwork/lnd/blob/bb5c3f3b51c7c58296d120d5afe4ed0640d5751e/docs/leader_election.md
     * Once we have stuff like that implemented on the Citadel dashboard
     */
    if (
      walletState.state == WalletState.NON_EXISTING ||
      walletState.state == WalletState.LOCKED ||
      walletState.state == WalletState.WAITING_TO_START
    ) {
      return {
        WalletUnlocker: walletUnlocker,
        State: stateService,
        state: walletState.state,
      };
    } else if (walletState.state == WalletState.RPC_ACTIVE) {
      // Read macaroons, they should exist in this state
      const macaroon = await fs.readFile(this.macaroonFile);

      // build credentials from macaroons
      const metadata = new grpc.Metadata();
      metadata.add("macaroon", macaroon.toString("hex"));
      const macaroonCreds = grpc.credentials.createFromMetadataGenerator(
        (_args, callback) => {
          callback(null, metadata);
        }
      );
      const fullCredentials = grpc.credentials.combineChannelCredentials(
        tlsCredentials,
        macaroonCreds
      );

      const authenticatedChannel = createChannel(this.connectionUrl, fullCredentials);
      const LightningClient: Client<typeof LightningDefinition> = createClient(
        LightningDefinition,
        authenticatedChannel
      );

      return {
        WalletUnlocker: walletUnlocker,
        State: stateService,
        Lightning: LightningClient,
        state: walletState.state,
      };
    } else {
      throw new LndError("Unexpected LND state!", undefined, 500);
    }
  }

  async expectWalletToExist(): Promise<RpcClientWithLightningForSure> {
    const client = await this.initializeRPCClient();
    if (!client.Lightning) throw new LndError("Error: Wallet not ready");
    return client as RpcClientWithLightningForSure;
  }

  // an amount, an options memo, and can only be paid to node that created it.
  async addInvoice(
    amount: number | string,
    memo: string
  ): Promise<{
    rHash: Uint8Array;
    paymentRequest: string;
  }> {
    if (typeof amount === "string") amount = parseInt(amount);
    const rpcPayload = {
      value: amount,
      memo,
      expiry: 3600,
    };

    const conn = await this.expectWalletToExist();

    const grpcResponse = await conn.Lightning.addInvoice(rpcPayload);

    if (grpcResponse && grpcResponse.paymentRequest) {
      return {
        rHash: grpcResponse.rHash,
        paymentRequest: grpcResponse.paymentRequest,
      };
    } else {
      throw new LndError("Unable to parse invoice from lnd");
    }
  }

  async closeChannel(
    fundingTxId: string,
    index: number,
    force: boolean
  ): Promise<void> {
    const rpcPayload = {
      channelPoint: {
        fundingTxidStr: fundingTxId,
        outputIndex: index,
      },
      force,
    };

    const { Lightning } = await this.expectWalletToExist();
    const call = Lightning.closeChannel(rpcPayload);
    for await (const data of call) {
      if (data.closePending) {
        return;
      }
    }
  }

  // Connects this lnd node to a peer.
  async connectToPeer(
    pubKey: string,
    ip: string,
    port: number | string
  ): Promise<ConnectPeerResponse> {
    const rpcPayload = {
      addr: {
        pubkey: pubKey,
        host: `${ip}:${port}`,
      },
    };

    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.connectPeer(rpcPayload);
  }

  async decodePaymentRequest(
    paymentRequest: string
  ): Promise<extendedPaymentRequest> {
    const rpcPayload = {
      payReq: paymentRequest,
    };

    const { Lightning } = await this.expectWalletToExist();
    const invoice: extendedPaymentRequest = await Lightning.decodePayReq(
      rpcPayload
    );
    // add on payment request for extra details
    invoice.paymentRequest = paymentRequest;
    return invoice;
  }

  async estimateFee(
    address: string,
    amt: number,
    confTarget: number
  ): Promise<EstimateFeeResponse> {
    const addrToAmount: { [key: string]: number } = {};
    addrToAmount[address] = amt;

    const rpcPayload = {
      AddrToAmount: addrToAmount,
      targetConf: confTarget,
    };

    const conn = await this.expectWalletToExist();

    return await conn.Lightning.estimateFee(rpcPayload);
  }

  async generateAddress(): Promise<NewAddressResponse> {
    const rpcPayload = {
      type: 0,
    };

    const conn = await this.expectWalletToExist();

    return await conn.Lightning.newAddress(rpcPayload);
  }

  async generateSeed(): Promise<GenSeedResponse> {
    const { WalletUnlocker, state } = await this.initializeRPCClient();
    if (state !== WalletState.NON_EXISTING) {
      throw new LndError("Wallet already exists");
    }
    return await WalletUnlocker.genSeed({});
  }

  async getChannelBalance(): Promise<ChannelBalanceResponse> {
    const { Lightning } = await this.expectWalletToExist();
    return Lightning.channelBalance({});
  }

  async getFeeReport(): Promise<FeeReportResponse> {
    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.feeReport({});
  }

  async getForwardingEvents(
    startTime: number,
    endTime: number,
    indexOffset: number
  ): Promise<ForwardingHistoryResponse> {
    const rpcPayload = {
      startTime,
      endTime,
      indexOffset,
      // TODO: Probably make this dynamic and reduce the default
      numMaxEvents: 5000,
    };

    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.forwardingHistory(rpcPayload);
  }

  async isOperational(): Promise<boolean> {
    return !(await this.initializeRPCClient()).offline;
  }

  async getInfo(): Promise<GetInfoResponse> {
    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.getInfo({});
  }

  async getNodeInfo(
    pubKey: string,
    includeChannels: boolean
  ): Promise<NodeInfo> {
    const rpcPayload = {
      pubKey,
      includeChannels,
    };
    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.getNodeInfo(rpcPayload);
  }

  // Returns a list of lnd's currently open channels. Channels are considered open by this node and it's directly
  // connected peer after three confirmation. After six confirmations, the channel is broadcasted by this node and it's
  // directly connected peer to the broader Lightning network.
  async getOpenChannels(): Promise<Channel[]> {
    const { Lightning } = await this.expectWalletToExist();
    const grpcResponse = await Lightning.listChannels({});
    return grpcResponse.channels;
  }

  async getClosedChannels(): Promise<ChannelCloseSummary[]> {
    const { Lightning } = await this.expectWalletToExist();
    const grpcResponse = await Lightning.closedChannels({});
    return grpcResponse.channels;
  }

  // Returns a list of all outgoing payments.
  async getPayments(): Promise<ListPaymentsResponse> {
    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.listPayments({});
  }

  // Returns a list of all lnd's currently connected and active peers.
  async getPeers(): Promise<Peer[]> {
    const { Lightning } = await this.expectWalletToExist();
    const grpcResponse = await Lightning.listPeers({});
    if (grpcResponse && grpcResponse.peers) {
      return grpcResponse.peers;
    } else {
      throw new LndError("Unable to parse peer information");
    }
  }

  // Returns a list of lnd's currently pending channels. Pending channels include, channels that are in the process of
  // being opened, but have not reached three confirmations. Channels that are pending closed, but have not reached
  // one confirmation. Forced close channels that require potentially hundreds of confirmations.
  async getPendingChannels(): Promise<PendingChannelsResponse> {
    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.pendingChannels({});
  }

  async getWalletBalance(): Promise<WalletBalanceResponse> {
    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.walletBalance({});
  }

  async initWallet(mnemonic: string[]): Promise<string[]> {
    const passwordBuff = Buffer.from("moneyprintergobrrr", "utf8");

    const rpcPayload = {
      walletPassword: passwordBuff,
      cipherSeedMnemonic: mnemonic,
      recoveryWindow: DEFAULT_RECOVERY_WINDOW,
    };

    const { WalletUnlocker, state } = await this.initializeRPCClient();
    if (state !== WalletState.NON_EXISTING) {
      throw new LndError("Wallet already exists");
    }
    await WalletUnlocker.initWallet(rpcPayload);
    return mnemonic;
  }

  // Returns a list of all invoices.
  async getInvoices(): Promise<ListInvoiceResponse> {
    const rpcPayload = {
      reversed: true, // Returns most recent
      numMaxInvoices: 100,
    };

    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.listInvoices(rpcPayload);
  }

  // Returns a list of all on chain transactions.
  async getOnChainTransactions(): Promise<Transaction[]> {
    const { Lightning } = await this.expectWalletToExist();
    const grpcResponse = await Lightning.getTransactions({});
    return grpcResponse.transactions;
  }

  async listUnspent(): Promise<ListUnspentResponse> {
    const rpcPayload = {
      minConfs: 1,
      maxConfs: 10000000, // Use arbitrarily high maximum confirmation limit.
    };

    const { Lightning } = await this.expectWalletToExist();

    return await Lightning.listUnspent(rpcPayload);
  }

  async openChannel(
    pubKey: string,
    amt: number,
    satPerByte: number | undefined
  ): Promise<ChannelPoint> {
    const rpcPayload: OpenChannelRequest = <OpenChannelRequest>{
      nodePubkeyString: pubKey,
      localFundingAmount: amt,
    };

    if (satPerByte) {
      // Make the dashboard still believe it's satPerByte, but actually use satPerVByte
      rpcPayload.satPerVbyte = satPerByte;
    } else {
      rpcPayload.targetConf = 6;
    }

    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.openChannelSync(rpcPayload);
  }

  async sendCoins(
    addr: string,
    amt: number | undefined,
    satPerByte: number,
    sendAll: boolean
  ): Promise<SendCoinsResponse> {
    const rpcPayload: SendCoinsRequest = <SendCoinsRequest>{
      addr,
      amount: amt,
      sendAll,
    };

    if (satPerByte) {
      rpcPayload.satPerVbyte = satPerByte;
    } else {
      rpcPayload.targetConf = 6;
    }

    const { Lightning } = await this.expectWalletToExist();
    return await Lightning.sendCoins(rpcPayload);
  }

  async sendPaymentSync(
    paymentRequest: string,
    amt: number
  ): Promise<SendResponse> {
    const rpcPayload = {
      paymentRequest,
      amt,
    };

    const { Lightning } = await this.expectWalletToExist();
    const response = await Lightning.sendPaymentSync(rpcPayload);
    // sometimes the error comes in on the response...
    if (response.paymentError) {
      throw new LndError(
        `Unable to send Lightning payment: ${response.paymentError}`
      );
    }
    return response;
  }

  async updateChannelPolicy(
    global: boolean,
    fundingTxid: string,
    outputIndex: number,
    baseFeeMsat: number,
    feeRate: number,
    timeLockDelta: number
  ): Promise<void> {
    const rpcPayload: PolicyUpdateRequest = <PolicyUpdateRequest>{
      baseFeeMsat,
      feeRate,
      timeLockDelta,
      minHtlcMsatSpecified: false,
    };

    if (global) {
      rpcPayload.global = global;
    } else {
      rpcPayload.chanPoint = <ChannelPoint>{
        fundingTxidStr: fundingTxid,
        outputIndex,
      };
    }

    const { Lightning } = await this.expectWalletToExist();
    await Lightning.updateChannelPolicy(rpcPayload);
  }

  async getVersion(): Promise<string> {
    const info = await this.getInfo();
    return info.version;
  }
}
