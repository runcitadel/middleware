// Original file: resources/rpc.proto


export interface DeleteAllPaymentsRequest {
  'failedPaymentsOnly'?: (boolean);
  'failedHtlcsOnly'?: (boolean);
}

export interface DeleteAllPaymentsRequest__Output {
  'failedPaymentsOnly'?: (boolean);
  'failedHtlcsOnly'?: (boolean);
}
