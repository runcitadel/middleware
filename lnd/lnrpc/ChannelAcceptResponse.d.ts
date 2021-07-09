/// <reference types="node" />
/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface ChannelAcceptResponse {
    'accept'?: (boolean);
    'pendingChanId'?: (Buffer | Uint8Array | string);
    'error'?: (string);
    'upfrontShutdown'?: (string);
    'csvDelay'?: (number);
    'reserveSat'?: (number | string | Long);
    'inFlightMaxMsat'?: (number | string | Long);
    'maxHtlcCount'?: (number);
    'minHtlcIn'?: (number | string | Long);
    'minAcceptDepth'?: (number);
}
export interface ChannelAcceptResponse__Output {
    'accept': (boolean);
    'pendingChanId': (Buffer);
    'error': (string);
    'upfrontShutdown': (string);
    'csvDelay': (number);
    'reserveSat': (Long);
    'inFlightMaxMsat': (Long);
    'maxHtlcCount': (number);
    'minHtlcIn': (Long);
    'minAcceptDepth': (number);
}
