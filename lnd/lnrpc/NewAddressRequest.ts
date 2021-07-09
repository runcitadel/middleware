// Original file: resources/rpc.proto

import type { AddressType as _lnrpc_AddressType } from '../lnrpc/AddressType';

export interface NewAddressRequest {
  'type'?: (_lnrpc_AddressType | keyof typeof _lnrpc_AddressType);
  'account'?: (string);
}

export interface NewAddressRequest__Output {
  'type': (_lnrpc_AddressType);
  'account': (string);
}
