// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ListMacaroonIDsResponse {
  'rootKeyIds'?: (number | string | Long)[];
}

export interface ListMacaroonIDsResponse__Output {
  'rootKeyIds': (Long)[];
}
