// Original file: resources/rpc.proto

import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';

export interface ChannelOpenUpdate {
  'channelPoint'?: (_lnrpc_ChannelPoint | null);
}

export interface ChannelOpenUpdate__Output {
  'channelPoint'?: (_lnrpc_ChannelPoint__Output);
}
