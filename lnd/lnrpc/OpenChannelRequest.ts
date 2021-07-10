// Original file: resources/rpc.proto

import type { FundingShim as _lnrpc_FundingShim, FundingShim__Output as _lnrpc_FundingShim__Output } from '../lnrpc/FundingShim';
import type { Long } from '@grpc/proto-loader';

export interface OpenChannelRequest {
  'satPerVbyte'?: (number | string | Long);
  'nodePubkey'?: (Buffer | Uint8Array | string);
  'nodePubkeyString'?: (string);
  'localFundingAmount'?: (number | string | Long);
  'pushSat'?: (number | string | Long);
  'targetConf'?: (number);
  'satPerByte'?: (number | string | Long);
  'private'?: (boolean);
  'minHtlcMsat'?: (number | string | Long);
  'remoteCsvDelay'?: (number);
  'minConfs'?: (number);
  'spendUnconfirmed'?: (boolean);
  'closeAddress'?: (string);
  'fundingShim'?: (_lnrpc_FundingShim | null);
  'remoteMaxValueInFlightMsat'?: (number | string | Long);
  'remoteMaxHtlcs'?: (number);
  'maxLocalCsv'?: (number);
}

export interface OpenChannelRequest__Output {
  'satPerVbyte': (string);
  'nodePubkey': (Buffer);
  'nodePubkeyString': (string);
  'localFundingAmount': (string);
  'pushSat': (string);
  'targetConf': (number);
  'satPerByte': (string);
  'private': (boolean);
  'minHtlcMsat': (string);
  'remoteCsvDelay': (number);
  'minConfs': (number);
  'spendUnconfirmed': (boolean);
  'closeAddress': (string);
  'fundingShim': (_lnrpc_FundingShim__Output | null);
  'remoteMaxValueInFlightMsat': (string);
  'remoteMaxHtlcs': (number);
  'maxLocalCsv': (number);
}
