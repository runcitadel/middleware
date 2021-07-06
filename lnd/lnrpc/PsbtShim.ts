// Original file: resources/rpc.proto


export interface PsbtShim {
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'basePsbt'?: (Buffer | Uint8Array | string);
  'noPublish'?: (boolean);
}

export interface PsbtShim__Output {
  'pendingChanId'?: (Buffer);
  'basePsbt'?: (Buffer);
  'noPublish'?: (boolean);
}
