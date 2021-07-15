// Original file: resources/rpc.proto

import type { NodeMetricType as _lnrpc_NodeMetricType } from '../lnrpc/NodeMetricType';

export interface NodeMetricsRequest {
  'types'?: (_lnrpc_NodeMetricType | keyof typeof _lnrpc_NodeMetricType)[];
}

export interface NodeMetricsRequest__Output {
  'types': (_lnrpc_NodeMetricType)[];
}