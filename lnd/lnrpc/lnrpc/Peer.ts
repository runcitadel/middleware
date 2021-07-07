// Original file: resources/rpc.proto

import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';
import type { TimestampedError as _lnrpc_TimestampedError, TimestampedError__Output as _lnrpc_TimestampedError__Output } from '../lnrpc/TimestampedError';
import type { Long } from '@grpc/proto-loader';

// Original file: resources/rpc.proto

export enum _lnrpc_Peer_SyncType {
  UNKNOWN_SYNC = 0,
  ACTIVE_SYNC = 1,
  PASSIVE_SYNC = 2,
  PINNED_SYNC = 3,
}

export interface Peer {
  'pubKey'?: (string);
  'address'?: (string);
  'bytesSent'?: (number | string | Long);
  'bytesRecv'?: (number | string | Long);
  'satSent'?: (number | string | Long);
  'satRecv'?: (number | string | Long);
  'inbound'?: (boolean);
  'pingTime'?: (number | string | Long);
  'syncType'?: (_lnrpc_Peer_SyncType | keyof typeof _lnrpc_Peer_SyncType);
  'features'?: ({[key: number]: _lnrpc_Feature});
  'errors'?: (_lnrpc_TimestampedError)[];
  'flapCount'?: (number);
  'lastFlapNs'?: (number | string | Long);
}

export interface Peer__Output {
  'pubKey'?: (string);
  'address'?: (string);
  'bytesSent'?: (Long);
  'bytesRecv'?: (Long);
  'satSent'?: (Long);
  'satRecv'?: (Long);
  'inbound'?: (boolean);
  'pingTime'?: (Long);
  'syncType'?: (_lnrpc_Peer_SyncType);
  'features'?: ({[key: number]: _lnrpc_Feature__Output});
  'errors'?: (_lnrpc_TimestampedError__Output)[];
  'flapCount'?: (number);
  'lastFlapNs'?: (Long);
}
