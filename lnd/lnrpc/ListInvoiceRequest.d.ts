/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface ListInvoiceRequest {
    'pendingOnly'?: (boolean);
    'indexOffset'?: (number | string | Long);
    'numMaxInvoices'?: (number | string | Long);
    'reversed'?: (boolean);
}
export interface ListInvoiceRequest__Output {
    'pendingOnly': (boolean);
    'indexOffset': (string);
    'numMaxInvoices': (string);
    'reversed': (boolean);
}
