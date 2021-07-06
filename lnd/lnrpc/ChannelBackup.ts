// Original file: resources/rpc.proto

import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';

export interface ChannelBackup {
  'chanPoint'?: (_lnrpc_ChannelPoint | null);
  'chanBackup'?: (Buffer | Uint8Array | string);
}

export interface ChannelBackup__Output {
  'chanPoint'?: (_lnrpc_ChannelPoint__Output);
  'chanBackup'?: (Buffer);
}
