/// <reference types="node" />
import type { ChannelBackups as _lnrpc_ChannelBackups, ChannelBackups__Output as _lnrpc_ChannelBackups__Output } from '../lnrpc/ChannelBackups';
export interface RestoreChanBackupRequest {
    'chanBackups'?: (_lnrpc_ChannelBackups | null);
    'multiChanBackup'?: (Buffer | Uint8Array | string);
    'backup'?: "chanBackups" | "multiChanBackup";
}
export interface RestoreChanBackupRequest__Output {
    'chanBackups'?: (_lnrpc_ChannelBackups__Output | null);
    'multiChanBackup'?: (Buffer);
}
