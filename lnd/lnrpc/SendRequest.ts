// Original file: resources/rpc.proto

import type { FeeLimit as _lnrpc_FeeLimit, FeeLimit__Output as _lnrpc_FeeLimit__Output } from '../lnrpc/FeeLimit';
import type { FeatureBit as _lnrpc_FeatureBit } from '../lnrpc/FeatureBit';
import type { Long } from '@grpc/proto-loader';

export interface SendRequest {
  'dest'?: (Buffer | Uint8Array | string);
  'destString'?: (string);
  'amt'?: (number | string | Long);
  'paymentHash'?: (Buffer | Uint8Array | string);
  'paymentHashString'?: (string);
  'paymentRequest'?: (string);
  'finalCltvDelta'?: (number);
  'feeLimit'?: (_lnrpc_FeeLimit | null);
  'outgoingChanId'?: (number | string | Long);
  'cltvLimit'?: (number);
  'destCustomRecords'?: ({[key: number]: Buffer | Uint8Array | string});
  'amtMsat'?: (number | string | Long);
  'lastHopPubkey'?: (Buffer | Uint8Array | string);
  'allowSelfPayment'?: (boolean);
  'destFeatures'?: (_lnrpc_FeatureBit | keyof typeof _lnrpc_FeatureBit)[];
  'paymentAddr'?: (Buffer | Uint8Array | string);
}

export interface SendRequest__Output {
  'dest': (Buffer);
  'destString': (string);
  'amt': (Long);
  'paymentHash': (Buffer);
  'paymentHashString': (string);
  'paymentRequest': (string);
  'finalCltvDelta': (number);
  'feeLimit': (_lnrpc_FeeLimit__Output | null);
  'outgoingChanId': (Long);
  'cltvLimit': (number);
  'destCustomRecords': ({[key: number]: Buffer});
  'amtMsat': (Long);
  'lastHopPubkey': (Buffer);
  'allowSelfPayment': (boolean);
  'destFeatures': (_lnrpc_FeatureBit)[];
  'paymentAddr': (Buffer);
}
