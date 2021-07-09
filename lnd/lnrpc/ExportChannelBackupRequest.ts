// Original file: resources/rpc.proto

import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';

export interface ExportChannelBackupRequest {
  'chanPoint'?: (_lnrpc_ChannelPoint | null);
}

export interface ExportChannelBackupRequest__Output {
  'chanPoint': (_lnrpc_ChannelPoint__Output | null);
}
