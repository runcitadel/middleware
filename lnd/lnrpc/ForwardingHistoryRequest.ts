// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ForwardingHistoryRequest {
  'startTime'?: (number | string | Long);
  'endTime'?: (number | string | Long);
  'indexOffset'?: (number);
  'numMaxEvents'?: (number);
}

export interface ForwardingHistoryRequest__Output {
  'startTime': (string);
  'endTime': (string);
  'indexOffset': (number);
  'numMaxEvents': (number);
}
