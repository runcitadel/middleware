import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { StateClient as _lnrpc_StateClient, StateDefinition as _lnrpc_StateDefinition } from './lnrpc/State';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  lnrpc: {
    GetStateRequest: MessageTypeDefinition
    GetStateResponse: MessageTypeDefinition
    State: SubtypeConstructor<typeof grpc.Client, _lnrpc_StateClient> & { service: _lnrpc_StateDefinition }
    SubscribeStateRequest: MessageTypeDefinition
    SubscribeStateResponse: MessageTypeDefinition
    WalletState: EnumTypeDefinition
  }
}

