// Original file: resources/rpc.proto


// Original file: resources/rpc.proto

export enum _lnrpc_PeerEvent_EventType {
  PEER_ONLINE = 0,
  PEER_OFFLINE = 1,
}

export interface PeerEvent {
  'pubKey'?: (string);
  'type'?: (_lnrpc_PeerEvent_EventType | keyof typeof _lnrpc_PeerEvent_EventType);
}

export interface PeerEvent__Output {
  'pubKey'?: (string);
  'type'?: (_lnrpc_PeerEvent_EventType);
}
