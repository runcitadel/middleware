/// <reference types="long" />
import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { RoutingPolicy as _lnrpc_RoutingPolicy, RoutingPolicy__Output as _lnrpc_RoutingPolicy__Output } from '../lnrpc/RoutingPolicy';
import type { Long } from '@grpc/proto-loader';
export interface ChannelEdgeUpdate {
    'chanId'?: (number | string | Long);
    'chanPoint'?: (_lnrpc_ChannelPoint | null);
    'capacity'?: (number | string | Long);
    'routingPolicy'?: (_lnrpc_RoutingPolicy | null);
    'advertisingNode'?: (string);
    'connectingNode'?: (string);
}
export interface ChannelEdgeUpdate__Output {
    'chanId': (string);
    'chanPoint': (_lnrpc_ChannelPoint__Output | null);
    'capacity': (string);
    'routingPolicy': (_lnrpc_RoutingPolicy__Output | null);
    'advertisingNode': (string);
    'connectingNode': (string);
}
