// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface EstimateFeeRequest {
  'AddrToAmount'?: ({[key: string]: number | string | Long});
  'targetConf'?: (number);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
}

export interface EstimateFeeRequest__Output {
  'AddrToAmount': ({[key: string]: Long});
  'targetConf': (number);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
}
