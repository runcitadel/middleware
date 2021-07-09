/// <reference types="node" />
export interface OutPoint {
    'txidBytes'?: (Buffer | Uint8Array | string);
    'txidStr'?: (string);
    'outputIndex'?: (number);
}
export interface OutPoint__Output {
    'txidBytes': (Buffer);
    'txidStr': (string);
    'outputIndex': (number);
}
