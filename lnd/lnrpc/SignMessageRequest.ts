// Original file: resources/rpc.proto


export interface SignMessageRequest {
  'msg'?: (Buffer | Uint8Array | string);
}

export interface SignMessageRequest__Output {
  'msg': (Buffer);
}
