/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface Transaction {
    'txHash'?: (string);
    'amount'?: (number | string | Long);
    'numConfirmations'?: (number);
    'blockHash'?: (string);
    'blockHeight'?: (number);
    'timeStamp'?: (number | string | Long);
    'totalFees'?: (number | string | Long);
    'destAddresses'?: (string)[];
    'rawTxHex'?: (string);
    'label'?: (string);
}
export interface Transaction__Output {
    'txHash': (string);
    'amount': (Long);
    'numConfirmations': (number);
    'blockHash': (string);
    'blockHeight': (number);
    'timeStamp': (Long);
    'totalFees': (Long);
    'destAddresses': (string)[];
    'rawTxHex': (string);
    'label': (string);
}
