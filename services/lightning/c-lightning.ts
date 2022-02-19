import ApiClient from "c-lightning.ts";
import { v4 as uuidv4 } from "uuid";
import ILightningClient, { extendedPaymentRequest } from "./abstract.js";
import {
  Channel,
  ChannelBalanceResponse,
  ChannelCloseSummary,
  ChannelPoint,
  EstimateFeeResponse,
  FeeReportResponse,
  ForwardingEvent,
  ForwardingHistoryResponse,
  GenSeedResponse,
  GetInfoResponse,
  Invoice,
  ListInvoiceResponse,
  ListPaymentsResponse,
  ListUnspentResponse,
  NewAddressResponse,
  NodeInfo,
  Peer,
  PendingChannelsResponse,
  SendCoinsResponse,
  SendResponse,
  Transaction,
  Utxo,
  WalletBalanceResponse,
} from "./autogenerated-types.js";

enum Invoice_InvoiceState {
  OPEN = 0,
  SETTLED = 1,
  CANCELED = 2,
  ACCEPTED = 3,
  UNRECOGNIZED = -1,
}

enum Status {
  Expired = "expired",
  Paid = "paid",
  Unpaid = "unpaid",
}

function convertToLndState(status: Status): Invoice_InvoiceState {
  switch (status) {
    case Status.Paid:
      return Invoice_InvoiceState.SETTLED;
    case Status.Expired:
      return Invoice_InvoiceState.CANCELED;
    default:
      return Invoice_InvoiceState.OPEN;
  }
}
const Uint8ArrayFromHexString = (hexString: string) =>
  new Uint8Array(
    (hexString.match(/.{1,2}/g) as RegExpMatchArray).map((byte) =>
      parseInt(byte, 16)
    )
  );

export default class CLightningService implements ILightningClient {
  apiClient: ApiClient;
  constructor(socketPath: string) {
    this.apiClient = new ApiClient(socketPath);
  }

  // an amount, an options memo, and can only be paid to node that created it.
  async addInvoice(
    amount: number | string,
    memo: string
  ): Promise<{
    rHash: Uint8Array;
    paymentRequest: string;
  }> {
    const invoice = await this.apiClient.invoice({
      msatoshi: parseInt(amount.toString()) * 1000,
      description: memo,
      label: memo + uuidv4(),
      expiry: 3600,
    });

    return {
      rHash: Uint8ArrayFromHexString(invoice.payment_hash),
      paymentRequest: invoice.bolt11,
    };
  }

  async closeChannel(
    fundingTxId: string,
    index: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    force: boolean
  ): Promise<void> {
    await this.apiClient.close({ id: `${fundingTxId}:${index}` });
  }

  // Connects this lnd node to a peer.
  async connectToPeer(
    pubKey: string,
    ip: string,
    port: number | string
  ): Promise<void> {
    await this.apiClient.connect({
      id: pubKey,
      host: ip,
      port: parseInt(port.toString()),
    });
  }

  async decodePaymentRequest(
    paymentRequest: string
  ): Promise<extendedPaymentRequest> {
    const decoded = await this.apiClient.decodepay({ bolt11: paymentRequest });
    /*
    destination: string;
    paymentHash: string;
    numSatoshis: number | string;
    timestamp: number | string;
    expiry: number | string;
    description: string;
    descriptionHash: string;
    numMsat: number | string;
    */
    return {
      paymentRequest,
      destination: decoded.payee,
      paymentHash: decoded.payment_hash,
      numSatoshis: (decoded.amount_msat as number) / 1000,
      timestamp: decoded.created_at,
      expiry: decoded.expiry,
      description: decoded.description as string,
      descriptionHash: decoded.description_hash as string,
      numMsat: decoded.amount_msat as number,
    };
  }

  async estimateFee(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    address: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    amt: number | string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    confTarget: number
  ): Promise<EstimateFeeResponse> {
    throw new Error("Not implemented for c-lightning yet");
  }

  async generateAddress(): Promise<NewAddressResponse> {
    const address = await this.apiClient.newaddr();
    return {
      address,
    };
  }

  async generateSeed(): Promise<GenSeedResponse> {
    throw new Error("Not supported on c-lightning");
  }

  async getChannelBalance(): Promise<ChannelBalanceResponse> {
    const peers = (await this.apiClient.listpeers()).peers;
    let localBalance = 0;
    let remoteBalance = 0;
    peers.forEach((peer) => {
      peer.channels?.forEach((channel) => {
        localBalance += channel.our_amount_msat;
        remoteBalance += channel.amount_msat - channel.our_amount_msat;
      });
    });
    return {
      localBalance: {
        sat: Math.round(localBalance / 1000),
        msat: localBalance,
      },
      remoteBalance: {
        sat: Math.round(remoteBalance / 1000),
        msat: remoteBalance,
      },
    };
  }

  async getFeeReport(): Promise<FeeReportResponse> {
    throw new Error("Not supported by c-lightning yet.");
  }

