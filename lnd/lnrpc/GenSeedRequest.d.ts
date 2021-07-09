/// <reference types="node" />
export interface GenSeedRequest {
    'aezeedPassphrase'?: (Buffer | Uint8Array | string);
    'seedEntropy'?: (Buffer | Uint8Array | string);
}
export interface GenSeedRequest__Output {
    'aezeedPassphrase': (Buffer);
    'seedEntropy': (Buffer);
}
