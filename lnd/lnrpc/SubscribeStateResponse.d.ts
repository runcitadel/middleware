import type { WalletState as _lnrpc_WalletState } from '../lnrpc/WalletState';
export interface SubscribeStateResponse {
    'state'?: (_lnrpc_WalletState | keyof typeof _lnrpc_WalletState);
}
export interface SubscribeStateResponse__Output {
    'state': (_lnrpc_WalletState);
}
