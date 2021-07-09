// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface DeleteMacaroonIDRequest {
  'rootKeyId'?: (number | string | Long);
}

export interface DeleteMacaroonIDRequest__Output {
  'rootKeyId': (Long);
}
