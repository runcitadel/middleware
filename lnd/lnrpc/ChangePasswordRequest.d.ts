/// <reference types="node" />
export interface ChangePasswordRequest {
    'currentPassword'?: (Buffer | Uint8Array | string);
    'newPassword'?: (Buffer | Uint8Array | string);
    'statelessInit'?: (boolean);
    'newMacaroonRootKey'?: (boolean);
}
export interface ChangePasswordRequest__Output {
    'currentPassword': (Buffer);
    'newPassword': (Buffer);
    'statelessInit': (boolean);
    'newMacaroonRootKey': (boolean);
}
