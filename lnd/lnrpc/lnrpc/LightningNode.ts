// Original file: resources/rpc.proto

import type { NodeAddress as _lnrpc_NodeAddress, NodeAddress__Output as _lnrpc_NodeAddress__Output } from '../lnrpc/NodeAddress';
import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';

export interface LightningNode {
  'lastUpdate'?: (number);
  'pubKey'?: (string);
  'alias'?: (string);
  'addresses'?: (_lnrpc_NodeAddress)[];
  'color'?: (string);
  'features'?: ({[key: number]: _lnrpc_Feature});
}

export interface LightningNode__Output {
  'lastUpdate'?: (number);
  'pubKey'?: (string);
  'alias'?: (string);
  'addresses'?: (_lnrpc_NodeAddress__Output)[];
  'color'?: (string);
  'features'?: ({[key: number]: _lnrpc_Feature__Output});
}
