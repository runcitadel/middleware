/** These types are based on LND's GRPC API and have been cleaned up a bit. More stuff might be added or removed here, depending on what we need for c-lightning. */
export enum AddressType {
  WITNESS_PUBKEY_HASH = 0,
  NESTED_PUBKEY_HASH = 1,
  UNUSED_WITNESS_PUBKEY_HASH = 2,
  UNUSED_NESTED_PUBKEY_HASH = 3,
  TAPROOT_PUBKEY = 4,
  UNUSED_TAPROOT_PUBKEY = 5,
  UNRECOGNIZED = -1,
}
export interface SendCoinsResponse {
  /** The transaction ID of the transaction */
  txid: string;
}
export enum CommitmentType {
  /** UNKNOWN_COMMITMENT_TYPE - Returned when the commitment type isn't known or unavailable. */
  UNKNOWN_COMMITMENT_TYPE = 0,
  /**
   * LEGACY - A channel using the legacy commitment format having tweaked to_remote
   * keys.
   */
  LEGACY = 1,
  /**
   * STATIC_REMOTE_KEY - A channel that uses the modern commitment format where the key in the
   * output of the remote party does not change each state. This makes back
   * up and recovery easier as when the channel is closed, the funds go
   * directly to that key.
   */
  STATIC_REMOTE_KEY = 2,
  /**
   * ANCHORS - A channel that uses a commitment format that has anchor outputs on the
   * commitments, allowing fee bumping after a force close transaction has
   * been broadcast.
   */
  ANCHORS = 3,
  /**
   * SCRIPT_ENFORCED_LEASE - A channel that uses a commitment type that builds upon the anchors
   * commitment format, but in addition requires a CLTV clause to spend outputs
   * paying to the channel initiator. This is intended for use on leased channels
   * to guarantee that the channel initiator has no incentives to close a leased
   * channel before its maturity date.
   */
  SCRIPT_ENFORCED_LEASE = 4,
  UNRECOGNIZED = -1,
}
export enum Initiator {
  INITIATOR_UNKNOWN = 0,
  INITIATOR_LOCAL = 1,
  INITIATOR_REMOTE = 2,
  INITIATOR_BOTH = 3,
  UNRECOGNIZED = -1,
}
export enum ResolutionType {
  TYPE_UNKNOWN = 0,
  /** ANCHOR - We resolved an anchor output. */
  ANCHOR = 1,
  /**
   * INCOMING_HTLC - We are resolving an incoming htlc on chain. This if this htlc is
   * claimed, we swept the incoming htlc with the preimage. If it is timed
   * out, our peer swept the timeout path.
   */
  INCOMING_HTLC = 2,
  /**
   * OUTGOING_HTLC - We are resolving an outgoing htlc on chain. If this htlc is claimed,
   * the remote party swept the htlc with the preimage. If it is timed out,
   * we swept it with the timeout path.
   */
  OUTGOING_HTLC = 3,
  /** COMMIT - We force closed and need to sweep our time locked commitment output. */
  COMMIT = 4,
  UNRECOGNIZED = -1,
}
export enum ResolutionOutcome {
  /** OUTCOME_UNKNOWN - Outcome unknown. */
  OUTCOME_UNKNOWN = 0,
  /** CLAIMED - An output was claimed on chain. */
  CLAIMED = 1,
  /** UNCLAIMED - An output was left unclaimed on chain. */
  UNCLAIMED = 2,
  /**
   * ABANDONED - ResolverOutcomeAbandoned indicates that an output that we did not
   * claim on chain, for example an anchor that we did not sweep and a
   * third party claimed on chain, or a htlc that we could not decode
   * so left unclaimed.
   */
  ABANDONED = 3,
  /**
   * FIRST_STAGE - If we force closed our channel, our htlcs need to be claimed in two
   * stages. This outcome represents the broadcast of a timeout or success
   * transaction for this two stage htlc claim.
   */
  FIRST_STAGE = 4,
  /** TIMEOUT - A htlc was timed out on chain. */
  TIMEOUT = 5,
  UNRECOGNIZED = -1,
}
export enum InvoiceHTLCState {
  ACCEPTED = 0,
  SETTLED = 1,
  CANCELED = 2,
  UNRECOGNIZED = -1,
}
export enum PaymentFailureReason {
  /** FAILURE_REASON_NONE - Payment isn't failed (yet). */
  FAILURE_REASON_NONE = 0,
  /** FAILURE_REASON_TIMEOUT - There are more routes to try, but the payment timeout was exceeded. */
  FAILURE_REASON_TIMEOUT = 1,
  /**
   * FAILURE_REASON_NO_ROUTE - All possible routes were tried and failed permanently. Or were no
   * routes to the destination at all.
   */
  FAILURE_REASON_NO_ROUTE = 2,
  /** FAILURE_REASON_ERROR - A non-recoverable error has occured. */
  FAILURE_REASON_ERROR = 3,
  /**
   * FAILURE_REASON_INCORRECT_PAYMENT_DETAILS - Payment details incorrect (unknown hash, invalid amt or
   * invalid final cltv delta)
   */
  FAILURE_REASON_INCORRECT_PAYMENT_DETAILS = 4,
  /** FAILURE_REASON_INSUFFICIENT_BALANCE - Insufficient local balance. */
  FAILURE_REASON_INSUFFICIENT_BALANCE = 5,
  UNRECOGNIZED = -1,
}
export interface Utxo {
  /** The type of address */
  addressType?: AddressType;
  /** The address */
  address: string;
  /** The value of the unspent coin in satoshis */
  amountSat: number | string;
  /** The pkscript in hex */
  pkScript?: string;
  /** The outpoint in format txid:n */
  outpoint: OutPoint | undefined;
  /** The number of confirmations for the Utxo */
  confirmations: number | string;
}
export interface Transaction {
  /** The transaction hash */
  txHash: string;
  /** The transaction amount, denominated in satoshis */
  amount: number | string;
  /** The number of confirmations */
  numConfirmations: number | string;
  /** The hash of the block this transaction was included in */
  blockHash: string;
  /** The height of the block this transaction was included in */
  blockHeight: number | string;
  /** Timestamp of this transaction */
  timeStamp: number | string;
  /** Fees paid for this transaction */
  totalFees: number | string;
  /** Addresses that received funds for this transaction */
  destAddresses: string[];
  /** The raw transaction hex. */
  rawTxHex: string;
  /** A label that was optionally set on transaction broadcast. */
  label: string;
}
export interface SendResponse {
  paymentError?: string;
  paymentPreimage: string;
  paymentRoute: Route | undefined;
  paymentHash: string;
}
export interface ChannelPoint {
  /**
   * Hex-encoded string representing the byte-reversed hash of the funding
   * transaction.
   */
  fundingTxidStr: string | undefined;
  /** The index of the output of the funding transaction */
  outputIndex: number | string;
}
export interface OutPoint {
  /** Reversed, hex-encoded string representing the transaction id. */
  txidStr: string;
  /** The index of the output on the transaction. */
  outputIndex?: number | string;
}
export interface EstimateFeeResponse {
  /** The total fee in satoshis. */
  feeSat: number | string;
  /** The fee rate in satoshi/vbyte. */
  satPerVbyte: number | string;
}
export interface ListUnspentResponse {
  /** A list of utxos */
  utxos: Utxo[];
}
export interface NewAddressResponse {
  /** The newly generated wallet address */
  address: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ConnectPeerResponse {}
export interface HTLC {
  incoming: boolean;
  amount: number | string;
  expirationHeight: number | string;
  /** Index identifying the htlc on the channel. */
  htlcIndex: number | string;
  /**
   * If this HTLC is involved in a forwarding operation, this field indicates
   * the forwarding channel. For an outgoing htlc, it is the incoming channel.
   * For an incoming htlc, it is the outgoing channel. When the htlc
   * originates from this node or this node is the final destination,
   * forwarding_channel will be zero. The forwarding channel will also be zero
   * for htlcs that need to be forwarded but don't have a forwarding decision
   * persisted yet.
   */
  forwardingChannel: number | string;
  /** Index identifying the htlc on the forwarding channel. */
  forwardingHtlcIndex: number | string;
}
export interface ChannelConstraints {
  /**
   * The CSV delay expressed in relative blocks. If the channel is force closed,
   * we will need to wait for this many blocks before we can regain our funds.
   */
  csvDelay: number | string;
  /** The minimum satoshis this node is required to reserve in its balance. */
  chanReserveSat: number | string;
  /** The dust limit (in satoshis) of the initiator's commitment tx. */
  dustLimitSat: number | string;
  /**
   * The maximum amount of coins in millisatoshis that can be pending in this
   * channel.
   */
  maxPendingAmtMsat: number | string;
  /** The smallest HTLC in millisatoshis that the initiator will accept. */
  minHtlcMsat: number | string;
  /** The total number of incoming HTLC's that the initiator will accept. */
  maxAcceptedHtlcs: number | string;
}
export interface Channel {
  /** Whether this channel is active or not */
  active: boolean;
  /** The identity pubkey of the remote node */
  remotePubkey: string;
  /**
   * The outpoint (txid:index) of the funding transaction. With this value, Bob
   * will be able to generate a signature for Alice's version of the commitment
   * transaction.
   */
  channelPoint: string;
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: number | string;
  /** The total amount of funds held in this channel */
  capacity: number | string;
  /** This node's current balance in this channel */
  localBalance: number | string;
  /** The counterparty's current balance in this channel */
  remoteBalance: number | string;
}
export interface ChannelCloseSummary {
  /** The outpoint (txid:index) of the funding transaction. */
  channelPoint: string;
  /** The unique channel ID for the channel. */
  chanId: number | string;
  /** The hash of the genesis block that this channel resides within. */
  chainHash: string;
  /** The txid of the transaction which ultimately closed this channel. */
  closingTxHash: string;
  /** Public key of the remote peer that we formerly had a channel with. */
  remotePubkey: string;
  /** Total capacity of the channel. */
  capacity: number | string;
  /** Height at which the funding transaction was spent. */
  closeHeight: number | string;
  /** Settled balance at the time of channel closure */
  settledBalance: number | string;
  /** The sum of all the time-locked outputs at the time of channel closure */
  timeLockedBalance: number | string;
  /** Details on how the channel was closed. */
  closeType: ChannelCloseSummary_ClosureType;
  /**
   * Open initiator is the party that initiated opening the channel. Note that
   * this value may be unknown if the channel was closed before we migrated to
   * store open channel information after close.
   */
  openInitiator: Initiator;
  /**
   * Close initiator indicates which party initiated the close. This value will
   * be unknown for channels that were cooperatively closed before we started
   * tracking cooperative close initiators. Note that this indicates which party
   * initiated a close, and it is possible for both to initiate cooperative or
   * force closes, although only one party's close will be confirmed on chain.
   */
  closeInitiator: Initiator;
  resolutions: Resolution[];
}
export enum ChannelCloseSummary_ClosureType {
  COOPERATIVE_CLOSE = 0,
  LOCAL_FORCE_CLOSE = 1,
  REMOTE_FORCE_CLOSE = 2,
  BREACH_CLOSE = 3,
  FUNDING_CANCELED = 4,
  ABANDONED = 5,
  UNRECOGNIZED = -1,
}
export interface Resolution {
  /** The type of output we are resolving. */
  resolutionType: ResolutionType;
  /** The outcome of our on chain action that resolved the outpoint. */
  outcome: ResolutionOutcome;
  /** The outpoint that was spent by the resolution. */
  outpoint: OutPoint | undefined;
  /** The amount that was claimed by the resolution. */
  amountSat: number | string;
  /**
   * The hex-encoded transaction ID of the sweep transaction that spent the
   * output.
   */
  sweepTxid: string;
}
export interface TimestampedError {
  /** The unix timestamp in seconds when the error occurred. */
  timestamp: number | string;
  /** The string representation of the error sent by our peer. */
  error: string;
}
export interface GetInfoResponse {
  /** The version of the LND software that the node is running. */
  version: string;
  /** The identity pubkey of the current node. */
  identityPubkey: string;
  /** If applicable, the alias of the current node, e.g. "bob" */
  alias: string;
  /** The color of the current node in hex code format */
  color: string;
  /** Number of pending channels */
  numPendingChannels: number | string;
  /** Number of active channels */
  numActiveChannels: number | string;
  /** Number of inactive channels */
  numInactiveChannels: number | string;
  /** Number of peers */
  numPeers: number | string;
  /** The node's current view of the height of the best block */
  blockHeight: number | string;
  /** The node's current view of the hash of the best block */
  blockHash: string;
  /** Timestamp of the block best known to the wallet */
  bestHeaderTimestamp: number | string;
  /** Whether the wallet's view is synced to the main chain */
  syncedToChain: boolean;
  /** Whether we consider ourselves synced with the public channel graph. */
  syncedToGraph: boolean;
  /** A list of active chains the node is connected to */
  chains: Chain[];
  /** The URIs of the current node. */
  uris: string[];
}
export interface Chain {
  /** The blockchain the node is on (eg bitcoin, litecoin) */
  chain: string;
  /** The network the node is on (eg regtest, testnet, mainnet) */
  network: string;
}

export interface PendingHTLC {
  /** The direction within the channel that the htlc was sent */
  incoming: boolean;
  /** The total value of the htlc */
  amount: number | string;
  /** The final output to be swept back to the user's wallet */
  outpoint: string;
  /** The next block height at which we can spend the current stage */
  maturityHeight: number | string;
  /**
   * The number of blocks remaining until the current stage can be swept.
   * Negative values indicate how many blocks have passed since becoming
   * mature.
   */
  blocksTilMaturity: number | string;
  /** Indicates whether the htlc is in its first or second stage of recovery */
  stage: number | string;
}
export interface PendingChannelsResponse {
  /** The balance in satoshis encumbered in pending channels */
  totalLimboBalance: number | string;
  /** Channels pending opening */
  pendingOpenChannels: PendingChannelsResponse_PendingOpenChannel[];
  /** Channels pending force closing */
  pendingForceClosingChannels: PendingChannelsResponse_ForceClosedChannel[];
  /** Channels waiting for closing tx to confirm */
  waitingCloseChannels: PendingChannelsResponse_WaitingCloseChannel[];
}
export interface PendingChannelsResponse_PendingChannel {
  remoteNodePub: string;
  channelPoint: string;
  capacity: number | string;
  localBalance: number | string;
  remoteBalance: number | string;
  /**
   * The minimum satoshis this node is required to reserve in its
   * balance.
   */
  localChanReserveSat: number | string;
  /**
   * The minimum satoshis the other node is required to reserve in its
   * balance.
   */
  remoteChanReserveSat: number | string;
  /** The party that initiated opening the channel. */
  initiator: Initiator;
  /** The commitment type used by this channel. */
  commitmentType: CommitmentType;
}
export interface PendingChannelsResponse_PendingOpenChannel {
  /** The pending channel */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /**
   * The amount calculated to be paid in fees for the current set of
   * commitment transactions. The fee amount is persisted with the channel
   * in order to allow the fee amount to be removed and recalculated with
   * each channel state update, including updates that happen after a system
   * restart.
   */
  commitFee: number | string;
  /** The weight of the commitment transaction */
  commitWeight: number | string;
  /**
   * The required number of satoshis per kilo-weight that the requester will
   * pay at all times, for both the funding transaction and commitment
   * transaction. This value can later be updated once the channel is open.
   */
  feePerKw: number | string;
}
export interface PendingChannelsResponse_WaitingCloseChannel {
  /** The pending channel waiting for closing tx to confirm */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /** The balance in satoshis encumbered in this channel */
  limboBalance: number | string;
  /**
   * A list of valid commitment transactions. Any of these can confirm at
   * this point.
   */
  commitments: PendingChannelsResponse_Commitments | undefined;
}
export interface PendingChannelsResponse_Commitments {
  /** Hash of the local version of the commitment tx. */
  localTxid: string;
  /** Hash of the remote version of the commitment tx. */
  remoteTxid: string;
  /** Hash of the remote pending version of the commitment tx. */
  remotePendingTxid: string;
  /**
   * The amount in satoshis calculated to be paid in fees for the local
   * commitment.
   */
  localCommitFeeSat: number | string;
  /**
   * The amount in satoshis calculated to be paid in fees for the remote
   * commitment.
   */
  remoteCommitFeeSat: number | string;
  /**
   * The amount in satoshis calculated to be paid in fees for the remote
   * pending commitment.
   */
  remotePendingCommitFeeSat: number | string;
}

export interface PendingChannelsResponse_ForceClosedChannel {
  /** The pending channel to be force closed */
  channel: PendingChannelsResponse_PendingChannel | undefined;
  /** The transaction id of the closing transaction */
  closingTxid: string;
  /** The balance in satoshis encumbered in this pending channel */
  limboBalance: number | string;
  /** The height at which funds can be swept into the wallet */
  maturityHeight: number | string;
  /**
   * Remaining # of blocks until the commitment output can be swept.
   * Negative values indicate how many blocks have passed since becoming
   * mature.
   */
  blocksTilMaturity: number | string;
  /** The total value of funds successfully recovered from this channel */
  recoveredBalance: number | string;
  pendingHtlcs: PendingHTLC[];
  anchor: PendingChannelsResponse_ForceClosedChannel_AnchorState;
}
export enum PendingChannelsResponse_ForceClosedChannel_AnchorState {
  LIMBO = 0,
  RECOVERED = 1,
  LOST = 2,
  UNRECOGNIZED = -1,
}
export interface WalletAccountBalance {
  /** The confirmed balance of the account (with >= 1 confirmations). */
  confirmedBalance: number | string;
  /** The unconfirmed balance of the account (with 0 confirmations). */
  unconfirmedBalance: number | string;
}
export interface WalletBalanceResponse {
  /** The balance of the wallet */
  totalBalance: number | string;
  /** The confirmed balance of a wallet(with >= 1 confirmations) */
  confirmedBalance: number | string;
  /** The unconfirmed balance of a wallet(with 0 confirmations) */
  unconfirmedBalance: number | string;
  /** A mapping of each wallet account's name to its balance. */
  accountBalance: Record<string, WalletAccountBalance>;
}
export interface Amount {
  /** Value denominated in satoshis. */
  sat: number | string;
  /** Value denominated in milli-satoshis. */
  msat: number | string;
}
export interface ChannelBalanceResponse {
  /** Sum of channels local balances. */
  localBalance: Amount | undefined;
  /** Sum of channels remote balances. */
  remoteBalance: Amount | undefined;
  /** Sum of channels local unsettled balances. */
  unsettledLocalBalance?: Amount | undefined;
  /** Sum of channels remote unsettled balances. */
  unsettledRemoteBalance?: Amount | undefined;
  /** Sum of channels pending local balances. */
  pendingOpenLocalBalance?: Amount | undefined;
  /** Sum of channels pending remote balances. */
  pendingOpenRemoteBalance?: Amount | undefined;
}
export interface Hop {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  chanId: number | string;
  expiry: number | string;
  amtToForwardMsat: number | string;
  feeMsat: number | string;
  /**
   * An optional public key of the hop. If the public key is given, the payment
   * can be executed without relying on a copy of the channel graph.
   */
  pubKey: string;
  /**
   * If set to true, then this hop will be encoded using the new variable length
   * TLV format. Note that if any custom tlv_records below are specified, then
   * this field MUST be set to true for them to be encoded properly.
   */
  tlvPayload: boolean;
  /**
   * An optional TLV record that signals the use of an MPP payment. If present,
   * the receiver will enforce that the same mpp_record is included in the final
   * hop payload of all non-zero payments in the HTLC set. If empty, a regular
   * single-shot payment is or was attempted.
   */
  mppRecord: MPPRecord | undefined;
  /**
   * An optional TLV record that signals the use of an AMP payment. If present,
   * the receiver will treat all received payments including the same
   * (payment_addr, set_id) pair  as being part of one logical payment. The
   * payment will be settled by XORing the root_share's together and deriving the
   * child hashes and preimages according to BOLT XX. Must be used in conjunction
   * with mpp_record.
   */
  ampRecord: AMPRecord | undefined;
}
export interface MPPRecord {
  /**
   * The total amount in milli-satoshis being sent as part of a larger multi-path
   * payment. The caller is responsible for ensuring subpayments to the same node
   * and payment_hash sum exactly to total_amt_msat. The same
   * total_amt_msat must be used on all subpayments.
   */
  totalAmtMsat: number | string;
}
export interface AMPRecord {
  childIndex: number | string;
}
/**
 * A path through the channel graph which runs over one or more channels in
 * succession. This struct carries all the information required to craft the
 * Sphinx onion packet, and send the payment along the first hop in the path. A
 * route is only selected as valid if all the channels have sufficient capacity to
 * carry the initial payment amount after fees are accounted for.
 */
export interface Route {
  /**
   * The cumulative (final) time lock across the entire route. This is the CLTV
   * value that should be extended to the first hop in the route. All other hops
   * will decrement the time-lock as advertised, leaving enough time for all
   * hops to wait for or present the payment preimage to complete the payment.
   */
  totalTimeLock: number | string;
  /** Contains details concerning the specific forwarding details at each hop. */
  hops: Hop[];
  /** The total fees in millisatoshis. */
  totalFeesMsat: number | string;
  /** The total amount in millisatoshis. */
  totalAmtMsat: number | string;
}
export interface NodeInfo {
  /**
   * An individual vertex/node within the channel graph. A node is
   * connected to other nodes by one or more channel edges emanating from it. As
   * the graph is directed, a node will also have an incoming edge attached to
   * it for each outgoing edge.
   */
  node: LightningNode | undefined;
  /** The total number of channels for the node. */
  numChannels: number | string;
  /** The sum of all channels capacity for the node, denominated in satoshis. */
  totalCapacity: number | string;
  /** A list of all public channels for the node. */
  channels: ChannelEdge[];
}
/**
 * An individual vertex/node within the channel graph. A node is
 * connected to other nodes by one or more channel edges emanating from it. As the
 * graph is directed, a node will also have an incoming edge attached to it for
 * each outgoing edge.
 */
export interface LightningNode {
  lastUpdate: number | string;
  pubKey: string;
  alias: string;
  addresses: NodeAddress[];
  color: string;
  features: Record<number, Feature>;
}
export interface NodeAddress {
  network: string;
  addr: string;
}
export interface RoutingPolicy {
  timeLockDelta: number | string;
  minHtlc: number | string;
  feeBaseMsat: number | string;
  feeRateMilliMsat: number | string;
  disabled: boolean;
  maxHtlcMsat: number | string;
  lastUpdate: number | string;
}
/**
 * A fully authenticated channel along with all its unique attributes.
 * Once an authenticated channel announcement has been processed on the network,
 * then an instance of ChannelEdgeInfo encapsulating the channels attributes is
 * stored. The other portions relevant to routing policy of a channel are stored
 * within a ChannelEdgePolicy for each direction of the channel.
 */
export interface ChannelEdge {
  /**
   * The unique channel ID for the channel. The first 3 bytes are the block
   * height, the next 3 the index within the block, and the last 2 bytes are the
   * output index for the channel.
   */
  channelId: number | string;
  chanPoint: string;
  node1Pub: string;
  node2Pub: string;
  capacity: number | string;
  node1Policy: RoutingPolicy | undefined;
  node2Policy: RoutingPolicy | undefined;
}
export interface HopHint {
  /** The public key of the node at the start of the channel. */
  nodeId: string;
  /** The unique identifier of the channel. */
  chanId: number | string;
  /** The base fee of the channel denominated in millisatoshis. */
  feeBaseMsat: number | string;
  /**
   * The fee rate of the channel for sending one satoshi across it denominated in
   * millionths of a satoshi.
   */
  feeProportionalMillionths: number | string;
  /** The time-lock delta of the channel. */
  cltvExpiryDelta: number | string;
}
export interface RouteHint {
  /**
   * A list of hop hints that when chained together can assist in reaching a
   * specific destination.
   */
  hopHints: HopHint[];
}
export interface Invoice {
  /**
   * An optional memo to attach along with the invoice. Used for record keeping
   * purposes for the invoice's creator, and will also be set in the description
   * field of the encoded payment request if the description_hash field is not
   * being used.
   */
  memo: string;
  /**
   * The value of this invoice in satoshis
   *
   * The fields value and value_msat are mutually exclusive.
   */
  value?: number | string;
  /**
   * The value of this invoice in millisatoshis
   *
   * The fields value and value_msat are mutually exclusive.
   */
  valueMsat?: number | string;
  /** When this invoice was created */
  creationDate?: number | string;
  /** When this invoice was settled */
  settleDate?: number | string;
  /**
   * A bare-bones invoice for a payment within the Lightning Network. With the
   * details of the invoice, the sender has all the data necessary to send a
   * payment to the recipient.
   */
  paymentRequest: string;
  /**
   * Route hints that can each be individually used to assist in reaching the
   * invoice's destination.
   */
  routeHints?: RouteHint[];
  /** Whether this invoice should include routing hints for private channels. */
  private?: boolean;
  /**
   * The "add" index of this invoice. Each newly created invoice will increment
   * this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all added
   * invoices with an add_index greater than this one.
   */
  addIndex?: number | string;
  /**
   * The "settle" index of this invoice. Each newly settled invoice will
   * increment this index making it monotonically increasing. Callers to the
   * SubscribeInvoices call can use this to instantly get notified of all
   * settled invoices with an settle_index greater than this one.
   */
  settleIndex?: number | string;
  /**
   * The amount that was accepted for this invoice, in satoshis. This will ONLY
   * be set if this invoice has been settled. We provide this field as if the
   * invoice was created with a zero value, then we need to record what amount
   * was ultimately accepted. Additionally, it's possible that the sender paid
   * MORE that was specified in the original invoice. So we'll record that here
   * as well.
   */
  amtPaidSat?: number | string;
  /**
   * The amount that was accepted for this invoice, in millisatoshis. This will
   * ONLY be set if this invoice has been settled. We provide this field as if
   * the invoice was created with a zero value, then we need to record what
   * amount was ultimately accepted. Additionally, it's possible that the sender
   * paid MORE that was specified in the original invoice. So we'll record that
   * here as well.
   */
  amtPaidMsat?: number | string;
  /** The state the invoice is in. */
  state: Invoice_InvoiceState;
  /**
   * Indicates if this invoice was a spontaneous payment that arrived via keysend
   * [EXPERIMENTAL].
   */
  isKeysend?: boolean;
  /** Signals whether or not this is an AMP invoice. */
  isAmp?: boolean;
}
export enum Invoice_InvoiceState {
  OPEN = 0,
  SETTLED = 1,
  CANCELED = 2,
  ACCEPTED = 3,
  UNRECOGNIZED = -1,
}
/** Details of an HTLC that paid to an invoice */
export interface InvoiceHTLC {
  /** Short channel id over which the htlc was received. */
  chanId: number | string;
  /** Index identifying the htlc on the channel. */
  htlcIndex: number | string;
  /** The amount of the htlc in msat. */
  amtMsat: number | string;
  /** Block height at which this htlc was accepted. */
  acceptHeight: number | string;
  /** Time at which this htlc was accepted. */
  acceptTime: number | string;
  /** Time at which this htlc was settled or canceled. */
  resolveTime: number | string;
  /** Block height at which this htlc expires. */
  expiryHeight: number | string;
  /** Current state the htlc is in. */
  state: InvoiceHTLCState;
  /** The total amount of the mpp payment in msat. */
  mppTotalAmtMsat: number | string;
}

export interface ListInvoiceResponse {
  /**
   * A list of invoices from the time slice of the time series specified in the
   * request.
   */
  invoices: Invoice[];
  /**
   * The index of the last item in the set of returned invoices. This can be used
   * to seek further, pagination style.
   */
  lastIndexOffset?: number | string;
  /**
   * The index of the last item in the set of returned invoices. This can be used
   * to seek backwards, pagination style.
   */
  firstIndexOffset?: number | string;
}
export interface Payment {
  /** The payment hash */
  paymentHash: string;
  /** The payment preimage */
  paymentPreimage: string;
  /** The value of the payment in satoshis */
  valueSat: number | string;
  /** The value of the payment in milli-satoshis */
  valueMsat: number | string;
  /** The optional payment request being fulfilled. */
  paymentRequest: string;
  /** The status of the payment. */
  status: Payment_PaymentStatus;
  /** The fee paid for this payment in satoshis */
  feeSat: number | string;
  /** The fee paid for this payment in milli-satoshis */
  feeMsat: number | string;
  /** The time in UNIX nanoseconds at which the payment was created. */
  creationTimeNs: number | string;
  /** The HTLCs made in attempt to settle the payment. */
  htlcs: HTLCAttempt[];
  /**
   * The creation index of this payment. Each payment can be uniquely identified
   * by this index, which may not strictly increment by 1 for payments made in
   * older versions of lnd.
   */
  paymentIndex: number | string;
  failureReason: PaymentFailureReason;
}
export enum Payment_PaymentStatus {
  UNKNOWN = 0,
  IN_FLIGHT = 1,
  SUCCEEDED = 2,
  FAILED = 3,
  UNRECOGNIZED = -1,
}
export interface HTLCAttempt {
  /** The unique ID that is used for this attempt. */
  attemptId: number | string;
  /** The status of the HTLC. */
  status: HTLCAttempt_HTLCStatus;
  /** The route taken by this HTLC. */
  route: Route | undefined;
  /** The time in UNIX nanoseconds at which this HTLC was sent. */
  attemptTimeNs: number | string;
  /**
   * The time in UNIX nanoseconds at which this HTLC was settled or failed.
   * This value will not be set if the HTLC is still IN_FLIGHT.
   */
  resolveTimeNs: number | string;
  /** Detailed htlc failure info. */
  failure: Failure | undefined;
}
export enum HTLCAttempt_HTLCStatus {
  IN_FLIGHT = 0,
  SUCCEEDED = 1,
  FAILED = 2,
  UNRECOGNIZED = -1,
}
export interface ListPaymentsResponse {
  /** The list of payments */
  payments: Payment[];
  /**
   * The index of the first item in the set of returned payments. This can be
   * used as the index_offset to continue seeking backwards in the next request.
   */
  firstIndexOffset: number | string;
  /**
   * The index of the last item in the set of returned payments. This can be used
   * as the index_offset to continue seeking forwards in the next request.
   */
  lastIndexOffset: number | string;
}

export interface PayRequest {
  destination?: string;
  paymentHash?: string;
  numSatoshis?: number | string;
  timestamp?: number | string;
  expiry?: number | string;
  description: string;
  descriptionHash?: string;
  numMsat?: number | string;
  /**
   * The name of the vendor for this offer
   */
  vendor?: string;
}
export interface Feature {
  name: string;
  isRequired: boolean;
  isKnown: boolean;
}
export interface ChannelFeeReport {
  /** The short channel id that this fee report belongs to. */
  chanId: number | string;
  /** The channel that this fee report belongs to. */
  channelPoint: string;
  /** The base fee charged regardless of the number of milli-satoshis sent. */
  baseFeeMsat: number | string;
  /**
   * The amount charged per milli-satoshis transferred expressed in
   * millionths of a satoshi.
   */
  feePerMil: number | string;
  /**
   * The effective fee rate in milli-satoshis. Computed by dividing the
   * fee_per_mil value by 1 million.
   */
  feeRate: number | string;
}
export interface FeeReportResponse {
  /**
   * An array of channel fee reports which describes the current fee schedule
   * for each channel.
   */
  channelFees: ChannelFeeReport[];
  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 24 hrs.
   */
  dayFeeSum: number | string;
  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 1 week.
   */
  weekFeeSum: number | string;
  /**
   * The total amount of fee revenue (in satoshis) the switch has collected
   * over the past 1 month.
   */
  monthFeeSum: number | string;
}
export interface ForwardingEvent {
  /** The incoming channel ID that carried the HTLC that created the circuit. */
  chanIdIn: number | string;
  /**
   * The outgoing channel ID that carried the preimage that completed the
   * circuit.
   */
  chanIdOut: number | string;
  /**
   * The total amount (in satoshis) of the incoming HTLC that created half
   * the circuit.
   */
  amtIn: number | string;
  /**
   * The total amount (in satoshis) of the outgoing HTLC that created the
   * second half of the circuit.
   */
  amtOut: number | string;
  /** The total fee (in satoshis) that this payment circuit carried. */
  fee: number | string;
  /** The total fee (in milli-satoshis) that this payment circuit carried. */
  feeMsat: number | string;
  /**
   * The total amount (in milli-satoshis) of the incoming HTLC that created
   * half the circuit.
   */
  amtInMsat: number | string;
  /**
   * The total amount (in milli-satoshis) of the outgoing HTLC that created
   * the second half of the circuit.
   */
  amtOutMsat: number | string;
  /**
   * The number of nanoseconds elapsed since January 1, 1970 UTC when this
   * circuit was completed.
   */
  timestampNs: number | string;
}
export interface ForwardingHistoryResponse {
  /**
   * A list of forwarding events from the time slice of the time series
   * specified in the request.
   */
  forwardingEvents: ForwardingEvent[];
  /**
   * The index of the last time in the set of returned forwarding events. Can
   * be used to seek further, pagination style.
   */
  lastOffsetIndex: number | string;
}

export interface Failure {
  /** Failure code as defined in the Lightning spec */
  code: Failure_FailureCode;
  /** An optional channel update message. */
  channelUpdate: ChannelUpdate | undefined;
  /** A failure type-dependent htlc value. */
  htlcMsat: number | string;
  /** A failure type-dependent cltv expiry value. */
  cltvExpiry: number | string;
  /** A failure type-dependent flags value. */
  flags: number | string;
  /**
   * The position in the path of the intermediate or final node that generated
   * the failure message. Position zero is the sender node.
   */
  failureSourceIndex: number | string;
  /** A failure type-dependent block height. */
  height: number | string;
}
export enum Failure_FailureCode {
  /**
   * RESERVED - The numbers assigned in this enumeration match the failure codes as
   * defined in BOLT #4. Because protobuf 3 requires enums to start with 0,
   * a RESERVED value is added.
   */
  RESERVED = 0,
  INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS = 1,
  INCORRECT_PAYMENT_AMOUNT = 2,
  FINAL_INCORRECT_CLTV_EXPIRY = 3,
  FINAL_INCORRECT_HTLC_AMOUNT = 4,
  FINAL_EXPIRY_TOO_SOON = 5,
  INVALID_REALM = 6,
  EXPIRY_TOO_SOON = 7,
  INVALID_ONION_VERSION = 8,
  INVALID_ONION_HMAC = 9,
  INVALID_ONION_KEY = 10,
  AMOUNT_BELOW_MINIMUM = 11,
  FEE_INSUFFICIENT = 12,
  INCORRECT_CLTV_EXPIRY = 13,
  CHANNEL_DISABLED = 14,
  TEMPORARY_CHANNEL_FAILURE = 15,
  REQUIRED_NODE_FEATURE_MISSING = 16,
  REQUIRED_CHANNEL_FEATURE_MISSING = 17,
  UNKNOWN_NEXT_PEER = 18,
  TEMPORARY_NODE_FAILURE = 19,
  PERMANENT_NODE_FAILURE = 20,
  PERMANENT_CHANNEL_FAILURE = 21,
  EXPIRY_TOO_FAR = 22,
  MPP_TIMEOUT = 23,
  INVALID_ONION_PAYLOAD = 24,
  /** INTERNAL_FAILURE - An internal error occurred. */
  INTERNAL_FAILURE = 997,
  /** UNKNOWN_FAILURE - The error source is known, but the failure itself couldn't be decoded. */
  UNKNOWN_FAILURE = 998,
  /**
   * UNREADABLE_FAILURE - An unreadable failure result is returned if the received failure message
   * cannot be decrypted. In that case the error source is unknown.
   */
  UNREADABLE_FAILURE = 999,
  UNRECOGNIZED = -1,
}

export interface ChannelUpdate {
  /** The unique description of the funding transaction. */
  chanId: number | string;
  /**
   * A timestamp that allows ordering in the case of multiple announcements.
   * We should ignore the message if timestamp is not greater than the
   * last-received.
   */
  timestamp: number | string;
  /**
   * The bitfield that describes whether optional fields are present in this
   * update. Currently, the least-significant bit must be set to 1 if the
   * optional field MaxHtlc is present.
   */
  messageFlags: number | string;
  /**
   * The bitfield that describes additional meta-data concerning how the
   * update is to be interpreted. Currently, the least-significant bit must be
   * set to 0 if the creating node corresponds to the first node in the
   * previously sent channel announcement and 1 otherwise. If the second bit
   * is set, then the channel is set to be disabled.
   */
  channelFlags: number | string;
  /**
   * The minimum number of blocks this node requires to be added to the expiry
   * of HTLCs. This is a security parameter determined by the node operator.
   * This value represents the required gap between the time locks of the
   * incoming and outgoing HTLC's set to this node.
   */
  timeLockDelta: number | string;
  /** The minimum HTLC value which will be accepted. */
  htlcMinimumMsat: number | string;
  /**
   * The base fee that must be used for incoming HTLC's to this particular
   * channel. This value will be tacked onto the required for a payment
   * independent of the size of the payment.
   */
  baseFee: number | string;
  /** The fee rate that will be charged per millionth of a satoshi. */
  feeRate: number | string;
  /** The maximum HTLC value which will be accepted. */
  htlcMaximumMsat: number | string;
}

export interface GenSeedResponse {
  /**
   * CipherSeedMnemonic is a 24-word mnemonic that encodes a prior aezeed
   * cipher seed obtained by the user. This field is optional, as if not
   * provided, then the daemon will generate a new cipher seed for the user.
   * Otherwise, then the daemon will attempt to recover the wallet state linked
   * to this cipher seed.
   */
  cipherSeedMnemonic: string[];
}
