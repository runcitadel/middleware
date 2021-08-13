/** These types are based on LND's GRPC API and have been cleaned up a bit. More stuff might be added or removed here, depending on what we need for c-lightning. */
export enum AddressType {
    WITNESS_PUBKEY_HASH = 0,
    NESTED_PUBKEY_HASH = 1,
    UNUSED_WITNESS_PUBKEY_HASH = 2,
    UNUSED_NESTED_PUBKEY_HASH = 3,
    UNRECOGNIZED = -1
}
export interface SendCoinsResponse {
    /** The transaction ID of the transaction */
    txid: string;
}
export enum CommitmentType {
    /**
     * LEGACY - A channel using the legacy commitment format having tweaked to_remote
     * keys.
     */
    LEGACY = 0,
    /**
     * STATIC_REMOTE_KEY - A channel that uses the modern commitment format where the key in the
     * output of the remote party does not change each state. This makes back
     * up and recovery easier as when the channel is closed, the funds go
     * directly to that key.
     */
    STATIC_REMOTE_KEY = 1,
    /**
     * ANCHORS - A channel that uses a commitment format that has anchor outputs on the
     * commitments, allowing fee bumping after a force close transaction has
     * been broadcast.
     */
    ANCHORS = 2,
    /** UNKNOWN_COMMITMENT_TYPE - Returned when the commitment type isn't known or unavailable. */
    UNKNOWN_COMMITMENT_TYPE = 999,
    UNRECOGNIZED = -1
}
export enum Initiator {
    INITIATOR_UNKNOWN = 0,
    INITIATOR_LOCAL = 1,
    INITIATOR_REMOTE = 2,
    INITIATOR_BOTH = 3,
    UNRECOGNIZED = -1
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
    UNRECOGNIZED = -1
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
    UNRECOGNIZED = -1
}
export enum InvoiceHTLCState {
    ACCEPTED = 0,
    SETTLED = 1,
    CANCELED = 2,
    UNRECOGNIZED = -1
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
    UNRECOGNIZED = -1
}
export interface Utxo {
    /** The type of address */
    addressType: AddressType;
    /** The address */
    address: string;
    /** The value of the unspent coin in satoshis */
    amountSat: number;
    /** The pkscript in hex */
    pkScript: string;
    /** The outpoint in format txid:n */
    outpoint: OutPoint | undefined;
    /** The number of confirmations for the Utxo */
    confirmations: number;
}
export interface Transaction {
    /** The transaction hash */
    txHash: string;
    /** The transaction amount, denominated in satoshis */
    amount: number;
    /** The number of confirmations */
    numConfirmations: number;
    /** The hash of the block this transaction was included in */
    blockHash: string;
    /** The height of the block this transaction was included in */
    blockHeight: number;
    /** Timestamp of this transaction */
    timeStamp: number;
    /** Fees paid for this transaction */
    totalFees: number;
    /** Addresses that received funds for this transaction */
    destAddresses: string[];
    /** The raw transaction hex. */
    rawTxHex: string;
    /** A label that was optionally set on transaction broadcast. */
    label: string;
}
export interface SendResponse {
    paymentError: string;
    paymentPreimage: Uint8Array;
    paymentRoute: Route | undefined;
    paymentHash: Uint8Array;
}
export interface ChannelPoint {
    /**
     * Txid of the funding transaction. When using REST, this field must be
     * encoded as base64.
     */
    fundingTxidBytes: Uint8Array | undefined;
    /**
     * Hex-encoded string representing the byte-reversed hash of the funding
     * transaction.
     */
    fundingTxidStr: string | undefined;
    /** The index of the output of the funding transaction */
    outputIndex: number;
}
export interface OutPoint {
    /** Raw bytes representing the transaction id. */
    txidBytes: Uint8Array;
    /** Reversed, hex-encoded string representing the transaction id. */
    txidStr: string;
    /** The index of the output on the transaction. */
    outputIndex: number;
}
export interface EstimateFeeResponse {
    /** The total fee in satoshis. */
    feeSat: number;
    /** The fee rate in satoshi/vbyte. */
    satPerVbyte: number;
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
    amount: number;
    hashLock: Uint8Array;
    expirationHeight: number;
    /** Index identifying the htlc on the channel. */
    htlcIndex: number;
    /**
     * If this HTLC is involved in a forwarding operation, this field indicates
     * the forwarding channel. For an outgoing htlc, it is the incoming channel.
     * For an incoming htlc, it is the outgoing channel. When the htlc
     * originates from this node or this node is the final destination,
     * forwarding_channel will be zero. The forwarding channel will also be zero
     * for htlcs that need to be forwarded but don't have a forwarding decision
     * persisted yet.
     */
    forwardingChannel: number;
    /** Index identifying the htlc on the forwarding channel. */
    forwardingHtlcIndex: number;
}
export interface ChannelConstraints {
    /**
     * The CSV delay expressed in relative blocks. If the channel is force closed,
     * we will need to wait for this many blocks before we can regain our funds.
     */
    csvDelay: number;
    /** The minimum satoshis this node is required to reserve in its balance. */
    chanReserveSat: number;
    /** The dust limit (in satoshis) of the initiator's commitment tx. */
    dustLimitSat: number;
    /**
     * The maximum amount of coins in millisatoshis that can be pending in this
     * channel.
     */
    maxPendingAmtMsat: number;
    /** The smallest HTLC in millisatoshis that the initiator will accept. */
    minHtlcMsat: number;
    /** The total number of incoming HTLC's that the initiator will accept. */
    maxAcceptedHtlcs: number;
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
    chanId: number;
    /** The total amount of funds held in this channel */
    capacity: number;
    /** This node's current balance in this channel */
    localBalance: number;
    /** The counterparty's current balance in this channel */
    remoteBalance: number;
    /**
     * The amount calculated to be paid in fees for the current set of commitment
     * transactions. The fee amount is persisted with the channel in order to
     * allow the fee amount to be removed and recalculated with each channel state
     * update, including updates that happen after a system restart.
     */
    commitFee: number;
    /** The weight of the commitment transaction */
    commitWeight: number;
    /**
     * The required number of satoshis per kilo-weight that the requester will pay
     * at all times, for both the funding transaction and commitment transaction.
     * This value can later be updated once the channel is open.
     */
    feePerKw: number;
    /** The unsettled balance in this channel */
    unsettledBalance: number;
    /** The total number of satoshis we've sent within this channel. */
    totalSatoshisSent: number;
    /** The total number of satoshis we've received within this channel. */
    totalSatoshisReceived: number;
    /** The total number of updates conducted within this channel. */
    numUpdates: number;
    /** The list of active, uncleared HTLCs currently pending within the channel. */
    pendingHtlcs: HTLC[];
    /** Whether this channel is advertised to the network or not. */
    private: boolean;
    /** True if we were the ones that created the channel. */
    initiator: boolean;
    /** A set of flags showing the current state of the channel. */
    chanStatusFlags: string;
    /** The commitment type used by this channel. */
    commitmentType: CommitmentType;
    /**
     * The number of seconds that the channel has been monitored by the channel
     * scoring system. Scores are currently not persisted, so this value may be
     * less than the lifetime of the channel [EXPERIMENTAL].
     */
    lifetime: number;
    /**
     * The number of seconds that the remote peer has been observed as being online
     * by the channel scoring system over the lifetime of the channel
     * [EXPERIMENTAL].
     */
    uptime: number;
    /**
     * Close address is the address that we will enforce payout to on cooperative
     * close if the channel was opened utilizing option upfront shutdown. This
     * value can be set on channel open by setting close_address in an open channel
     * request. If this value is not set, you can still choose a payout address by
     * cooperatively closing with the delivery_address field set.
     */
    closeAddress: string;
    /**
     * The amount that the initiator of the channel optionally pushed to the remote
     * party on channel open. This amount will be zero if the channel initiator did
     * not push any funds to the remote peer. If the initiator field is true, we
     * pushed this amount to our peer, if it is false, the remote peer pushed this
     * amount to us.
     */
    pushAmountSat: number;
    /**
     * This uint32 indicates if this channel is to be considered 'frozen'. A
     * frozen channel doest not allow a cooperative channel close by the
     * initiator. The thaw_height is the height that this restriction stops
     * applying to the channel. This field is optional, not setting it or using a
     * value of zero will mean the channel has no additional restrictions. The
     * height can be interpreted in two ways: as a relative height if the value is
     * less than 500,000, or as an absolute height otherwise.
     */
    thawHeight: number;
    /** List constraints for the local node. */
    localConstraints: ChannelConstraints | undefined;
    /** List constraints for the remote node. */
    remoteConstraints: ChannelConstraints | undefined;
}
export interface ChannelCloseSummary {
    /** The outpoint (txid:index) of the funding transaction. */
    channelPoint: string;
    /** The unique channel ID for the channel. */
    chanId: number;
    /** The hash of the genesis block that this channel resides within. */
    chainHash: string;
    /** The txid of the transaction which ultimately closed this channel. */
    closingTxHash: string;
    /** Public key of the remote peer that we formerly had a channel with. */
    remotePubkey: string;
    /** Total capacity of the channel. */
    capacity: number;
    /** Height at which the funding transaction was spent. */
    closeHeight: number;
    /** Settled balance at the time of channel closure */
    settledBalance: number;
    /** The sum of all the time-locked outputs at the time of channel closure */
    timeLockedBalance: number;
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
    UNRECOGNIZED = -1
}
export interface Resolution {
    /** The type of output we are resolving. */
    resolutionType: ResolutionType;
    /** The outcome of our on chain action that resolved the outpoint. */
    outcome: ResolutionOutcome;
    /** The outpoint that was spent by the resolution. */
    outpoint: OutPoint | undefined;
    /** The amount that was claimed by the resolution. */
    amountSat: number;
    /**
     * The hex-encoded transaction ID of the sweep transaction that spent the
     * output.
     */
    sweepTxid: string;
}
export interface Peer {
    /** The identity pubkey of the peer */
    pubKey: string;
    /** Network address of the peer; eg `127.0.0.1:10011` */
    address: string;
    /** Bytes of data transmitted to this peer */
    bytesSent: number;
    /** Bytes of data transmitted from this peer */
    bytesRecv: number;
    /** Satoshis sent to this peer */
    satSent: number;
    /** Satoshis received from this peer */
    satRecv: number;
    /** A channel is inbound if the counterparty initiated the channel */
    inbound: boolean;
    /** Ping time to this peer */
    pingTime: number;
    /** The type of sync we are currently performing with this peer. */
    syncType: Peer_SyncType;
    /** Features advertised by the remote peer in their init message. */
    features: {
        [key: number]: Feature;
    };
    /**
     * The latest errors received from our peer with timestamps, limited to the 10
     * most recent errors. These errors are tracked across peer connections, but
     * are not persisted across lnd restarts. Note that these errors are only
     * stored for peers that we have channels open with, to prevent peers from
     * spamming us with errors at no cost.
     */
    errors: TimestampedError[];
    /**
     * The number of times we have recorded this peer going offline or coming
     * online, recorded across restarts. Note that this value is decreased over
     * time if the peer has not recently flapped, so that we can forgive peers
     * with historically high flap counts.
     */
    flapCount: number;
    /**
     * The timestamp of the last flap we observed for this peer. If this value is
     * zero, we have not observed any flaps for this peer.
     */
    lastFlapNs: number;
}
export enum Peer_SyncType {
    /** UNKNOWN_SYNC - Denotes that we cannot determine the peer's current sync type. */
    UNKNOWN_SYNC = 0,
    /** ACTIVE_SYNC - Denotes that we are actively receiving new graph updates from the peer. */
    ACTIVE_SYNC = 1,
    /** PASSIVE_SYNC - Denotes that we are not receiving new graph updates from the peer. */
    PASSIVE_SYNC = 2,
    /** PINNED_SYNC - Denotes that this peer is pinned into an active sync. */
    PINNED_SYNC = 3,
    UNRECOGNIZED = -1
}
export interface TimestampedError {
    /** The unix timestamp in seconds when the error occurred. */
    timestamp: number;
    /** The string representation of the error sent by our peer. */
    error: string;
}
export interface GetInfoResponse {
    /** The version of the LND software that the node is running. */
    version: string;
    /** The SHA1 commit hash that the daemon is compiled with. */
    commitHash: string;
    /** The identity pubkey of the current node. */
    identityPubkey: string;
    /** If applicable, the alias of the current node, e.g. "bob" */
    alias: string;
    /** The color of the current node in hex code format */
    color: string;
    /** Number of pending channels */
    numPendingChannels: number;
    /** Number of active channels */
    numActiveChannels: number;
    /** Number of inactive channels */
    numInactiveChannels: number;
    /** Number of peers */
    numPeers: number;
    /** The node's current view of the height of the best block */
    blockHeight: number;
    /** The node's current view of the hash of the best block */
    blockHash: string;
    /** Timestamp of the block best known to the wallet */
    bestHeaderTimestamp: number;
    /** Whether the wallet's view is synced to the main chain */
    syncedToChain: boolean;
    /** Whether we consider ourselves synced with the public channel graph. */
    syncedToGraph: boolean;
    /** A list of active chains the node is connected to */
    chains: Chain[];
    /** The URIs of the current node. */
    uris: string[];
    /**
     * Features that our node has advertised in our init message, node
     * announcements and invoices.
     */
    features: {
        [key: number]: Feature;
    };
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
    amount: number;
    /** The final output to be swept back to the user's wallet */
    outpoint: string;
    /** The next block height at which we can spend the current stage */
    maturityHeight: number;
    /**
     * The number of blocks remaining until the current stage can be swept.
     * Negative values indicate how many blocks have passed since becoming
     * mature.
     */
    blocksTilMaturity: number;
    /** Indicates whether the htlc is in its first or second stage of recovery */
    stage: number;
}
export interface PendingChannelsResponse {
    /** The balance in satoshis encumbered in pending channels */
    totalLimboBalance: number;
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
    capacity: number;
    localBalance: number;
    remoteBalance: number;
    /**
     * The minimum satoshis this node is required to reserve in its
     * balance.
     */
    localChanReserveSat: number;
    /**
     * The minimum satoshis the other node is required to reserve in its
     * balance.
     */
    remoteChanReserveSat: number;
    /** The party that initiated opening the channel. */
    initiator: Initiator;
    /** The commitment type used by this channel. */
    commitmentType: CommitmentType;
}
export interface PendingChannelsResponse_PendingOpenChannel {
    /** The pending channel */
    channel: PendingChannelsResponse_PendingChannel | undefined;
    /** The height at which this channel will be confirmed */
    confirmationHeight: number;
    /**
     * The amount calculated to be paid in fees for the current set of
     * commitment transactions. The fee amount is persisted with the channel
     * in order to allow the fee amount to be removed and recalculated with
     * each channel state update, including updates that happen after a system
     * restart.
     */
    commitFee: number;
    /** The weight of the commitment transaction */
    commitWeight: number;
    /**
     * The required number of satoshis per kilo-weight that the requester will
     * pay at all times, for both the funding transaction and commitment
     * transaction. This value can later be updated once the channel is open.
     */
    feePerKw: number;
}
export interface PendingChannelsResponse_WaitingCloseChannel {
    /** The pending channel waiting for closing tx to confirm */
    channel: PendingChannelsResponse_PendingChannel | undefined;
    /** The balance in satoshis encumbered in this channel */
    limboBalance: number;
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
    localCommitFeeSat: number;
    /**
     * The amount in satoshis calculated to be paid in fees for the remote
     * commitment.
     */
    remoteCommitFeeSat: number;
    /**
     * The amount in satoshis calculated to be paid in fees for the remote
     * pending commitment.
     */
    remotePendingCommitFeeSat: number;
}

