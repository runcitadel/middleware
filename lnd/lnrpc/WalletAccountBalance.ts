// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface WalletAccountBalance {
  'confirmedBalance'?: (number | string | Long);
  'unconfirmedBalance'?: (number | string | Long);
}

export interface WalletAccountBalance__Output {
  'confirmedBalance': (string);
  'unconfirmedBalance': (string);
}
