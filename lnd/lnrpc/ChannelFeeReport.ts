// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface ChannelFeeReport {
  'channelPoint'?: (string);
  'baseFeeMsat'?: (number | string | Long);
  'feePerMil'?: (number | string | Long);
  'feeRate'?: (number | string);
  'chanId'?: (number | string | Long);
}

export interface ChannelFeeReport__Output {
  'channelPoint': (string);
  'baseFeeMsat': (Long);
  'feePerMil': (Long);
  'feeRate': (number);
  'chanId': (Long);
}
