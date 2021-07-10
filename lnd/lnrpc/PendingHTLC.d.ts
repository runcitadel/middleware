/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface PendingHTLC {
    'incoming'?: (boolean);
    'amount'?: (number | string | Long);
    'outpoint'?: (string);
    'maturityHeight'?: (number);
    'blocksTilMaturity'?: (number);
    'stage'?: (number);
}
export interface PendingHTLC__Output {
    'incoming': (boolean);
    'amount': (string);
    'outpoint': (string);
    'maturityHeight': (number);
    'blocksTilMaturity': (number);
    'stage': (number);
}
