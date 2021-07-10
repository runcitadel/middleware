/// <reference types="long" />
import type { Chain as _lnrpc_Chain, Chain__Output as _lnrpc_Chain__Output } from '../lnrpc/Chain';
import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';
import type { Long } from '@grpc/proto-loader';
export interface GetInfoResponse {
    'identityPubkey'?: (string);
    'alias'?: (string);
    'numPendingChannels'?: (number);
    'numActiveChannels'?: (number);
    'numPeers'?: (number);
    'blockHeight'?: (number);
    'blockHash'?: (string);
    'syncedToChain'?: (boolean);
    'testnet'?: (boolean);
    'uris'?: (string)[];
    'bestHeaderTimestamp'?: (number | string | Long);
    'version'?: (string);
    'numInactiveChannels'?: (number);
    'chains'?: (_lnrpc_Chain)[];
    'color'?: (string);
    'syncedToGraph'?: (boolean);
    'features'?: ({
        [key: number]: _lnrpc_Feature;
    });
    'commitHash'?: (string);
}
export interface GetInfoResponse__Output {
    'identityPubkey': (string);
    'alias': (string);
    'numPendingChannels': (number);
    'numActiveChannels': (number);
    'numPeers': (number);
    'blockHeight': (number);
    'blockHash': (string);
    'syncedToChain': (boolean);
    'testnet': (boolean);
    'uris': (string)[];
    'bestHeaderTimestamp': (string);
    'version': (string);
    'numInactiveChannels': (number);
    'chains': (_lnrpc_Chain__Output)[];
    'color': (string);
    'syncedToGraph': (boolean);
    'features': ({
        [key: number]: _lnrpc_Feature__Output;
    });
    'commitHash': (string);
}
