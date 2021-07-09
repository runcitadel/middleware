import type { Channel as _lnrpc_Channel, Channel__Output as _lnrpc_Channel__Output } from '../lnrpc/Channel';
import type { ChannelCloseSummary as _lnrpc_ChannelCloseSummary, ChannelCloseSummary__Output as _lnrpc_ChannelCloseSummary__Output } from '../lnrpc/ChannelCloseSummary';
import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { PendingUpdate as _lnrpc_PendingUpdate, PendingUpdate__Output as _lnrpc_PendingUpdate__Output } from '../lnrpc/PendingUpdate';
export declare enum _lnrpc_ChannelEventUpdate_UpdateType {
    OPEN_CHANNEL = 0,
    CLOSED_CHANNEL = 1,
    ACTIVE_CHANNEL = 2,
    INACTIVE_CHANNEL = 3,
    PENDING_OPEN_CHANNEL = 4
}
export interface ChannelEventUpdate {
    'openChannel'?: (_lnrpc_Channel | null);
    'closedChannel'?: (_lnrpc_ChannelCloseSummary | null);
    'activeChannel'?: (_lnrpc_ChannelPoint | null);
    'inactiveChannel'?: (_lnrpc_ChannelPoint | null);
    'type'?: (_lnrpc_ChannelEventUpdate_UpdateType | keyof typeof _lnrpc_ChannelEventUpdate_UpdateType);
    'pendingOpenChannel'?: (_lnrpc_PendingUpdate | null);
    'channel'?: "openChannel" | "closedChannel" | "activeChannel" | "inactiveChannel" | "pendingOpenChannel";
}
export interface ChannelEventUpdate__Output {
    'openChannel'?: (_lnrpc_Channel__Output | null);
    'closedChannel'?: (_lnrpc_ChannelCloseSummary__Output | null);
    'activeChannel'?: (_lnrpc_ChannelPoint__Output | null);
    'inactiveChannel'?: (_lnrpc_ChannelPoint__Output | null);
    'type': (_lnrpc_ChannelEventUpdate_UpdateType);
    'pendingOpenChannel'?: (_lnrpc_PendingUpdate__Output | null);
}