export interface PendingChannelsResponse_ForceClosedChannel {
    /** The pending channel to be force closed */
    channel: PendingChannelsResponse_PendingChannel | undefined;
    /** The transaction id of the closing transaction */
    closingTxid: string;
    /** The balance in satoshis encumbered in this pending channel */
    limboBalance: number;
    /** The height at which funds can be swept into the wallet */
    maturityHeight: number;
    /**
     * Remaining # of blocks until the commitment output can be swept.
     * Negative values indicate how many blocks have passed since becoming
     * mature.
     */
    blocksTilMaturity: number;
    /** The total value of funds successfully recovered from this channel */
    recoveredBalance: number;
    pendingHtlcs: PendingHTLC[];
    anchor: PendingChannelsResponse_ForceClosedChannel_AnchorState;
}
export enum PendingChannelsResponse_ForceClosedChannel_AnchorState {
    LIMBO = 0,
    RECOVERED = 1,
    LOST = 2,
    UNRECOGNIZED = -1
}
export interface WalletAccountBalance {
    /** The confirmed balance of the account (with >= 1 confirmations). */
    confirmedBalance: number;
    /** The unconfirmed balance of the account (with 0 confirmations). */
    unconfirmedBalance: number;
}
export interface WalletBalanceResponse {
    /** The balance of the wallet */
    totalBalance: number;
    /** The confirmed balance of a wallet(with >= 1 confirmations) */
    confirmedBalance: number;
    /** The unconfirmed balance of a wallet(with 0 confirmations) */
    unconfirmedBalance: number;
    /** A mapping of each wallet account's name to its balance. */
    accountBalance: {
        [key: string]: WalletAccountBalance;
    };
}
export interface Amount {
    /** Value denominated in satoshis. */
    sat: number;
    /** Value denominated in milli-satoshis. */
    msat: number;
}
export interface ChannelBalanceResponse {
    /** Sum of channels local balances. */
    localBalance: Amount | undefined;
    /** Sum of channels remote balances. */
    remoteBalance: Amount | undefined;
    /** Sum of channels local unsettled balances. */
    unsettledLocalBalance: Amount | undefined;
    /** Sum of channels remote unsettled balances. */
    unsettledRemoteBalance: Amount | undefined;
    /** Sum of channels pending local balances. */
    pendingOpenLocalBalance: Amount | undefined;
    /** Sum of channels pending remote balances. */
    pendingOpenRemoteBalance: Amount | undefined;
}
export interface Hop {
    /**
     * The unique channel ID for the channel. The first 3 bytes are the block
     * height, the next 3 the index within the block, and the last 2 bytes are the
     * output index for the channel.
     */
    chanId: number;
    expiry: number;
    amtToForwardMsat: number;
    feeMsat: number;
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
    /**
     * An optional set of key-value TLV records. This is useful within the context
     * of the SendToRoute call as it allows callers to specify arbitrary K-V pairs
     * to drop off at each hop within the onion.
     */
    customRecords: {
        [key: number]: Uint8Array;
    };
}
export interface MPPRecord {
    /**
     * A unique, random identifier used to authenticate the sender as the intended
     * payer of a multi-path payment. The payment_addr must be the same for all
     * subpayments, and match the payment_addr provided in the receiver's invoice.
     * The same payment_addr must be used on all subpayments.
     */
    paymentAddr: Uint8Array;
    /**
     * The total amount in milli-satoshis being sent as part of a larger multi-path
     * payment. The caller is responsible for ensuring subpayments to the same node
     * and payment_hash sum exactly to total_amt_msat. The same
     * total_amt_msat must be used on all subpayments.
     */
    totalAmtMsat: number;
}
export interface AMPRecord {
    rootShare: Uint8Array;
    setId: Uint8Array;
    childIndex: number;
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
    totalTimeLock: number;
    /** Contains details concerning the specific forwarding details at each hop. */
    hops: Hop[];
    /** The total fees in millisatoshis. */
    totalFeesMsat: number;
    /** The total amount in millisatoshis. */
    totalAmtMsat: number;
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
    numChannels: number;
    /** The sum of all channels capacity for the node, denominated in satoshis. */
    totalCapacity: number;
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
    lastUpdate: number;
    pubKey: string;
    alias: string;
    addresses: NodeAddress[];
    color: string;
    features: {
        [key: number]: Feature;
    };
}
export interface NodeAddress {
    network: string;
    addr: string;
}
export interface RoutingPolicy {
    timeLockDelta: number;
    minHtlc: number;
    feeBaseMsat: number;
    feeRateMilliMsat: number;
    disabled: boolean;
    maxHtlcMsat: number;
    lastUpdate: number;
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
    channelId: number;
    chanPoint: string;
    node1Pub: string;
    node2Pub: string;
    capacity: number;
    node1Policy: RoutingPolicy | undefined;
    node2Policy: RoutingPolicy | undefined;
}
export interface HopHint {
    /** The public key of the node at the start of the channel. */
    nodeId: string;
    /** The unique identifier of the channel. */
    chanId: number;
    /** The base fee of the channel denominated in millisatoshis. */
    feeBaseMsat: number;
    /**
     * The fee rate of the channel for sending one satoshi across it denominated in
     * millionths of a satoshi.
     */
    feeProportionalMillionths: number;
    /** The time-lock delta of the channel. */
    cltvExpiryDelta: number;
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
     * The hex-encoded preimage (32 byte) which will allow settling an incoming
     * HTLC payable to this preimage. When using REST, this field must be encoded
     * as base64.
     */
    rPreimage: Uint8Array;
    /**
     * The hash of the preimage. When using REST, this field must be encoded as
     * base64.
     */
    rHash: Uint8Array;
    /**
     * The value of this invoice in satoshis
     *
     * The fields value and value_msat are mutually exclusive.
     */
    value: number;
    /**
     * The value of this invoice in millisatoshis
     *
     * The fields value and value_msat are mutually exclusive.
     */
    valueMsat: number;
    /** When this invoice was created */
    creationDate: number;
    /** When this invoice was settled */
    settleDate: number;
    /**
     * A bare-bones invoice for a payment within the Lightning Network. With the
     * details of the invoice, the sender has all the data necessary to send a
     * payment to the recipient.
     */
    paymentRequest: string;
    /**
     * Hash (SHA-256) of a description of the payment. Used if the description of
     * payment (memo) is too long to naturally fit within the description field
     * of an encoded payment request. When using REST, this field must be encoded
     * as base64.
     */
    descriptionHash: Uint8Array;
    /** Payment request expiry time in seconds. Default is 3600 (1 hour). */
    expiry: number;
    /** Fallback on-chain address. */
    fallbackAddr: string;
    /** Delta to use for the time-lock of the CLTV extended to the final hop. */
    cltvExpiry: number;
    /**
     * Route hints that can each be individually used to assist in reaching the
     * invoice's destination.
     */
    routeHints: RouteHint[];
    /** Whether this invoice should include routing hints for private channels. */
    private: boolean;
    /**
     * The "add" index of this invoice. Each newly created invoice will increment
     * this index making it monotonically increasing. Callers to the
     * SubscribeInvoices call can use this to instantly get notified of all added
     * invoices with an add_index greater than this one.
     */
    addIndex: number;
    /**
     * The "settle" index of this invoice. Each newly settled invoice will
     * increment this index making it monotonically increasing. Callers to the
     * SubscribeInvoices call can use this to instantly get notified of all
     * settled invoices with an settle_index greater than this one.
     */
    settleIndex: number;
    /**
     * The amount that was accepted for this invoice, in satoshis. This will ONLY
     * be set if this invoice has been settled. We provide this field as if the
     * invoice was created with a zero value, then we need to record what amount
     * was ultimately accepted. Additionally, it's possible that the sender paid
     * MORE that was specified in the original invoice. So we'll record that here
     * as well.
     */
    amtPaidSat: number;
    /**
     * The amount that was accepted for this invoice, in millisatoshis. This will
     * ONLY be set if this invoice has been settled. We provide this field as if
     * the invoice was created with a zero value, then we need to record what
     * amount was ultimately accepted. Additionally, it's possible that the sender
     * paid MORE that was specified in the original invoice. So we'll record that
     * here as well.
     */
    amtPaidMsat: number;
    /** The state the invoice is in. */
    state: Invoice_InvoiceState;
    /** List of HTLCs paying to this invoice [EXPERIMENTAL]. */
    htlcs: InvoiceHTLC[];
    /** List of features advertised on the invoice. */
    features: {
        [key: number]: Feature;
    };
    /**
     * Indicates if this invoice was a spontaneous payment that arrived via keysend
     * [EXPERIMENTAL].
     */
    isKeysend: boolean;
    /**
     * The payment address of this invoice. This value will be used in MPP
     * payments, and also for newer invoies that always require the MPP paylaod
     * for added end-to-end security.
     */
    paymentAddr: Uint8Array;
    /** Signals whether or not this is an AMP invoice. */
    isAmp: boolean;
}
export enum Invoice_InvoiceState {
    OPEN = 0,
    SETTLED = 1,
    CANCELED = 2,
    ACCEPTED = 3,
    UNRECOGNIZED = -1
}
/** Details of an HTLC that paid to an invoice */
export interface InvoiceHTLC {
    /** Short channel id over which the htlc was received. */
    chanId: number;
    /** Index identifying the htlc on the channel. */
    htlcIndex: number;
    /** The amount of the htlc in msat. */
    amtMsat: number;
    /** Block height at which this htlc was accepted. */
    acceptHeight: number;
    /** Time at which this htlc was accepted. */
    acceptTime: number;
    /** Time at which this htlc was settled or canceled. */
    resolveTime: number;
    /** Block height at which this htlc expires. */
    expiryHeight: number;
    /** Current state the htlc is in. */
    state: InvoiceHTLCState;
    /** Custom tlv records. */
    customRecords: {
        [key: number]: Uint8Array;
    };
    /** The total amount of the mpp payment in msat. */
    mppTotalAmtMsat: number;
    /** Details relevant to AMP HTLCs, only populated if this is an AMP HTLC. */
    amp: AMP | undefined;
}
/** Details specific to AMP HTLCs. */
export interface AMP {
    /**
     * An n-of-n secret share of the root seed from which child payment hashes
     * and preimages are derived.
     */
    rootShare: Uint8Array;
    /** An identifier for the HTLC set that this HTLC belongs to. */
    setId: Uint8Array;
    /**
     * A nonce used to randomize the child preimage and child hash from a given
     * root_share.
     */
    childIndex: number;
    /** The payment hash of the AMP HTLC. */
    hash: Uint8Array;
    /**
     * The preimage used to settle this AMP htlc. This field will only be
     * populated if the invoice is in InvoiceState_ACCEPTED or
     * InvoiceState_SETTLED.
     */
    preimage: Uint8Array;
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
    lastIndexOffset: number;
    /**
     * The index of the last item in the set of returned invoices. This can be used
     * to seek backwards, pagination style.
     */
    firstIndexOffset: number;
}
export interface Payment {
    /** The payment hash */
    paymentHash: string;
    /** The payment preimage */
    paymentPreimage: string;
    /** The value of the payment in satoshis */
    valueSat: number;
    /** The value of the payment in milli-satoshis */
    valueMsat: number;
    /** The optional payment request being fulfilled. */
    paymentRequest: string;
    /** The status of the payment. */
    status: Payment_PaymentStatus;
    /** The fee paid for this payment in satoshis */
    feeSat: number;
    /** The fee paid for this payment in milli-satoshis */
    feeMsat: number;
    /** The time in UNIX nanoseconds at which the payment was created. */
    creationTimeNs: number;
    /** The HTLCs made in attempt to settle the payment. */
    htlcs: HTLCAttempt[];
    /**
     * The creation index of this payment. Each payment can be uniquely identified
     * by this index, which may not strictly increment by 1 for payments made in
     * older versions of lnd.
     */
    paymentIndex: number;
    failureReason: PaymentFailureReason;
}
export enum Payment_PaymentStatus {
    UNKNOWN = 0,
    IN_FLIGHT = 1,
    SUCCEEDED = 2,
    FAILED = 3,
    UNRECOGNIZED = -1
}
export interface HTLCAttempt {
    /** The unique ID that is used for this attempt. */
    attemptId: number;
    /** The status of the HTLC. */
    status: HTLCAttempt_HTLCStatus;
    /** The route taken by this HTLC. */
    route: Route | undefined;
    /** The time in UNIX nanoseconds at which this HTLC was sent. */
    attemptTimeNs: number;
    /**
     * The time in UNIX nanoseconds at which this HTLC was settled or failed.
     * This value will not be set if the HTLC is still IN_FLIGHT.
     */
    resolveTimeNs: number;
    /** Detailed htlc failure info. */
    failure: Failure | undefined;
    /** The preimage that was used to settle the HTLC. */
    preimage: Uint8Array;
}
export enum HTLCAttempt_HTLCStatus {
    IN_FLIGHT = 0,
    SUCCEEDED = 1,
    FAILED = 2,
    UNRECOGNIZED = -1
}
export interface ListPaymentsResponse {
    /** The list of payments */
    payments: Payment[];
    /**
     * The index of the first item in the set of returned payments. This can be
     * used as the index_offset to continue seeking backwards in the next request.
     */
    firstIndexOffset: number;
    /**
     * The index of the last item in the set of returned payments. This can be used
     * as the index_offset to continue seeking forwards in the next request.
     */
    lastIndexOffset: number;
}

