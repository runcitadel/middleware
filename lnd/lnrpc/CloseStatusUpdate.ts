// Original file: resources/rpc.proto

import type { PendingUpdate as _lnrpc_PendingUpdate, PendingUpdate__Output as _lnrpc_PendingUpdate__Output } from '../lnrpc/PendingUpdate';
import type { ChannelCloseUpdate as _lnrpc_ChannelCloseUpdate, ChannelCloseUpdate__Output as _lnrpc_ChannelCloseUpdate__Output } from '../lnrpc/ChannelCloseUpdate';

export interface CloseStatusUpdate {
  'closePending'?: (_lnrpc_PendingUpdate | null);
  'chanClose'?: (_lnrpc_ChannelCloseUpdate | null);
  'update'?: "closePending"|"chanClose";
}

export interface CloseStatusUpdate__Output {
  'closePending'?: (_lnrpc_PendingUpdate__Output | null);
  'chanClose'?: (_lnrpc_ChannelCloseUpdate__Output | null);
}
