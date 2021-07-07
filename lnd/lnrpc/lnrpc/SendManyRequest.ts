// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface SendManyRequest {
  'AddrToAmount'?: ({[key: string]: number | string | Long});
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'satPerByte'?: (number | string | Long);
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
}

export interface SendManyRequest__Output {
  'AddrToAmount'?: ({[key: string]: Long});
  'targetConf'?: (number);
  'satPerVbyte'?: (Long);
  'satPerByte'?: (Long);
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
}
