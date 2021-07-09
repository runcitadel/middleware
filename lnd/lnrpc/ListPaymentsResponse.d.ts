/// <reference types="long" />
import type { Payment as _lnrpc_Payment, Payment__Output as _lnrpc_Payment__Output } from '../lnrpc/Payment';
import type { Long } from '@grpc/proto-loader';
export interface ListPaymentsResponse {
    'payments'?: (_lnrpc_Payment)[];
    'firstIndexOffset'?: (number | string | Long);
    'lastIndexOffset'?: (number | string | Long);
}
export interface ListPaymentsResponse__Output {
    'payments': (_lnrpc_Payment__Output)[];
    'firstIndexOffset': (Long);
    'lastIndexOffset': (Long);
}
