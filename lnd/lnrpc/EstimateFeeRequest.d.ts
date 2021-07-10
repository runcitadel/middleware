/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface EstimateFeeRequest {
    'AddrToAmount'?: ({
        [key: string]: number | string | Long;
    });
    'targetConf'?: (number);
    'minConfs'?: (number);
    'spendUnconfirmed'?: (boolean);
}
export interface EstimateFeeRequest__Output {
    'AddrToAmount': ({
        [key: string]: string;
    });
    'targetConf': (number);
    'minConfs': (number);
    'spendUnconfirmed': (boolean);
}
