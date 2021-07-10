/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface SendManyRequest {
    'AddrToAmount'?: ({
        [key: string]: number | string | Long;
    });
    'targetConf'?: (number);
    'satPerVbyte'?: (number | string | Long);
    'satPerByte'?: (number | string | Long);
    'label'?: (string);
    'minConfs'?: (number);
    'spendUnconfirmed'?: (boolean);
}
export interface SendManyRequest__Output {
    'AddrToAmount': ({
        [key: string]: string;
    });
    'targetConf': (number);
    'satPerVbyte': (string);
    'satPerByte': (string);
    'label': (string);
    'minConfs': (number);
    'spendUnconfirmed': (boolean);
}
