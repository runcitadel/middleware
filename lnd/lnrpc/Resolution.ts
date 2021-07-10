// Original file: resources/rpc.proto

import type { ResolutionType as _lnrpc_ResolutionType } from '../lnrpc/ResolutionType';
import type { ResolutionOutcome as _lnrpc_ResolutionOutcome } from '../lnrpc/ResolutionOutcome';
import type { OutPoint as _lnrpc_OutPoint, OutPoint__Output as _lnrpc_OutPoint__Output } from '../lnrpc/OutPoint';
import type { Long } from '@grpc/proto-loader';

export interface Resolution {
  'resolutionType'?: (_lnrpc_ResolutionType | keyof typeof _lnrpc_ResolutionType);
  'outcome'?: (_lnrpc_ResolutionOutcome | keyof typeof _lnrpc_ResolutionOutcome);
  'outpoint'?: (_lnrpc_OutPoint | null);
  'amountSat'?: (number | string | Long);
  'sweepTxid'?: (string);
}

export interface Resolution__Output {
  'resolutionType': (_lnrpc_ResolutionType);
  'outcome': (_lnrpc_ResolutionOutcome);
  'outpoint': (_lnrpc_OutPoint__Output | null);
  'amountSat': (string);
  'sweepTxid': (string);
}
