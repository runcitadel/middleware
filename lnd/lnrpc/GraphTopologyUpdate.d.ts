import type { NodeUpdate as _lnrpc_NodeUpdate, NodeUpdate__Output as _lnrpc_NodeUpdate__Output } from '../lnrpc/NodeUpdate';
import type { ChannelEdgeUpdate as _lnrpc_ChannelEdgeUpdate, ChannelEdgeUpdate__Output as _lnrpc_ChannelEdgeUpdate__Output } from '../lnrpc/ChannelEdgeUpdate';
import type { ClosedChannelUpdate as _lnrpc_ClosedChannelUpdate, ClosedChannelUpdate__Output as _lnrpc_ClosedChannelUpdate__Output } from '../lnrpc/ClosedChannelUpdate';
export interface GraphTopologyUpdate {
    'nodeUpdates'?: (_lnrpc_NodeUpdate)[];
    'channelUpdates'?: (_lnrpc_ChannelEdgeUpdate)[];
    'closedChans'?: (_lnrpc_ClosedChannelUpdate)[];
}
export interface GraphTopologyUpdate__Output {
    'nodeUpdates': (_lnrpc_NodeUpdate__Output)[];
    'channelUpdates': (_lnrpc_ChannelEdgeUpdate__Output)[];
    'closedChans': (_lnrpc_ClosedChannelUpdate__Output)[];
}
