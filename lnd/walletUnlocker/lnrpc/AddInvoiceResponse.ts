// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface AddInvoiceResponse {
  'rHash'?: (Buffer | Uint8Array | string);
  'paymentRequest'?: (string);
  'addIndex'?: (number | string | Long);
  'paymentAddr'?: (Buffer | Uint8Array | string);
}

export interface AddInvoiceResponse__Output {
  'rHash'?: (Buffer);
  'paymentRequest'?: (string);
  'addIndex'?: (Long);
  'paymentAddr'?: (Buffer);
}
