import * as fs from "fs/promises";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";

import type { ProtoGrpcType as LndMainProto } from "../lnd/rpc";
import type { ProtoGrpcType as LndWalletUnlockerProto } from "../lnd/walletunlocker";
import type { ProtoGrpcType as LndStateServiceProto } from "../lnd/stateservice";
import { WalletState } from "../lnd/lnrpc/WalletState.js";
import type { GetStateResponse__Output } from "../lnd/lnrpc/GetStateResponse";
import type { AddInvoiceResponse__Output } from "../lnd/lnrpc/AddInvoiceResponse";
import type { PayReqString__Output } from "../lnd/lnrpc/PayReqString";
import type { PolicyUpdateRequest } from "../lnd/lnrpc/PolicyUpdateRequest";
import type { OpenChannelRequest } from "../lnd/lnrpc/OpenChannelRequest";
import type { SendCoinsRequest } from "../lnd/lnrpc/SendCoinsRequest";
import type { EstimateFeeResponse__Output } from "../lnd/lnrpc/EstimateFeeResponse";
import type { ChannelBalanceResponse__Output } from "../lnd/lnrpc/ChannelBalanceResponse";
import type { WalletBalanceResponse__Output } from "../lnd/lnrpc/WalletBalanceResponse";

import { LndError } from "@runcitadel/utils";
import { GetInfoResponse__Output } from "../lnd/lnrpc/GetInfoResponse";
import { GenSeedResponse__Output } from "../lnd/lnrpc/GenSeedResponse";
import { PayReq__Output } from "../lnd/lnrpc/PayReq";
import { NewAddressResponse__Output } from "../lnd/lnrpc/NewAddressResponse";
import { NodeInfo__Output } from "../lnd/lnrpc/NodeInfo";
import { Channel__Output } from "../lnd/lnrpc/Channel";
import { ListChannelsResponse__Output } from "../lnd/lnrpc/ListChannelsResponse";
import { ClosedChannelsResponse__Output } from "../lnd/lnrpc/ClosedChannelsResponse";
import { ChannelCloseSummary__Output } from "../lnd/lnrpc/ChannelCloseSummary";
import { ListPaymentsResponse__Output } from "../lnd/lnrpc/ListPaymentsResponse";
import { ListPeersResponse__Output } from "../lnd/lnrpc/ListPeersResponse";
import { Peer__Output } from "../lnd/lnrpc/Peer";
import { PendingChannelsResponse__Output } from "../lnd/lnrpc/PendingChannelsResponse";
import { ListInvoiceResponse__Output } from "../lnd/lnrpc/ListInvoiceResponse";
import { TransactionDetails__Output } from "../lnd/lnrpc/TransactionDetails";
import { Transaction__Output } from "../lnd/lnrpc/Transaction";
import { ChannelPoint__Output } from "../lnd/lnrpc/ChannelPoint";
import { SendCoinsResponse__Output } from "../lnd/lnrpc/SendCoinsResponse";
import { SendResponse__Output } from "../lnd/lnrpc/SendResponse";
import { PolicyUpdateResponse__Output } from "../lnd/lnrpc/PolicyUpdateResponse";
import { ConnectPeerResponse__Output } from "../lnd/lnrpc/ConnectPeerResponse";
import { FeeReportResponse__Output } from "../lnd/lnrpc/FeeReportResponse";
import { ForwardingHistoryResponse__Output } from "../lnd/lnrpc/ForwardingHistoryResponse";
import { ListUnspentResponse__Output } from "../lnd/lnrpc/ListUnspentResponse";

type useLndApis = LndMainProto & LndWalletUnlockerProto & LndStateServiceProto;

const loaderOptions = {
  defaults: true,
  longs: String,
};

const lndPackageDefinition = protoLoader.loadSync(
  [
    "./resources/rpc.proto",
    "./resources/walletunlocker.proto",
    "./resources/stateservice.proto",
  ],
  loaderOptions
);

const lnrpcProto = grpc.loadPackageDefinition(
  lndPackageDefinition
) as unknown as useLndApis;

const lnrpc = lnrpcProto.lnrpc;
const WalletUnlocker = lnrpc.WalletUnlocker;
const StateService = lnrpc.State;

type RpcClientInfo = {
  Lightning?: InstanceType<useLndApis["lnrpc"]["Lightning"]>;
  WalletUnlocker: InstanceType<useLndApis["lnrpc"]["WalletUnlocker"]>;
  State: InstanceType<useLndApis["lnrpc"]["State"]>;
  state: WalletState;
  offline?: boolean;
};

type RpcClientWithLightningForSure = {
  Lightning: InstanceType<useLndApis["lnrpc"]["Lightning"]>;
  WalletUnlocker: InstanceType<useLndApis["lnrpc"]["WalletUnlocker"]>;
  State: InstanceType<useLndApis["lnrpc"]["State"]>;
  state: WalletState;
};

