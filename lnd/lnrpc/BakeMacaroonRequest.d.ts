/// <reference types="long" />
import type { MacaroonPermission as _lnrpc_MacaroonPermission, MacaroonPermission__Output as _lnrpc_MacaroonPermission__Output } from '../lnrpc/MacaroonPermission';
import type { Long } from '@grpc/proto-loader';
export interface BakeMacaroonRequest {
    'permissions'?: (_lnrpc_MacaroonPermission)[];
    'rootKeyId'?: (number | string | Long);
}
export interface BakeMacaroonRequest__Output {
    'permissions': (_lnrpc_MacaroonPermission__Output)[];
    'rootKeyId': (Long);
}
