// Original file: resources/rpc.proto

import type { Long } from '@grpc/proto-loader';

export interface NetworkInfo {
  'graphDiameter'?: (number);
  'avgOutDegree'?: (number | string);
  'maxOutDegree'?: (number);
  'numNodes'?: (number);
  'numChannels'?: (number);
  'totalNetworkCapacity'?: (number | string | Long);
  'avgChannelSize'?: (number | string);
  'minChannelSize'?: (number | string | Long);
  'maxChannelSize'?: (number | string | Long);
  'medianChannelSizeSat'?: (number | string | Long);
  'numZombieChans'?: (number | string | Long);
}

export interface NetworkInfo__Output {
  'graphDiameter'?: (number);
  'avgOutDegree'?: (number);
  'maxOutDegree'?: (number);
  'numNodes'?: (number);
  'numChannels'?: (number);
  'totalNetworkCapacity'?: (Long);
  'avgChannelSize'?: (number);
  'minChannelSize'?: (Long);
  'maxChannelSize'?: (Long);
  'medianChannelSizeSat'?: (Long);
  'numZombieChans'?: (Long);
}
