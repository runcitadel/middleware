import type { ChannelBackups as _lnrpc_ChannelBackups, ChannelBackups__Output as _lnrpc_ChannelBackups__Output } from '../lnrpc/ChannelBackups';
import type { MultiChanBackup as _lnrpc_MultiChanBackup, MultiChanBackup__Output as _lnrpc_MultiChanBackup__Output } from '../lnrpc/MultiChanBackup';
export interface ChanBackupSnapshot {
    'singleChanBackups'?: (_lnrpc_ChannelBackups | null);
    'multiChanBackup'?: (_lnrpc_MultiChanBackup | null);
}
export interface ChanBackupSnapshot__Output {
    'singleChanBackups': (_lnrpc_ChannelBackups__Output | null);
    'multiChanBackup': (_lnrpc_MultiChanBackup__Output | null);
}
