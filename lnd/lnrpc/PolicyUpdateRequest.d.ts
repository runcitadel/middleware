/// <reference types="long" />
import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { Long } from '@grpc/proto-loader';
export interface PolicyUpdateRequest {
    'global'?: (boolean);
    'chanPoint'?: (_lnrpc_ChannelPoint | null);
    'baseFeeMsat'?: (number | string | Long);
    'feeRate'?: (number | string);
    'timeLockDelta'?: (number);
    'maxHtlcMsat'?: (number | string | Long);
    'minHtlcMsat'?: (number | string | Long);
    'minHtlcMsatSpecified'?: (boolean);
    'scope'?: "global" | "chanPoint";
}
export interface PolicyUpdateRequest__Output {
    'global'?: (boolean);
    'chanPoint'?: (_lnrpc_ChannelPoint__Output | null);
    'baseFeeMsat': (string);
    'feeRate': (number);
    'timeLockDelta': (number);
    'maxHtlcMsat': (string);
    'minHtlcMsat': (string);
    'minHtlcMsatSpecified': (boolean);
}
