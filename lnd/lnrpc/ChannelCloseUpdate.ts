// Original file: resources/rpc.proto


export interface ChannelCloseUpdate {
  'closingTxid'?: (Buffer | Uint8Array | string);
  'success'?: (boolean);
}

export interface ChannelCloseUpdate__Output {
  'closingTxid': (Buffer);
  'success': (boolean);
}
