/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface ChannelFeeReport {
    'channelPoint'?: (string);
    'baseFeeMsat'?: (number | string | Long);
    'feePerMil'?: (number | string | Long);
    'feeRate'?: (number | string);
    'chanId'?: (number | string | Long);
}
export interface ChannelFeeReport__Output {
    'channelPoint': (string);
    'baseFeeMsat': (string);
    'feePerMil': (string);
    'feeRate': (number);
    'chanId': (string);
}
