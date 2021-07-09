/// <reference types="node" />
/// <reference types="long" />
import type { RouteHint as _lnrpc_RouteHint, RouteHint__Output as _lnrpc_RouteHint__Output } from '../lnrpc/RouteHint';
import type { InvoiceHTLC as _lnrpc_InvoiceHTLC, InvoiceHTLC__Output as _lnrpc_InvoiceHTLC__Output } from '../lnrpc/InvoiceHTLC';
import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';
import type { Long } from '@grpc/proto-loader';
export declare enum _lnrpc_Invoice_InvoiceState {
    OPEN = 0,
    SETTLED = 1,
    CANCELED = 2,
    ACCEPTED = 3
}
export interface Invoice {
    'memo'?: (string);
    'rPreimage'?: (Buffer | Uint8Array | string);
    'rHash'?: (Buffer | Uint8Array | string);
    'value'?: (number | string | Long);
    'settled'?: (boolean);
    'creationDate'?: (number | string | Long);
    'settleDate'?: (number | string | Long);
    'paymentRequest'?: (string);
    'descriptionHash'?: (Buffer | Uint8Array | string);
    'expiry'?: (number | string | Long);
    'fallbackAddr'?: (string);
    'cltvExpiry'?: (number | string | Long);
    'routeHints'?: (_lnrpc_RouteHint)[];
    'private'?: (boolean);
    'addIndex'?: (number | string | Long);
    'settleIndex'?: (number | string | Long);
    'amtPaid'?: (number | string | Long);
    'amtPaidSat'?: (number | string | Long);
    'amtPaidMsat'?: (number | string | Long);
    'state'?: (_lnrpc_Invoice_InvoiceState | keyof typeof _lnrpc_Invoice_InvoiceState);
    'htlcs'?: (_lnrpc_InvoiceHTLC)[];
    'valueMsat'?: (number | string | Long);
    'features'?: ({
        [key: number]: _lnrpc_Feature;
    });
    'isKeysend'?: (boolean);
    'paymentAddr'?: (Buffer | Uint8Array | string);
    'isAmp'?: (boolean);
}
export interface Invoice__Output {
    'memo': (string);
    'rPreimage': (Buffer);
    'rHash': (Buffer);
    'value': (Long);
    'settled': (boolean);
    'creationDate': (Long);
    'settleDate': (Long);
    'paymentRequest': (string);
    'descriptionHash': (Buffer);
    'expiry': (Long);
    'fallbackAddr': (string);
    'cltvExpiry': (Long);
    'routeHints': (_lnrpc_RouteHint__Output)[];
    'private': (boolean);
    'addIndex': (Long);
    'settleIndex': (Long);
    'amtPaid': (Long);
    'amtPaidSat': (Long);
    'amtPaidMsat': (Long);
    'state': (_lnrpc_Invoice_InvoiceState);
    'htlcs': (_lnrpc_InvoiceHTLC__Output)[];
    'valueMsat': (Long);
    'features': ({
        [key: number]: _lnrpc_Feature__Output;
    });
    'isKeysend': (boolean);
    'paymentAddr': (Buffer);
    'isAmp': (boolean);
}
