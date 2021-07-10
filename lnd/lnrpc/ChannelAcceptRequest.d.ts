/// <reference types="node" />
/// <reference types="long" />
import type { Long } from '@grpc/proto-loader';
export interface ChannelAcceptRequest {
    'nodePubkey'?: (Buffer | Uint8Array | string);
    'chainHash'?: (Buffer | Uint8Array | string);
    'pendingChanId'?: (Buffer | Uint8Array | string);
    'fundingAmt'?: (number | string | Long);
    'pushAmt'?: (number | string | Long);
    'dustLimit'?: (number | string | Long);
    'maxValueInFlight'?: (number | string | Long);
    'channelReserve'?: (number | string | Long);
    'minHtlc'?: (number | string | Long);
    'feePerKw'?: (number | string | Long);
    'csvDelay'?: (number);
    'maxAcceptedHtlcs'?: (number);
    'channelFlags'?: (number);
}
export interface ChannelAcceptRequest__Output {
    'nodePubkey': (Buffer);
    'chainHash': (Buffer);
    'pendingChanId': (Buffer);
    'fundingAmt': (string);
    'pushAmt': (string);
    'dustLimit': (string);
    'maxValueInFlight': (string);
    'channelReserve': (string);
    'minHtlc': (string);
    'feePerKw': (string);
    'csvDelay': (number);
    'maxAcceptedHtlcs': (number);
    'channelFlags': (number);
}
