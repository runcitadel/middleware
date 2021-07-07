// Original file: resources/rpc.proto

import type { KeyLocator as _lnrpc_KeyLocator, KeyLocator__Output as _lnrpc_KeyLocator__Output } from '../lnrpc/KeyLocator';

export interface KeyDescriptor {
  'rawKeyBytes'?: (Buffer | Uint8Array | string);
  'keyLoc'?: (_lnrpc_KeyLocator | null);
}

export interface KeyDescriptor__Output {
  'rawKeyBytes'?: (Buffer);
  'keyLoc'?: (_lnrpc_KeyLocator__Output);
}
