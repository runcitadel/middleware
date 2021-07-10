/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface FeeLimit {
    'fixed'?: (number | string | Long);
    'percent'?: (number | string | Long);
    'fixedMsat'?: (number | string | Long);
    'limit'?: "fixed" | "fixedMsat" | "percent";
}
export interface FeeLimit__Output {
    'fixed'?: (string);
    'percent'?: (string);
    'fixedMsat'?: (string);
}