const LND_HOST = process.env.LND_HOST || "127.0.0.1";
const LND_DIR = process.env.LND_DIR || "/lnd";
const LND_PORT = process.env.LND_PORT || 10009;
const LND_NETWORK = process.env.LND_NETWORK || "mainnet";

const DEFAULT_RECOVERY_WINDOW = 250;

const TLS_FILE = path.join(LND_DIR, "tls.cert");
const MACAROON_FILE = path.join(
  LND_DIR,
  "data",
  "chain",
  "bitcoin",
  LND_NETWORK,
  "admin.macaroon"
);

export async function promiseify(
  rpcObj: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rpcFn: (...args: any[]) => unknown,
  payload: unknown,
  description: string
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    try {
      rpcFn.call(rpcObj, payload, (error: unknown, grpcResponse: unknown) => {
        if (error) {
          reject(new LndError(`Unable to ${description}`, error));
        } else {
          resolve(grpcResponse);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
export async function initializeRPCClient(): Promise<RpcClientInfo> {
  // Create credentials
  const lndCert = await fs.readFile(TLS_FILE);
  const sslCreds = grpc.credentials.createSsl(lndCert);
  const stateService = new StateService(`${LND_HOST}:${LND_PORT}`, sslCreds);
  const walletUnlocker = new WalletUnlocker(
    `${LND_HOST}:${LND_PORT}`,
    sslCreds
  );
  let walletState: GetStateResponse__Output;
  try {
    walletState = (await promiseify(
      stateService,
      stateService.getState,
      {},
      "get wallet state"
    )) as GetStateResponse__Output;
  } catch {
    return {
      WalletUnlocker: walletUnlocker,
      State: stateService,
      state: WalletState.NON_EXISTING,
      offline: true,
    };
  }

  // WAIING_TO_START will be used in the future
  // https://github.com/Lightningnetwork/lnd/blob/bb5c3f3b51c7c58296d120d5afe4ed0640d5751e/docs/leader_election.md
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
    const macaroon = await fs.readFile(MACAROON_FILE);

    // build credentials from macaroons
    const metadata = new grpc.Metadata();
    metadata.add("macaroon", macaroon.toString("hex"));
    const macaroonCreds = grpc.credentials.createFromMetadataGenerator(
      (_args, callback) => {
        callback(null, metadata);
      }
    );
    const fullCredentials = grpc.credentials.combineChannelCredentials(
      sslCreds,
      macaroonCreds
    );

    return {
      WalletUnlocker: walletUnlocker,
      State: stateService,
      Lightning: new lnrpc.Lightning(
        `${LND_HOST}:${LND_PORT}`,
        fullCredentials
      ),
      state: walletState.state,
    };
  } else {
    throw new LndError("Unexpected LND state!", undefined, 500);
  }
}

export async function expectWalletToExist(): Promise<RpcClientWithLightningForSure> {
  const client = await initializeRPCClient();
  if (!client.Lightning) throw new LndError("Error: Wallet not ready");
  return client as RpcClientWithLightningForSure;
}

// an amount, an options memo, and can only be paid to node that created it.
export async function addInvoice(
  amount: number | string,
  memo: string
): Promise<{
  rHash: Buffer;
  paymentRequest: string;
}> {
  const rpcPayload = {
    value: amount,
    memo,
    expiry: 3600,
  };

  const conn = await expectWalletToExist();

  const grpcResponse = (await promiseify(
    conn.Lightning,
    conn.Lightning.addInvoice,
    rpcPayload,
    "create new invoice"
  )) as AddInvoiceResponse__Output;

  if (grpcResponse && grpcResponse.paymentRequest) {
    return {
      rHash: grpcResponse.rHash,
      paymentRequest: grpcResponse.paymentRequest,
    };
  } else {
    throw new LndError("Unable to parse invoice from lnd");
  }
}

export async function closeChannel(
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

  const { Lightning } = await expectWalletToExist();
  return await new Promise((resolve, reject) => {
    try {
      const call = Lightning.CloseChannel(rpcPayload);

      call.on("data", (chan) => {
        if (chan.update === "closePending") {
          resolve();
        }
      });

      call.on("error", (error) => {
        reject(new LndError("Unable to close channel", error));
      });
    } catch (error_1) {
      reject(error_1);
    }
  });
}

// Connects this lnd node to a peer.
export async function connectToPeer(
  pubKey: string,
  ip: string,
  port: number | string
): Promise<ConnectPeerResponse__Output> {
  const rpcPayload = {
    addr: {
      pubkey: pubKey,
      host: `${ip}:${port}`,
    },
  };

  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.ConnectPeer,
    rpcPayload,
    "connect to peer"
  )) as ConnectPeerResponse__Output;
}

type extendedPaymentRequest = PayReq__Output & { paymentRequest?: string };
export async function decodePaymentRequest(
  paymentRequest: string
): Promise<extendedPaymentRequest> {
  const rpcPayload: PayReqString__Output = {
    payReq: paymentRequest,
  };

  const { Lightning } = await expectWalletToExist();
  const invoice = (await promiseify(
    Lightning,
    Lightning.decodePayReq,
    rpcPayload,
    "decode payment request"
  )) as extendedPaymentRequest;
  // add on payment request for extra details
  invoice.paymentRequest = paymentRequest;
  return invoice;
}

export async function estimateFee(
  address: string,
  amt: string | number,
  confTarget: number
): Promise<EstimateFeeResponse__Output> {
  const addrToAmount: Record<string, unknown> = {};
  addrToAmount[address] = amt;

  const rpcPayload = {
    AddrToAmount: addrToAmount,
    targetConf: confTarget,
  };

  const conn = await expectWalletToExist();

  return (await promiseify(
    conn.Lightning,
    conn.Lightning.estimateFee,
    rpcPayload,
    "estimate fee request"
  )) as EstimateFeeResponse__Output;
}

export async function generateAddress(): Promise<NewAddressResponse__Output> {
  const rpcPayload = {
    type: 0,
  };

  const conn = await expectWalletToExist();

  return (await promiseify(
    conn.Lightning,
    conn.Lightning.NewAddress,
    rpcPayload,
    "generate address"
  )) as NewAddressResponse__Output;
}

export async function generateSeed(): Promise<GenSeedResponse__Output> {
  const { WalletUnlocker, state } = await initializeRPCClient();
  if (state !== WalletState.NON_EXISTING) {
    throw new LndError("Wallet already exists");
  }
  return (await promiseify(
    WalletUnlocker,
    WalletUnlocker.GenSeed,
    {},
    "generate seed"
  )) as GenSeedResponse__Output;
}

export async function getChannelBalance(): Promise<ChannelBalanceResponse__Output> {
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.ChannelBalance,
    {},
    "get channel balance"
  )) as ChannelBalanceResponse__Output;
}

