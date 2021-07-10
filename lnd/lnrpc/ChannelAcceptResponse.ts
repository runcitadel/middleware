// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelAcceptResponse {
  'accept'?: (boolean);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'error'?: (string);
  'upfrontShutdown'?: (string);
  'csvDelay'?: (number);
  'reserveSat'?: (number | string | Long);
  'inFlightMaxMsat'?: (number | string | Long);
  'maxHtlcCount'?: (number);
  'minHtlcIn'?: (number | string | Long);
  'minAcceptDepth'?: (number);
}

export interface ChannelAcceptResponse__Output {
  'accept': (boolean);
  'pendingChanId': (Buffer);
  'error': (string);
  'upfrontShutdown': (string);
  'csvDelay': (number);
  'reserveSat': (string);
  'inFlightMaxMsat': (string);
  'maxHtlcCount': (number);
  'minHtlcIn': (string);
  'minAcceptDepth': (number);
}
