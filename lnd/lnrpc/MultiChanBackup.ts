// Original file: resources/rpc.proto

import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';

export interface MultiChanBackup {
  'chanPoints'?: (_lnrpc_ChannelPoint)[];
  'multiChanBackup'?: (Buffer | Uint8Array | string);
}

export interface MultiChanBackup__Output {
  'chanPoints': (_lnrpc_ChannelPoint__Output)[];
  'multiChanBackup': (Buffer);
}
