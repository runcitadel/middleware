/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface RoutingPolicy {
    'timeLockDelta'?: (number);
    'minHtlc'?: (number | string | Long);
    'feeBaseMsat'?: (number | string | Long);
    'feeRateMilliMsat'?: (number | string | Long);
    'disabled'?: (boolean);
    'maxHtlcMsat'?: (number | string | Long);
    'lastUpdate'?: (number);
}
export interface RoutingPolicy__Output {
    'timeLockDelta': (number);
    'minHtlc': (string);
    'feeBaseMsat': (string);
    'feeRateMilliMsat': (string);
    'disabled': (boolean);
    'maxHtlcMsat': (string);
    'lastUpdate': (number);
}