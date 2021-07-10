// Original file: resources/rpc.proto

import type { RouteHint as _lnrpc_RouteHint, RouteHint__Output as _lnrpc_RouteHint__Output } from '../lnrpc/RouteHint';
import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';
import type { Long } from '@grpc/proto-loader';

export interface PayReq {
  'destination'?: (string);
  'paymentHash'?: (string);
  'numSatoshis'?: (number | string | Long);
  'timestamp'?: (number | string | Long);
  'expiry'?: (number | string | Long);
  'description'?: (string);
  'descriptionHash'?: (string);
  'fallbackAddr'?: (string);
  'cltvExpiry'?: (number | string | Long);
  'routeHints'?: (_lnrpc_RouteHint)[];
  'paymentAddr'?: (Buffer | Uint8Array | string);
  'numMsat'?: (number | string | Long);
  'features'?: ({[key: number]: _lnrpc_Feature});
}

export interface PayReq__Output {
  'destination': (string);
  'paymentHash': (string);
  'numSatoshis': (string);
  'timestamp': (string);
  'expiry': (string);
  'description': (string);
  'descriptionHash': (string);
  'fallbackAddr': (string);
  'cltvExpiry': (string);
  'routeHints': (_lnrpc_RouteHint__Output)[];
  'paymentAddr': (Buffer);
  'numMsat': (string);
  'features': ({[key: number]: _lnrpc_Feature__Output});
}
