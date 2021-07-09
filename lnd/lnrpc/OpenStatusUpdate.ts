// Original file: resources/rpc.proto

import type { PendingUpdate as _lnrpc_PendingUpdate, PendingUpdate__Output as _lnrpc_PendingUpdate__Output } from '../lnrpc/PendingUpdate';
import type { ChannelOpenUpdate as _lnrpc_ChannelOpenUpdate, ChannelOpenUpdate__Output as _lnrpc_ChannelOpenUpdate__Output } from '../lnrpc/ChannelOpenUpdate';
import type { ReadyForPsbtFunding as _lnrpc_ReadyForPsbtFunding, ReadyForPsbtFunding__Output as _lnrpc_ReadyForPsbtFunding__Output } from '../lnrpc/ReadyForPsbtFunding';

export interface OpenStatusUpdate {
  'chanPending'?: (_lnrpc_PendingUpdate | null);
  'chanOpen'?: (_lnrpc_ChannelOpenUpdate | null);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'psbtFund'?: (_lnrpc_ReadyForPsbtFunding | null);
  'update'?: "chanPending"|"chanOpen"|"psbtFund";
}

export interface OpenStatusUpdate__Output {
  'chanPending'?: (_lnrpc_PendingUpdate__Output | null);
  'chanOpen'?: (_lnrpc_ChannelOpenUpdate__Output | null);
  'pendingChanId': (Buffer);
  'psbtFund'?: (_lnrpc_ReadyForPsbtFunding__Output | null);
}
