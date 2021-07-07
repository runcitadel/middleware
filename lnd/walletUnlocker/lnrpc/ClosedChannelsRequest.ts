// Original file: resources/rpc.proto


export interface ClosedChannelsRequest {
  'cooperative'?: (boolean);
  'localForce'?: (boolean);
  'remoteForce'?: (boolean);
  'breach'?: (boolean);
  'fundingCanceled'?: (boolean);
  'abandoned'?: (boolean);
}

export interface ClosedChannelsRequest__Output {
  'cooperative'?: (boolean);
  'localForce'?: (boolean);
  'remoteForce'?: (boolean);
  'breach'?: (boolean);
  'fundingCanceled'?: (boolean);
  'abandoned'?: (boolean);
}
