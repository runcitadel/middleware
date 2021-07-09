/// <reference types="node" />
import type { ChanBackupSnapshot as _lnrpc_ChanBackupSnapshot, ChanBackupSnapshot__Output as _lnrpc_ChanBackupSnapshot__Output } from '../lnrpc/ChanBackupSnapshot';
export interface InitWalletRequest {
    'walletPassword'?: (Buffer | Uint8Array | string);
    'cipherSeedMnemonic'?: (string)[];
    'aezeedPassphrase'?: (Buffer | Uint8Array | string);
    'recoveryWindow'?: (number);
    'channelBackups'?: (_lnrpc_ChanBackupSnapshot | null);
    'statelessInit'?: (boolean);
}
export interface InitWalletRequest__Output {
    'walletPassword': (Buffer);
    'cipherSeedMnemonic': (string)[];
    'aezeedPassphrase': (Buffer);
    'recoveryWindow': (number);
    'channelBackups': (_lnrpc_ChanBackupSnapshot__Output | null);
    'statelessInit': (boolean);
}
