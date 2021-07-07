// Original file: resources/rpc.proto

import type { Route as _lnrpc_Route, Route__Output as _lnrpc_Route__Output } from '../lnrpc/Route';

export interface SendToRouteRequest {
  'paymentHash'?: (Buffer | Uint8Array | string);
  'paymentHashString'?: (string);
  'route'?: (_lnrpc_Route | null);
}

export interface SendToRouteRequest__Output {
  'paymentHash'?: (Buffer);
  'paymentHashString'?: (string);
  'route'?: (_lnrpc_Route__Output);
}