export interface PayReq {
    destination: string;
    paymentHash: string;
    numSatoshis: number;
    timestamp: number;
    expiry: number;
    description: string;
    descriptionHash: string;
    fallbackAddr: string;
    cltvExpiry: number;
    routeHints: RouteHint[];
    paymentAddr: Uint8Array;
    numMsat: number;
    features: {
        [key: number]: Feature;
    };
}
export interface Feature {
    name: string;
    isRequired: boolean;
    isKnown: boolean;
}
export interface ChannelFeeReport {
    /** The short channel id that this fee report belongs to. */
    chanId: number;
    /** The channel that this fee report belongs to. */
    channelPoint: string;
    /** The base fee charged regardless of the number of milli-satoshis sent. */
    baseFeeMsat: number;
    /**
     * The amount charged per milli-satoshis transferred expressed in
     * millionths of a satoshi.
     */
    feePerMil: number;
    /**
     * The effective fee rate in milli-satoshis. Computed by dividing the
     * fee_per_mil value by 1 million.
     */
    feeRate: number;
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
    dayFeeSum: number;
    /**
     * The total amount of fee revenue (in satoshis) the switch has collected
     * over the past 1 week.
     */
    weekFeeSum: number;
    /**
     * The total amount of fee revenue (in satoshis) the switch has collected
     * over the past 1 month.
     */
    monthFeeSum: number;
}
export interface ForwardingEvent {
    /** The incoming channel ID that carried the HTLC that created the circuit. */
    chanIdIn: number;
    /**
     * The outgoing channel ID that carried the preimage that completed the
     * circuit.
     */
    chanIdOut: number;
    /**
     * The total amount (in satoshis) of the incoming HTLC that created half
     * the circuit.
     */
    amtIn: number;
    /**
     * The total amount (in satoshis) of the outgoing HTLC that created the
     * second half of the circuit.
     */
    amtOut: number;
    /** The total fee (in satoshis) that this payment circuit carried. */
    fee: number;
    /** The total fee (in milli-satoshis) that this payment circuit carried. */
    feeMsat: number;
    /**
     * The total amount (in milli-satoshis) of the incoming HTLC that created
     * half the circuit.
     */
    amtInMsat: number;
    /**
     * The total amount (in milli-satoshis) of the outgoing HTLC that created
     * the second half of the circuit.
     */
    amtOutMsat: number;
    /**
     * The number of nanoseconds elapsed since January 1, 1970 UTC when this
     * circuit was completed.
     */
    timestampNs: number;
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
    lastOffsetIndex: number;
}

