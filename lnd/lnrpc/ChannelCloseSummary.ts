// Original file: resources/rpc.proto

import type { Initiator as _lnrpc_Initiator } from '../lnrpc/Initiator';
import type { Resolution as _lnrpc_Resolution, Resolution__Output as _lnrpc_Resolution__Output } from '../lnrpc/Resolution';
import type { Long } from '@grpc/proto-loader';

// Original file: resources/rpc.proto

export enum _lnrpc_ChannelCloseSummary_ClosureType {
  COOPERATIVE_CLOSE = 0,
  LOCAL_FORCE_CLOSE = 1,
  REMOTE_FORCE_CLOSE = 2,
  BREACH_CLOSE = 3,
  FUNDING_CANCELED = 4,
  ABANDONED = 5,
}

export interface ChannelCloseSummary {
  'channelPoint'?: (string);
  'chanId'?: (number | string | Long);
  'chainHash'?: (string);
  'closingTxHash'?: (string);
  'remotePubkey'?: (string);
  'capacity'?: (number | string | Long);
  'closeHeight'?: (number);
  'settledBalance'?: (number | string | Long);
  'timeLockedBalance'?: (number | string | Long);
  'closeType'?: (_lnrpc_ChannelCloseSummary_ClosureType | keyof typeof _lnrpc_ChannelCloseSummary_ClosureType);
  'openInitiator'?: (_lnrpc_Initiator | keyof typeof _lnrpc_Initiator);
  'closeInitiator'?: (_lnrpc_Initiator | keyof typeof _lnrpc_Initiator);
  'resolutions'?: (_lnrpc_Resolution)[];
}

export interface ChannelCloseSummary__Output {
  'channelPoint': (string);
  'chanId': (string);
  'chainHash': (string);
  'closingTxHash': (string);
  'remotePubkey': (string);
  'capacity': (string);
  'closeHeight': (number);
  'settledBalance': (string);
  'timeLockedBalance': (string);
  'closeType': (_lnrpc_ChannelCloseSummary_ClosureType);
  'openInitiator': (_lnrpc_Initiator);
  'closeInitiator': (_lnrpc_Initiator);
  'resolutions': (_lnrpc_Resolution__Output)[];
}