  async getForwardingEvents(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    startTime: number | string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endTime: number | string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    indexOffset: number
  ): Promise<ForwardingHistoryResponse> {
    const forwards = await this.apiClient.listforwards();
    const forwardingEvents: ForwardingEvent[] = forwards.forwards.map(
      (forward) => {
        return {
          chanIdIn: forward.in_channel,
          chanIdOut: forward.out_channel as string,
          amtIn: Math.round(forward.in_msat / 1000),
          /**
           * The total amount (in satoshis) of the outgoing HTLC that created the
           * second half of the circuit.
           */
          amtOut: Math.round((forward.out_msat as number) / 1000),
          /** The total fee (in satoshis) that this payment circuit carried. */
          fee: (forward.fee_msat as number) / 1000,
          /** The total fee (in milli-satoshis) that this payment circuit carried. */
          feeMsat: forward.fee_msat as number,
          /**
           * The total amount (in milli-satoshis) of the incoming HTLC that created
           * half the circuit.
           */
          amtInMsat: forward.in_msat,
          /**
           * The total amount (in milli-satoshis) of the outgoing HTLC that created
           * the second half of the circuit.
           */
          amtOutMsat: forward.out_msat as number,
          /**
           * The number of nanoseconds elapsed since January 1, 1970 UTC when this
           * circuit was completed.
           */
          timestampNs: forward.received_time,
        };
      }
    );
    return {
      forwardingEvents: forwardingEvents,
      // Not working on c-lightning
      lastOffsetIndex: 0,
    };
  }

  async isOperational(): Promise<boolean> {
    // TODO: Actual check
    return true;
  }

  async getInfo(): Promise<GetInfoResponse> {
    const info = await this.apiClient.getinfo();
    /* export interface GetInfoResponse {
    /** Number of pending channels /
    numPendingChannels: number | string;
    /** Number of active channels /
    numActiveChannels: number | string;
    /** Number of inactive channels /
    numInactiveChannels: number | string;
    /** Number of peers /
    numPeers: number | string;
    /** The node's current view of the height of the best block/
    blockHeight: number | string;
    /** The node's current view of the hash of the best block /
    blockHash: string;
    /** Timestamp of the block best known to the wallet /
    bestHeaderTimestamp: number | string;
    /** Whether the wallet's view is synced to the main chain /
    syncedToChain: boolean;
    /** Whether we consider ourselves synced with the public channel graph. /
    syncedToGraph: boolean;
    /** A list of active chains the node is connected to /
    chains: Chain[];
    /** The URIs of the current node. 
    uris: string[];
}*/
    return {
      version: info.version,
      identityPubkey: info.id,
      alias: info.alias,
      color: info.color,
      numPendingChannels: info.num_pending_channels,
      numActiveChannels: info.num_active_channels,
      numInactiveChannels: info.num_inactive_channels,
      numPeers: info.num_peers,
      blockHeight: info.blockheight,
      blockHash: "TODO",
      bestHeaderTimestamp: 1,
      syncedToChain: !info.warning_bitcoind_sync,
      syncedToGraph: true,
      chains: [
        {
          chain: "bitcoin",
          network: "mainnet",
        },
      ],
      uris: [],
    };
  }

  async getNodeInfo(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pubKey: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    includeChannels: boolean
  ): Promise<NodeInfo> {
    throw new Error("Not supported by c-lightning yet.");
  }

  // Returns a list of lnd's currently open channels. Channels are considered open by this node and it's directly
  // connected peer after three confirmation. After six confirmations, the channel is broadcasted by this node and it's
  // directly connected peer to the broader Lightning network.
  async getOpenChannels(): Promise<Channel[]> {
    throw new Error("Not supported by c-lightning yet.");
  }

  async getClosedChannels(): Promise<ChannelCloseSummary[]> {
    throw new Error("Not supported by c-lightning yet.");
  }

  // Returns a list of all outgoing payments.
  async getPayments(): Promise<ListPaymentsResponse> {
    throw new Error("Not supported by c-lightning yet.");
  }

  // Returns a list of all lnd's currently connected and active peers.
  async getPeers(): Promise<Peer[]> {
    throw new Error("Not supported by c-lightning yet.");
  }

  // Returns a list of lnd's currently pending channels. Pending channels include, channels that are in the process of
  // being opened, but have not reached three confirmations. Channels that are pending closed, but have not reached
  // one confirmation. Forced close channels that require potentially hundreds of confirmations.
  async getPendingChannels(): Promise<PendingChannelsResponse> {
    throw new Error("Not supported by c-lightning yet.");
  }

