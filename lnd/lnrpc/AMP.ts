// Original file: resources/rpc.proto


export interface AMP {
  'rootShare'?: (Buffer | Uint8Array | string);
  'setId'?: (Buffer | Uint8Array | string);
  'childIndex'?: (number);
  'hash'?: (Buffer | Uint8Array | string);
  'preimage'?: (Buffer | Uint8Array | string);
}

export interface AMP__Output {
  'rootShare': (Buffer);
  'setId': (Buffer);
  'childIndex': (number);
  'hash': (Buffer);
  'preimage': (Buffer);
}
