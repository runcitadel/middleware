// Original file: resources/walletunlocker.proto

import type { ChanBackupSnapshot as _lnrpc_ChanBackupSnapshot, ChanBackupSnapshot__Output as _lnrpc_ChanBackupSnapshot__Output } from '../lnrpc/ChanBackupSnapshot';

export interface UnlockWalletRequest {
  'walletPassword'?: (Buffer | Uint8Array | string);
  'recoveryWindow'?: (number);
  'channelBackups'?: (_lnrpc_ChanBackupSnapshot | null);
  'statelessInit'?: (boolean);
}

export interface UnlockWalletRequest__Output {
  'walletPassword'?: (Buffer);
  'recoveryWindow'?: (number);
  'channelBackups'?: (_lnrpc_ChanBackupSnapshot__Output);
  'statelessInit'?: (boolean);
}
