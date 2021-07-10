/// <reference types="long" />
/// <reference types="node" />
import type { InvoiceHTLCState as _lnrpc_InvoiceHTLCState } from '../lnrpc/InvoiceHTLCState';
import type { AMP as _lnrpc_AMP, AMP__Output as _lnrpc_AMP__Output } from '../lnrpc/AMP';
import type { Long } from '@grpc/proto-loader';
export interface InvoiceHTLC {
    'chanId'?: (number | string | Long);
    'htlcIndex'?: (number | string | Long);
    'amtMsat'?: (number | string | Long);
    'acceptHeight'?: (number);
    'acceptTime'?: (number | string | Long);
    'resolveTime'?: (number | string | Long);
    'expiryHeight'?: (number);
    'state'?: (_lnrpc_InvoiceHTLCState | keyof typeof _lnrpc_InvoiceHTLCState);
    'customRecords'?: ({
        [key: number]: Buffer | Uint8Array | string;
    });
    'mppTotalAmtMsat'?: (number | string | Long);
    'amp'?: (_lnrpc_AMP | null);
}
export interface InvoiceHTLC__Output {
    'chanId': (string);
    'htlcIndex': (string);
    'amtMsat': (string);
    'acceptHeight': (number);
    'acceptTime': (string);
    'resolveTime': (string);
    'expiryHeight': (number);
    'state': (_lnrpc_InvoiceHTLCState);
    'customRecords': ({
        [key: number]: Buffer;
    });
    'mppTotalAmtMsat': (string);
    'amp': (_lnrpc_AMP__Output | null);
}
