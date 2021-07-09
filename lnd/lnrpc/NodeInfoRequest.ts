// Original file: resources/rpc.proto


export interface NodeInfoRequest {
  'pubKey'?: (string);
  'includeChannels'?: (boolean);
}

export interface NodeInfoRequest__Output {
  'pubKey': (string);
  'includeChannels': (boolean);
}
