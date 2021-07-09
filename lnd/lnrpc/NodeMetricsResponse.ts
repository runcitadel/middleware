// Original file: resources/rpc.proto

import type { FloatMetric as _lnrpc_FloatMetric, FloatMetric__Output as _lnrpc_FloatMetric__Output } from '../lnrpc/FloatMetric';

export interface NodeMetricsResponse {
  'betweennessCentrality'?: ({[key: string]: _lnrpc_FloatMetric});
}

export interface NodeMetricsResponse__Output {
  'betweennessCentrality': ({[key: string]: _lnrpc_FloatMetric__Output});
}
