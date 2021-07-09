// Original file: resources/rpc.proto

import type { ChannelFeeReport as _lnrpc_ChannelFeeReport, ChannelFeeReport__Output as _lnrpc_ChannelFeeReport__Output } from '../lnrpc/ChannelFeeReport';
import type { Long } from '@grpc/proto-loader';

export interface FeeReportResponse {
  'channelFees'?: (_lnrpc_ChannelFeeReport)[];
  'dayFeeSum'?: (number | string | Long);
  'weekFeeSum'?: (number | string | Long);
  'monthFeeSum'?: (number | string | Long);
}

export interface FeeReportResponse__Output {
  'channelFees': (_lnrpc_ChannelFeeReport__Output)[];
  'dayFeeSum': (Long);
  'weekFeeSum': (Long);
  'monthFeeSum': (Long);
}
