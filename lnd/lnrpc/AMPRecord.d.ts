/// <reference types="node" />
export interface AMPRecord {
    'rootShare'?: (Buffer | Uint8Array | string);
    'setId'?: (Buffer | Uint8Array | string);
    'childIndex'?: (number);
}
export interface AMPRecord__Output {
    'rootShare': (Buffer);
    'setId': (Buffer);
    'childIndex': (number);
}
