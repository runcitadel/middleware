// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelConstraints {
  'csvDelay'?: (number);
  'chanReserveSat'?: (number | string | Long);
  'dustLimitSat'?: (number | string | Long);
  'maxPendingAmtMsat'?: (number | string | Long);
  'minHtlcMsat'?: (number | string | Long);
  'maxAcceptedHtlcs'?: (number);
}

export interface ChannelConstraints__Output {
  'csvDelay'?: (number);
  'chanReserveSat'?: (Long);
  'dustLimitSat'?: (Long);
  'maxPendingAmtMsat'?: (Long);
  'minHtlcMsat'?: (Long);
  'maxAcceptedHtlcs'?: (number);
}