  async getWalletBalance(): Promise<WalletBalanceResponse> {
    const data = await this.apiClient.listfunds();
    let confirmedBalanceMsat = 0;
    let unconfirmedBalanceMsat = 0;
    data.outputs.forEach((output) => {
      if (output.status === "settled")
        confirmedBalanceMsat += output.amount_msat;
      else unconfirmedBalanceMsat += output.amount_msat;
    });
    return {
      /** The balance of the wallet */
      totalBalance: Math.round(
        (confirmedBalanceMsat + unconfirmedBalanceMsat) / 1000
      ),
      /** The confirmed balance of a wallet(with >= 1 confirmations) */
      confirmedBalance: Math.round(confirmedBalanceMsat / 1000),
      /** The unconfirmed balance of a wallet(with 0 confirmations) */
      unconfirmedBalance: Math.round(unconfirmedBalanceMsat / 1000),
      /** A mapping of each wallet account's name to its balance. */
      accountBalance: {},
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async initWallet(mnemonic: string[]): Promise<string[]> {
    return ["this", "is", "not", "supported", "for", "c-lightning", "yet"];
  }

  // Returns a list of all invoices.
  async getInvoices(): Promise<ListInvoiceResponse> {
    const invoices = (await this.apiClient.listinvoices()).invoices;
    const invoicesLnd: Invoice[] = invoices.map((invoice) => {
      return {
        memo: invoice.description,
        value: Math.round(invoice.amount_msat || 0 / 1000),
        valueMsat: invoice.amount_msat,
      paymentRequest: invoice.bolt11 || invoice.bolt12 || "",
        /** The state the invoice is in. */
        state: convertToLndState(invoice.status as unknown as Status),
      }
    });
    return {
      invoices: invoicesLnd,
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getInvoice(paymentHash: string): Promise<Invoice> {
    throw new Error("Not suported by c-lightning");
  }

  // Returns a list of all on chain transactions.
  async getOnChainTransactions(): Promise<Transaction[]> {
    const transactions = await this.apiClient.listtransactions();
    const currentBlockHeight = parseInt(
      (await this.getInfo()).blockHeight.toString()
    );
    const newTransactions: Transaction[] = transactions.transactions.map(
      (transaction) => {
        return {
          /** The transaction hash */
          txHash: transaction.hash,
          /** The transaction amount, denominated in satoshis */
          amount: 0,
          /** The number of confirmations */
          numConfirmations: currentBlockHeight - transaction.blockheight,
          /** The hash of the block this transaction was included in */
          blockHash: "none",
          /** The height of the block this transaction was included in */
          blockHeight: transaction.blockheight,
          /** Timestamp of this transaction */
          timeStamp: 0,
          /** Fees paid for this transaction */
          totalFees: 0,
          /** Addresses that received funds for this transaction */
          destAddresses: [],
          /** The raw transaction hex. */
          rawTxHex: transaction.rawtx,
          /** A label that was optionally set on transaction broadcast. */
          label: "No label",
        };
      }
    );
    return newTransactions;
  }

  async listUnspent(): Promise<ListUnspentResponse> {
    const data = await this.apiClient.listfunds();
    const currentBlockHeight = parseInt(
      (await this.getInfo()).blockHeight.toString()
    );
    const utxos: Utxo[] = data.outputs.map((output) => {
      return {
        /** The address */
        address: output.address as string,
        /** The value of the unspent coin in satoshis */
        amountSat: Math.round(output.amount_msat / 1000),
        /** The outpoint in format txid:n */
        outpoint: {
          txidStr: output.txid,
        },
        /** The number of confirmations for the Utxo */
        confirmations: output.blockheight
          ? currentBlockHeight - output.blockheight
          : 0,
      };
    });
    return {
      utxos
    }
  }

  async openChannel(
    pubKey: string,
    amt: number,
    satPerVbyte: number | undefined
  ): Promise<ChannelPoint> {
    const info = await this.apiClient.fundchannel({
      id: pubKey,
      amount: amt.toString(),
      feerate: satPerVbyte?.toString() || "normal",
    });
    return {
      fundingTxidStr: info.txid,
      outputIndex: info.outnum,
    };
  }

  async sendCoins(
    addr: string,
    amt: number | undefined,
    satPerVbyte?: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    sendAll?: boolean
  ): Promise<SendCoinsResponse> {
    const info = await this.apiClient.withdraw({
      destination: addr,
      satoshi: amt as number,
      feerate: satPerVbyte || "normal",
    });
    return { txid: info.txid };
  }

  async sendPaymentSync(
    paymentRequest: string,
    amt?: number
  ): Promise<SendResponse> {
    const data = await this.apiClient.pay({ bolt11: paymentRequest });
    await this.apiClient.waitsendpay({ payment_hash: data.payment_hash });
    return {
      paymentPreimage: data.payment_preimage,
      paymentRoute: undefined,
      paymentHash: data.payment_hash,
    };
  }

  async updateChannelPolicy(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    global: boolean,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fundingTxid: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    outputIndex: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    baseFeeMsat: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    feeRate: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    timeLockDelta: number
  ): Promise<void> {
    throw new Error("Not implemented for c-lightning yet");
  }

  async getVersion(): Promise<string> {
    const info = await this.getInfo();
    return info.version;
  }

  async signMessage(message: string): Promise<string> {
    const response = await this.apiClient.signmessage({ message });
    return response.zbase;
  }

  async verifyMessage(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signature: string
  ): Promise<{
    pubkey: string;
    valid: boolean;
  }> {
    throw new Error("Not implemented for c-lightning yet.");
  }
}
