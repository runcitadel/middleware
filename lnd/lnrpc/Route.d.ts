/// <reference types="long" />
import type { Hop as _lnrpc_Hop, Hop__Output as _lnrpc_Hop__Output } from '../lnrpc/Hop';
import type { Long } from '@grpc/proto-loader';
export interface Route {
    'totalTimeLock'?: (number);
    'totalFees'?: (number | string | Long);
    'totalAmt'?: (number | string | Long);
    'hops'?: (_lnrpc_Hop)[];
    'totalFeesMsat'?: (number | string | Long);
    'totalAmtMsat'?: (number | string | Long);
}
export interface Route__Output {
    'totalTimeLock': (number);
    'totalFees': (string);
    'totalAmt': (string);
    'hops': (_lnrpc_Hop__Output)[];
    'totalFeesMsat': (string);
    'totalAmtMsat': (string);
}
