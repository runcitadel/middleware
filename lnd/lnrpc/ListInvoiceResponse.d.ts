/// <reference types="long" />
import type { Invoice as _lnrpc_Invoice, Invoice__Output as _lnrpc_Invoice__Output } from '../lnrpc/Invoice';
import type { Long } from '@grpc/proto-loader';
export interface ListInvoiceResponse {
    'invoices'?: (_lnrpc_Invoice)[];
    'lastIndexOffset'?: (number | string | Long);
    'firstIndexOffset'?: (number | string | Long);
}
export interface ListInvoiceResponse__Output {
    'invoices': (_lnrpc_Invoice__Output)[];
    'lastIndexOffset': (Long);
    'firstIndexOffset': (Long);
}
