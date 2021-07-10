/// <reference types="long" />
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
    'graphDiameter': (number);
    'avgOutDegree': (number);
    'maxOutDegree': (number);
    'numNodes': (number);
    'numChannels': (number);
    'totalNetworkCapacity': (string);
    'avgChannelSize': (number);
    'minChannelSize': (string);
    'maxChannelSize': (string);
    'medianChannelSizeSat': (string);
    'numZombieChans': (string);
}
