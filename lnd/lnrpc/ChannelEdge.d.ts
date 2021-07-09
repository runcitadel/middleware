/// <reference types="long" />
import type { RoutingPolicy as _lnrpc_RoutingPolicy, RoutingPolicy__Output as _lnrpc_RoutingPolicy__Output } from '../lnrpc/RoutingPolicy';
import type { Long } from '@grpc/proto-loader';
export interface ChannelEdge {
    'channelId'?: (number | string | Long);
    'chanPoint'?: (string);
    'lastUpdate'?: (number);
    'node1Pub'?: (string);
    'node2Pub'?: (string);
    'capacity'?: (number | string | Long);
    'node1Policy'?: (_lnrpc_RoutingPolicy | null);
    'node2Policy'?: (_lnrpc_RoutingPolicy | null);
}
export interface ChannelEdge__Output {
    'channelId': (Long);
    'chanPoint': (string);
    'lastUpdate': (number);
    'node1Pub': (string);
    'node2Pub': (string);
    'capacity': (Long);
    'node1Policy': (_lnrpc_RoutingPolicy__Output | null);
    'node2Policy': (_lnrpc_RoutingPolicy__Output | null);
}
