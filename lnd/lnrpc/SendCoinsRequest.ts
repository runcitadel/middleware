// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface SendCoinsRequest {
  'addr'?: (string);
  'amount'?: (number | string | Long);
  'targetConf'?: (number);
  'satPerVbyte'?: (number | string | Long);
  'satPerByte'?: (number | string | Long);
  'sendAll'?: (boolean);
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
}

export interface SendCoinsRequest__Output {
  'addr'?: (string);
  'amount'?: (Long);
  'targetConf'?: (number);
  'satPerVbyte'?: (Long);
  'satPerByte'?: (Long);
  'sendAll'?: (boolean);
  'label'?: (string);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
}
