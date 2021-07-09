// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ForwardingHistoryRequest {
  'startTime'?: (number | string | Long);
  'endTime'?: (number | string | Long);
  'indexOffset'?: (number);
  'numMaxEvents'?: (number);
}

export interface ForwardingHistoryRequest__Output {
  'startTime': (Long);
  'endTime': (Long);
  'indexOffset': (number);
  'numMaxEvents': (number);
}