export interface Failure {
    /** Failure code as defined in the Lightning spec */
    code: Failure_FailureCode;
    /** An optional channel update message. */
    channelUpdate: ChannelUpdate | undefined;
    /** A failure type-dependent htlc value. */
    htlcMsat: number;
    /** The sha256 sum of the onion payload. */
    onionSha256: Uint8Array;
    /** A failure type-dependent cltv expiry value. */
    cltvExpiry: number;
    /** A failure type-dependent flags value. */
    flags: number;
    /**
     * The position in the path of the intermediate or final node that generated
     * the failure message. Position zero is the sender node.
     */
    failureSourceIndex: number;
    /** A failure type-dependent block height. */
    height: number;
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
    UNRECOGNIZED = -1
}

export interface ChannelUpdate {
    /**
     * The signature that validates the announced data and proves the ownership
     * of node id.
     */
    signature: Uint8Array;
    /**
     * The target chain that this channel was opened within. This value
     * should be the genesis hash of the target chain. Along with the short
     * channel ID, this uniquely identifies the channel globally in a
     * blockchain.
     */
    chainHash: Uint8Array;
    /** The unique description of the funding transaction. */
    chanId: number;
    /**
     * A timestamp that allows ordering in the case of multiple announcements.
     * We should ignore the message if timestamp is not greater than the
     * last-received.
     */
    timestamp: number;
    /**
     * The bitfield that describes whether optional fields are present in this
     * update. Currently, the least-significant bit must be set to 1 if the
     * optional field MaxHtlc is present.
     */
    messageFlags: number;
    /**
     * The bitfield that describes additional meta-data concerning how the
     * update is to be interpreted. Currently, the least-significant bit must be
     * set to 0 if the creating node corresponds to the first node in the
     * previously sent channel announcement and 1 otherwise. If the second bit
     * is set, then the channel is set to be disabled.
     */
    channelFlags: number;
    /**
     * The minimum number of blocks this node requires to be added to the expiry
     * of HTLCs. This is a security parameter determined by the node operator.
     * This value represents the required gap between the time locks of the
     * incoming and outgoing HTLC's set to this node.
     */
    timeLockDelta: number;
    /** The minimum HTLC value which will be accepted. */
    htlcMinimumMsat: number;
    /**
     * The base fee that must be used for incoming HTLC's to this particular
     * channel. This value will be tacked onto the required for a payment
     * independent of the size of the payment.
     */
    baseFee: number;
    /** The fee rate that will be charged per millionth of a satoshi. */
    feeRate: number;
    /** The maximum HTLC value which will be accepted. */
    htlcMaximumMsat: number;
    /**
     * The set of data that was appended to this message, some of which we may
     * not actually know how to iterate or parse. By holding onto this data, we
     * ensure that we're able to properly validate the set of signatures that
     * cover these new fields, and ensure we're able to make upgrades to the
     * network in a forwards compatible manner.
     */
    extraOpaqueData: Uint8Array;
}

export interface GenSeedResponse {
    /**
     * cipherSeedMnemonic is a 24-word mnemonic that encodes a prior aezeed
     * cipher seed obtained by the user. This field is optional, as if not
     * provided, then the daemon will generate a new cipher seed for the user.
     * Otherwise, then the daemon will attempt to recover the wallet state linked
     * to this cipher seed.
     */
    cipherSeedMnemonic: string[];
    /**
     * enciphered_seed are the raw aezeed cipher seed bytes. This is the raw
     * cipher text before run through our mnemonic encoding scheme.
     */
    encipheredSeed: Uint8Array;
  }