export async function getFeeReport(): Promise<FeeReportResponse__Output> {
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.FeeReport,
    {},
    "get fee report"
  )) as FeeReportResponse__Output;
}

export async function getForwardingEvents(
  startTime: number | string,
  endTime: number | string,
  indexOffset: number
): Promise<ForwardingHistoryResponse__Output> {
  const rpcPayload = {
    startTime,
    endTime,
    indexOffset,
  };

  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.ForwardingHistory,
    rpcPayload,
    "get forwarding events"
  )) as ForwardingHistoryResponse__Output;
}

export async function isOperational(): Promise<boolean> {
  return !(await initializeRPCClient()).offline;
}

export async function getInfo(): Promise<GetInfoResponse__Output> {
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.GetInfo,
    {},
    "get lnd information"
  )) as GetInfoResponse__Output;
}

export async function getNodeInfo(
  pubkey: string,
  includeChannels: boolean
): Promise<NodeInfo__Output> {
  const rpcPayload = {
    pubKey: pubkey,
    includeChannels,
  };
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.GetNodeInfo,
    rpcPayload,
    "get node information"
  )) as NodeInfo__Output;
}

// Returns a list of lnd's currently open channels. Channels are considered open by this node and it's directly
// connected peer after three confirmation. After six confirmations, the channel is broadcasted by this node and it's
// directly connected peer to the broader Lightning network.
export async function getOpenChannels(): Promise<Channel__Output[]> {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = (await promiseify(
    Lightning,
    Lightning.ListChannels,
    {},
    "list channels"
  )) as ListChannelsResponse__Output;
  return grpcResponse.channels;
}

export async function getClosedChannels(): Promise<
  ChannelCloseSummary__Output[]
> {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = (await promiseify(
    Lightning,
    Lightning.ClosedChannels,
    {},
    "closed channels"
  )) as ClosedChannelsResponse__Output;
  return grpcResponse.channels;
}

// Returns a list of all outgoing payments.
export async function getPayments(): Promise<ListPaymentsResponse__Output> {
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.ListPayments,
    {},
    "get payments"
  )) as ListPaymentsResponse__Output;
}

// Returns a list of all lnd's currently connected and active peers.
export async function getPeers(): Promise<Peer__Output[]> {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = (await promiseify(
    Lightning,
    Lightning.ListPeers,
    {},
    "get peer information"
  )) as ListPeersResponse__Output;
  if (grpcResponse && grpcResponse.peers) {
    return grpcResponse.peers;
  } else {
    throw new LndError("Unable to parse peer information");
  }
}

