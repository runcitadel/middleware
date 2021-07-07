// Original file: resources/rpc.proto

import type { Feature as _lnrpc_Feature, Feature__Output as _lnrpc_Feature__Output } from '../lnrpc/Feature';
import type { NodeAddress as _lnrpc_NodeAddress, NodeAddress__Output as _lnrpc_NodeAddress__Output } from '../lnrpc/NodeAddress';

export interface NodeUpdate {
  'addresses'?: (string)[];
  'identityKey'?: (string);
  'globalFeatures'?: (Buffer | Uint8Array | string);
  'alias'?: (string);
  'color'?: (string);
  'features'?: ({[key: number]: _lnrpc_Feature});
  'nodeAddresses'?: (_lnrpc_NodeAddress)[];
}

export interface NodeUpdate__Output {
  'addresses'?: (string)[];
  'identityKey'?: (string);
  'globalFeatures'?: (Buffer);
  'alias'?: (string);
  'color'?: (string);
  'features'?: ({[key: number]: _lnrpc_Feature__Output});
  'nodeAddresses'?: (_lnrpc_NodeAddress__Output)[];
}
