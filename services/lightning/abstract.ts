import {
  Channel,
  ChannelBalanceResponse,
  ChannelCloseSummary,
  ChannelPoint,
  EstimateFeeResponse,
  FeeReportResponse,
  ForwardingHistoryResponse,
  GenSeedResponse,
  GetInfoResponse,
  Invoice,
  ListInvoiceResponse,
  ListPaymentsResponse,
  ListUnspentResponse,
  NewAddressResponse,
  PayRequest,
  PendingChannelsResponse,
  SendCoinsResponse,
  SendResponse,
  Transaction,
  WalletBalanceResponse,
} from './autogenerated-types.js';

export type extendedPaymentRequest = PayRequest & {
  paymentRequest?: string;
};

export default interface ILightningClient {
  hasBolt12: boolean;
  addInvoice(
    amount: number | string,
    memo: string,
  ): Promise<{
    rHash: Uint8Array;
    paymentRequest: string;
  }>;
  closeChannel(
    fundingTxId: string,
    index: number | string,
    force: boolean,
  ): Promise<void>;
  connectToPeer(
    pubKey: string,
    ip: string,
    port: number | string,
  ): Promise<void>;
  decodePaymentRequest(paymentRequest: string): Promise<extendedPaymentRequest>;
  estimateFee(
    address: string,
    amt: number | string,
    confTarget: number,
  ): Promise<EstimateFeeResponse>;
  generateAddress(): Promise<NewAddressResponse>;
  generateSeed(): Promise<GenSeedResponse>;
  getChannelBalance(): Promise<ChannelBalanceResponse>;
  getFeeReport(): Promise<FeeReportResponse>;
  getForwardingEvents(
    startTime: number | string,
    endTime: number | string,
    indexOffset: number,
  ): Promise<ForwardingHistoryResponse>;
  isOperational(): Promise<boolean>;
  getInfo(): Promise<GetInfoResponse>;
  getNodeAlias(pubKey: string): Promise<string>;
  getOpenChannels(): Promise<Channel[]>;
  getClosedChannels(): Promise<ChannelCloseSummary[]>;
  getPayments(): Promise<ListPaymentsResponse>;
  getPeerPubkeys(): Promise<string[]>;
  getPendingChannels(): Promise<PendingChannelsResponse>;
  getWalletBalance(): Promise<WalletBalanceResponse>;
  initWallet(mnemonic: string[]): Promise<string[]>;
  getInvoices(): Promise<ListInvoiceResponse>;
  getOnChainTransactions(): Promise<Transaction[]>;
  listUnspent(): Promise<ListUnspentResponse>;
  openChannel(
    pubKey: string,
    amt: number | string,
    satPerByte: string | number | undefined,
  ): Promise<ChannelPoint>;
  sendCoins(
    addr: string,
    amt: string | number | undefined,
    satPerByte?: number | string,
    sendAll?: boolean,
  ): Promise<SendCoinsResponse>;
  sendPaymentSync(paymentRequest: string, amt: number): Promise<SendResponse>;
  updateChannelPolicy(
    global: boolean,
    fundingTxid: string | undefined,
    outputIndex: number | string | undefined,
    baseFeeMsat: number | string,
    feeRate: number | string,
    timeLockDelta: number,
  ): Promise<void>;
  getVersion(): Promise<string>;
  signMessage(message: string): Promise<string>;
  verifyMessage(
    message: string,
    signature: string,
  ): Promise<{
    pubkey: string;
    valid: boolean;
  }>;
  getInvoice(paymentHash: string): Promise<Invoice>;
  addOffer(
    amount: number | string,
    description: string,
  ): Promise<{
    bolt12: string;
    bolt12_unsigned: string;
  }>;
  isInvoiceSettled(paymentHash: string): Promise<boolean>;
  startNode(): Promise<void>;
}