// Returns a list of lnd's currently pending channels. Pending channels include, channels that are in the process of
// being opened, but have not reached three confirmations. Channels that are pending closed, but have not reached
// one confirmation. Forced close channels that require potentially hundreds of confirmations.
export async function getPendingChannels(): Promise<PendingChannelsResponse__Output> {
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.PendingChannels,
    {},
    "list pending channels"
  )) as PendingChannelsResponse__Output;
}

export async function getWalletBalance(): Promise<WalletBalanceResponse__Output> {
  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.WalletBalance,
    {},
    "get wallet balance"
  )) as WalletBalanceResponse__Output;
}

export async function initWallet(mnemonic: string[]): Promise<string[]> {
  const passwordBuff = Buffer.from("moneyprintergobrrr", "utf8");

  const rpcPayload = {
    walletPassword: passwordBuff,
    cipherSeedMnemonic: mnemonic,
    recoveryWindow: DEFAULT_RECOVERY_WINDOW,
  };

  const { WalletUnlocker, state } = await initializeRPCClient();
  if (state !== WalletState.NON_EXISTING) {
    throw new LndError("Wallet already exists");
  }
  await promiseify(
    WalletUnlocker,
    WalletUnlocker.InitWallet,
    rpcPayload,
    "initialize wallet"
  );
  return mnemonic;
}

// Returns a list of all invoices.
export async function getInvoices(): Promise<ListInvoiceResponse__Output> {
  const rpcPayload = {
    reversed: true, // Returns most recent
    num_max_invoices: 100,
  };

  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.ListInvoices,
    rpcPayload,
    "list invoices"
  )) as ListInvoiceResponse__Output;
}

// Returns a list of all on chain transactions.
export async function getOnChainTransactions(): Promise<Transaction__Output[]> {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = (await promiseify(
    Lightning,
    Lightning.GetTransactions,
    {},
    "list on-chain transactions"
  )) as TransactionDetails__Output;
  return grpcResponse.transactions;
}

export async function listUnspent(): Promise<ListUnspentResponse__Output> {
  const rpcPayload = {
    min_confs: 1,
    max_confs: 10000000, // Use arbitrarily high maximum confirmation limit.
  };

  const { Lightning } = await expectWalletToExist();

  return (await promiseify(
    Lightning,
    Lightning.listUnspent,
    rpcPayload,
    "estimate fee request"
  )) as ListUnspentResponse__Output;
}

export async function openChannel(
  pubKey: string,
  amt: string | number,
  satPerByte: string | number
): Promise<ChannelPoint__Output> {
  const rpcPayload: OpenChannelRequest = {
    nodePubkeyString: pubKey,
    localFundingAmount: amt,
  };

  if (satPerByte) {
    rpcPayload.satPerByte = satPerByte;
  } else {
    rpcPayload.targetConf = 6;
  }

  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.OpenChannelSync,
    rpcPayload,
    "open channel"
  )) as ChannelPoint__Output;
}

export async function sendCoins(
  addr: string,
  amt: string | number | undefined,
  satPerByte: string,
  sendAll: boolean
): Promise<SendCoinsResponse__Output> {
  const rpcPayload: SendCoinsRequest = {
    addr,
    amount: amt,
    sendAll,
  };

  if (satPerByte) {
    rpcPayload.satPerByte = satPerByte;
  } else {
    rpcPayload.targetConf = 6;
  }

  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.SendCoins,
    rpcPayload,
    "send coins"
  )) as SendCoinsResponse__Output;
}

export async function sendPaymentSync(
  paymentRequest: string,
  amt: string | number
): Promise<SendResponse__Output> {
  const rpcPayload = {
    paymentRequest,
    amt,
  };

  const { Lightning } = await expectWalletToExist();
  const response = (await promiseify(
    Lightning,
    Lightning.SendPaymentSync,
    rpcPayload,
    "send Lightning payment"
  )) as SendResponse__Output;
  // sometimes the error comes in on the response...
  if (response.paymentError) {
    throw new LndError(
      `Unable to send Lightning payment: ${response.paymentError}`
    );
  }
  return response;
}

export async function updateChannelPolicy(
  global: boolean,
  fundingTxid: string,
  outputIndex: number,
  baseFeeMsat: string,
  feeRate: number,
  timeLockDelta: number
): Promise<PolicyUpdateResponse__Output> {
  const rpcPayload: PolicyUpdateRequest = {
    baseFeeMsat,
    feeRate,
    timeLockDelta,
    minHtlcMsatSpecified: false,
  };

  if (global) {
    rpcPayload.global = global;
  } else {
    rpcPayload.chanPoint = {
      fundingTxidStr: fundingTxid,
      outputIndex,
    };
  }

  const { Lightning } = await expectWalletToExist();
  return (await promiseify(
    Lightning,
    Lightning.UpdateChannelPolicy,
    rpcPayload,
    "update channel policy coins"
  )) as PolicyUpdateResponse__Output;
}
