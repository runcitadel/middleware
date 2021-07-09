/// <reference types="node" />
import type { Route as _lnrpc_Route, Route__Output as _lnrpc_Route__Output } from '../lnrpc/Route';
export interface SendResponse {
    'paymentError'?: (string);
    'paymentPreimage'?: (Buffer | Uint8Array | string);
    'paymentRoute'?: (_lnrpc_Route | null);
    'paymentHash'?: (Buffer | Uint8Array | string);
}
export interface SendResponse__Output {
    'paymentError': (string);
    'paymentPreimage': (Buffer);
    'paymentRoute': (_lnrpc_Route__Output | null);
    'paymentHash': (Buffer);
}
