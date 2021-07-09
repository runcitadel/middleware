import type { ForwardingEvent as _lnrpc_ForwardingEvent, ForwardingEvent__Output as _lnrpc_ForwardingEvent__Output } from '../lnrpc/ForwardingEvent';
export interface ForwardingHistoryResponse {
    'forwardingEvents'?: (_lnrpc_ForwardingEvent)[];
    'lastOffsetIndex'?: (number);
}
export interface ForwardingHistoryResponse__Output {
    'forwardingEvents': (_lnrpc_ForwardingEvent__Output)[];
    'lastOffsetIndex': (number);
}
