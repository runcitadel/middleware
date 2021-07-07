// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ListPaymentsRequest {
  'includeIncomplete'?: (boolean);
  'indexOffset'?: (number | string | Long);
  'maxPayments'?: (number | string | Long);
  'reversed'?: (boolean);
}

export interface ListPaymentsRequest__Output {
  'includeIncomplete'?: (boolean);
  'indexOffset'?: (Long);
  'maxPayments'?: (Long);
  'reversed'?: (boolean);
}
