// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface Amount {
  'sat'?: (number | string | Long);
  'msat'?: (number | string | Long);
}

export interface Amount__Output {
  'sat'?: (Long);
  'msat'?: (Long);
}
