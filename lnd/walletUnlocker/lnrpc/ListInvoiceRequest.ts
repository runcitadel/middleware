// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ListInvoiceRequest {
  'pendingOnly'?: (boolean);
  'indexOffset'?: (number | string | Long);
  'numMaxInvoices'?: (number | string | Long);
  'reversed'?: (boolean);
}

export interface ListInvoiceRequest__Output {
  'pendingOnly'?: (boolean);
  'indexOffset'?: (Long);
  'numMaxInvoices'?: (Long);
  'reversed'?: (boolean);
}
