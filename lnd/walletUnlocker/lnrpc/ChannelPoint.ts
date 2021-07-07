// Original file: resources/rpc.proto


export interface ChannelPoint {
  'fundingTxidBytes'?: (Buffer | Uint8Array | string);
  'fundingTxidStr'?: (string);
  'outputIndex'?: (number);
  'fundingTxid'?: "fundingTxidBytes"|"fundingTxidStr";
}

export interface ChannelPoint__Output {
  'fundingTxidBytes'?: (Buffer);
  'fundingTxidStr'?: (string);
  'outputIndex'?: (number);
}
