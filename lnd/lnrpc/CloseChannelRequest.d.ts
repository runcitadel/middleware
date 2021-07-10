/// <reference types="long" />
import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { Long } from '@grpc/proto-loader';
export interface CloseChannelRequest {
    'channelPoint'?: (_lnrpc_ChannelPoint | null);
    'force'?: (boolean);
    'targetConf'?: (number);
    'satPerByte'?: (number | string | Long);
    'deliveryAddress'?: (string);
    'satPerVbyte'?: (number | string | Long);
}
export interface CloseChannelRequest__Output {
    'channelPoint': (_lnrpc_ChannelPoint__Output | null);
    'force': (boolean);
    'targetConf': (number);
    'satPerByte': (string);
    'deliveryAddress': (string);
    'satPerVbyte': (string);
}
