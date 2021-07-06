// Original file: resources/rpc.proto


export interface FundingPsbtFinalize {
  'signedPsbt'?: (Buffer | Uint8Array | string);
  'pendingChanId'?: (Buffer | Uint8Array | string);
  'finalRawTx'?: (Buffer | Uint8Array | string);
}

export interface FundingPsbtFinalize__Output {
  'signedPsbt'?: (Buffer);
  'pendingChanId'?: (Buffer);
  'finalRawTx'?: (Buffer);
}
