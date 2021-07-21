import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
export interface AbandonChannelRequest {
    'channelPoint'?: (_lnrpc_ChannelPoint | null);
    'pendingFundingShimOnly'?: (boolean);
    'iKnowWhatIAmDoing'?: (boolean);
}
export interface AbandonChannelRequest__Output {
    'channelPoint': (_lnrpc_ChannelPoint__Output | null);
    'pendingFundingShimOnly': (boolean);
    'iKnowWhatIAmDoing': (boolean);
}
