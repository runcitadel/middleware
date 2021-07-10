/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface ChannelConstraints {
    'csvDelay'?: (number);
    'chanReserveSat'?: (number | string | Long);
    'dustLimitSat'?: (number | string | Long);
    'maxPendingAmtMsat'?: (number | string | Long);
    'minHtlcMsat'?: (number | string | Long);
    'maxAcceptedHtlcs'?: (number);
}
export interface ChannelConstraints__Output {
    'csvDelay': (number);
    'chanReserveSat': (string);
    'dustLimitSat': (string);
    'maxPendingAmtMsat': (string);
    'minHtlcMsat': (string);
    'maxAcceptedHtlcs': (number);
}
