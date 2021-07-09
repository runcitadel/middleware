import type { WalletState as _lnrpc_WalletState } from '../lnrpc/WalletState';
export interface GetStateResponse {
    'state'?: (_lnrpc_WalletState | keyof typeof _lnrpc_WalletState);
}
export interface GetStateResponse__Output {
    'state': (_lnrpc_WalletState);
}
