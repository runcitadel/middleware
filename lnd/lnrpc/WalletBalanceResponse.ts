// Original file: resources/rpc.proto

import type { WalletAccountBalance as _lnrpc_WalletAccountBalance, WalletAccountBalance__Output as _lnrpc_WalletAccountBalance__Output } from '../lnrpc/WalletAccountBalance';
import type { Long } from '@grpc/proto-loader';

export interface WalletBalanceResponse {
  'totalBalance'?: (number | string | Long);
  'confirmedBalance'?: (number | string | Long);
  'unconfirmedBalance'?: (number | string | Long);
  'accountBalance'?: ({[key: string]: _lnrpc_WalletAccountBalance});
}

export interface WalletBalanceResponse__Output {
  'totalBalance': (string);
  'confirmedBalance': (string);
  'unconfirmedBalance': (string);
  'accountBalance': ({[key: string]: _lnrpc_WalletAccountBalance__Output});
}
