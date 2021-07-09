// Original file: resources/rpc.proto


export interface PendingUpdate {
  'txid'?: (Buffer | Uint8Array | string);
  'outputIndex'?: (number);
}

export interface PendingUpdate__Output {
  'txid': (Buffer);
  'outputIndex': (number);
}
