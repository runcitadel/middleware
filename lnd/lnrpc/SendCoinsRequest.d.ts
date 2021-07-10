/// <reference types="long" />
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
    'addr': (string);
    'amount': (string);
    'targetConf': (number);
    'satPerVbyte': (string);
    'satPerByte': (string);
    'sendAll': (boolean);
    'label': (string);
    'minConfs': (number);
    'spendUnconfirmed': (boolean);
}
