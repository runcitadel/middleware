// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface HTLC {
  'incoming'?: (boolean);
  'amount'?: (number | string | Long);
  'hashLock'?: (Buffer | Uint8Array | string);
  'expirationHeight'?: (number);
  'htlcIndex'?: (number | string | Long);
  'forwardingChannel'?: (number | string | Long);
  'forwardingHtlcIndex'?: (number | string | Long);
}

export interface HTLC__Output {
  'incoming'?: (boolean);
  'amount'?: (Long);
  'hashLock'?: (Buffer);
  'expirationHeight'?: (number);
  'htlcIndex'?: (Long);
  'forwardingChannel'?: (Long);
  'forwardingHtlcIndex'?: (Long);
}
