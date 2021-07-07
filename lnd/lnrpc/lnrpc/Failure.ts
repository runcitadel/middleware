// Original file: resources/rpc.proto

import type { ChannelUpdate as _lnrpc_ChannelUpdate, ChannelUpdate__Output as _lnrpc_ChannelUpdate__Output } from '../lnrpc/ChannelUpdate';
import type { Long } from '@grpc/proto-loader';

// Original file: resources/rpc.proto

export enum _lnrpc_Failure_FailureCode {
  RESERVED = 0,
  INCORRECT_OR_UNKNOWN_PAYMENT_DETAILS = 1,
  INCORRECT_PAYMENT_AMOUNT = 2,
  FINAL_INCORRECT_CLTV_EXPIRY = 3,
  FINAL_INCORRECT_HTLC_AMOUNT = 4,
  FINAL_EXPIRY_TOO_SOON = 5,
  INVALID_REALM = 6,
  EXPIRY_TOO_SOON = 7,
  INVALID_ONION_VERSION = 8,
  INVALID_ONION_HMAC = 9,
  INVALID_ONION_KEY = 10,
  AMOUNT_BELOW_MINIMUM = 11,
  FEE_INSUFFICIENT = 12,
  INCORRECT_CLTV_EXPIRY = 13,
  CHANNEL_DISABLED = 14,
  TEMPORARY_CHANNEL_FAILURE = 15,
  REQUIRED_NODE_FEATURE_MISSING = 16,
  REQUIRED_CHANNEL_FEATURE_MISSING = 17,
  UNKNOWN_NEXT_PEER = 18,
  TEMPORARY_NODE_FAILURE = 19,
  PERMANENT_NODE_FAILURE = 20,
  PERMANENT_CHANNEL_FAILURE = 21,
  EXPIRY_TOO_FAR = 22,
  MPP_TIMEOUT = 23,
  INVALID_ONION_PAYLOAD = 24,
  INTERNAL_FAILURE = 997,
  UNKNOWN_FAILURE = 998,
  UNREADABLE_FAILURE = 999,
}

export interface Failure {
  'code'?: (_lnrpc_Failure_FailureCode | keyof typeof _lnrpc_Failure_FailureCode);
  'channelUpdate'?: (_lnrpc_ChannelUpdate | null);
  'htlcMsat'?: (number | string | Long);
  'onionSha_256'?: (Buffer | Uint8Array | string);
  'cltvExpiry'?: (number);
  'flags'?: (number);
  'failureSourceIndex'?: (number);
  'height'?: (number);
}

export interface Failure__Output {
  'code'?: (_lnrpc_Failure_FailureCode);
  'channelUpdate'?: (_lnrpc_ChannelUpdate__Output);
  'htlcMsat'?: (Long);
  'onionSha_256'?: (Buffer);
  'cltvExpiry'?: (number);
  'flags'?: (number);
  'failureSourceIndex'?: (number);
  'height'?: (number);
}
