/// <reference types="node" />
export interface GenSeedResponse {
    'cipherSeedMnemonic'?: (string)[];
    'encipheredSeed'?: (Buffer | Uint8Array | string);
}
export interface GenSeedResponse__Output {
    'cipherSeedMnemonic': (string)[];
    'encipheredSeed': (Buffer);
}
