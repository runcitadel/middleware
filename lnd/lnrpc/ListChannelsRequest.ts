// Original file: resources/rpc.proto


export interface ListChannelsRequest {
  'activeOnly'?: (boolean);
  'inactiveOnly'?: (boolean);
  'publicOnly'?: (boolean);
  'privateOnly'?: (boolean);
  'peer'?: (Buffer | Uint8Array | string);
}

export interface ListChannelsRequest__Output {
  'activeOnly': (boolean);
  'inactiveOnly': (boolean);
  'publicOnly': (boolean);
  'privateOnly': (boolean);
  'peer': (Buffer);
}
