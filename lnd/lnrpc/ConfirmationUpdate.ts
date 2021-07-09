// Original file: resources/rpc.proto


export interface ConfirmationUpdate {
  'blockSha'?: (Buffer | Uint8Array | string);
  'blockHeight'?: (number);
  'numConfsLeft'?: (number);
}

export interface ConfirmationUpdate__Output {
  'blockSha': (Buffer);
  'blockHeight': (number);
  'numConfsLeft': (number);
}
