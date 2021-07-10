/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface ChanInfoRequest {
    'chanId'?: (number | string | Long);
}
export interface ChanInfoRequest__Output {
    'chanId': (string);
}
