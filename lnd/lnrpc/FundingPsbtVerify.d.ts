/// <reference types="node" />
export interface FundingPsbtVerify {
    'fundedPsbt'?: (Buffer | Uint8Array | string);
    'pendingChanId'?: (Buffer | Uint8Array | string);
}
export interface FundingPsbtVerify__Output {
    'fundedPsbt': (Buffer);
    'pendingChanId': (Buffer);
}
