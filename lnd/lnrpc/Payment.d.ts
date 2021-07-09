/// <reference types="long" />
import type { HTLCAttempt as _lnrpc_HTLCAttempt, HTLCAttempt__Output as _lnrpc_HTLCAttempt__Output } from '../lnrpc/HTLCAttempt';
import type { PaymentFailureReason as _lnrpc_PaymentFailureReason } from '../lnrpc/PaymentFailureReason';
import type { Long } from '@grpc/proto-loader';
export declare enum _lnrpc_Payment_PaymentStatus {
    UNKNOWN = 0,
    IN_FLIGHT = 1,
    SUCCEEDED = 2,
    FAILED = 3
}
export interface Payment {
    'paymentHash'?: (string);
    'value'?: (number | string | Long);
    'creationDate'?: (number | string | Long);
    'fee'?: (number | string | Long);
    'paymentPreimage'?: (string);
    'valueSat'?: (number | string | Long);
    'valueMsat'?: (number | string | Long);
    'paymentRequest'?: (string);
    'status'?: (_lnrpc_Payment_PaymentStatus | keyof typeof _lnrpc_Payment_PaymentStatus);
    'feeSat'?: (number | string | Long);
    'feeMsat'?: (number | string | Long);
    'creationTimeNs'?: (number | string | Long);
    'htlcs'?: (_lnrpc_HTLCAttempt)[];
    'paymentIndex'?: (number | string | Long);
    'failureReason'?: (_lnrpc_PaymentFailureReason | keyof typeof _lnrpc_PaymentFailureReason);
}
export interface Payment__Output {
    'paymentHash': (string);
    'value': (Long);
    'creationDate': (Long);
    'fee': (Long);
    'paymentPreimage': (string);
    'valueSat': (Long);
    'valueMsat': (Long);
    'paymentRequest': (string);
    'status': (_lnrpc_Payment_PaymentStatus);
    'feeSat': (Long);
    'feeMsat': (Long);
    'creationTimeNs': (Long);
    'htlcs': (_lnrpc_HTLCAttempt__Output)[];
    'paymentIndex': (Long);
    'failureReason': (_lnrpc_PaymentFailureReason);
}
