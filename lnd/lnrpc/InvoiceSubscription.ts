// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface InvoiceSubscription {
  'addIndex'?: (number | string | Long);
  'settleIndex'?: (number | string | Long);
}

export interface InvoiceSubscription__Output {
  'addIndex': (Long);
  'settleIndex': (Long);
}
