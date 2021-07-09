// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ReadyForPsbtFunding {
  'fundingAddress'?: (string);
  'fundingAmount'?: (number | string | Long);
  'psbt'?: (Buffer | Uint8Array | string);
}

export interface ReadyForPsbtFunding__Output {
  'fundingAddress': (string);
  'fundingAmount': (Long);
  'psbt': (Buffer);
}
