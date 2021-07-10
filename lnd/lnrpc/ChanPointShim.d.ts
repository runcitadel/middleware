/// <reference types="long" />
/// <reference types="node" />
import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { KeyDescriptor as _lnrpc_KeyDescriptor, KeyDescriptor__Output as _lnrpc_KeyDescriptor__Output } from '../lnrpc/KeyDescriptor';
import type { Long } from '@grpc/proto-loader';
export interface ChanPointShim {
    'amt'?: (number | string | Long);
    'chanPoint'?: (_lnrpc_ChannelPoint | null);
    'localKey'?: (_lnrpc_KeyDescriptor | null);
    'remoteKey'?: (Buffer | Uint8Array | string);
    'pendingChanId'?: (Buffer | Uint8Array | string);
    'thawHeight'?: (number);
}
export interface ChanPointShim__Output {
    'amt': (string);
    'chanPoint': (_lnrpc_ChannelPoint__Output | null);
    'localKey': (_lnrpc_KeyDescriptor__Output | null);
    'remoteKey': (Buffer);
    'pendingChanId': (Buffer);
    'thawHeight': (number);
}
