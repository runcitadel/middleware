/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface EstimateFeeResponse {
    'feeSat'?: (number | string | Long);
    'feerateSatPerByte'?: (number | string | Long);
    'satPerVbyte'?: (number | string | Long);
}
export interface EstimateFeeResponse__Output {
    'feeSat': (Long);
    'feerateSatPerByte': (Long);
    'satPerVbyte': (Long);
}
