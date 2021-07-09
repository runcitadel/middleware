// Original file: resources/stateservice.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetStateRequest as _lnrpc_GetStateRequest, GetStateRequest__Output as _lnrpc_GetStateRequest__Output } from '../lnrpc/GetStateRequest';
import type { GetStateResponse as _lnrpc_GetStateResponse, GetStateResponse__Output as _lnrpc_GetStateResponse__Output } from '../lnrpc/GetStateResponse';
import type { SubscribeStateRequest as _lnrpc_SubscribeStateRequest, SubscribeStateRequest__Output as _lnrpc_SubscribeStateRequest__Output } from '../lnrpc/SubscribeStateRequest';
import type { SubscribeStateResponse as _lnrpc_SubscribeStateResponse, SubscribeStateResponse__Output as _lnrpc_SubscribeStateResponse__Output } from '../lnrpc/SubscribeStateResponse';

export interface StateClient extends grpc.Client {
  GetState(argument: _lnrpc_GetStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  GetState(argument: _lnrpc_GetStateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  GetState(argument: _lnrpc_GetStateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  GetState(argument: _lnrpc_GetStateRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  getState(argument: _lnrpc_GetStateRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetStateResponse__Output) => void): grpc.ClientUnaryCall;
  
  SubscribeState(argument: _lnrpc_SubscribeStateRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse__Output>;
  SubscribeState(argument: _lnrpc_SubscribeStateRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse__Output>;
  subscribeState(argument: _lnrpc_SubscribeStateRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse__Output>;
  subscribeState(argument: _lnrpc_SubscribeStateRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_SubscribeStateResponse__Output>;
  
}

export interface StateHandlers extends grpc.UntypedServiceImplementation {
  GetState: grpc.handleUnaryCall<_lnrpc_GetStateRequest__Output, _lnrpc_GetStateResponse>;
  
  SubscribeState: grpc.handleServerStreamingCall<_lnrpc_SubscribeStateRequest__Output, _lnrpc_SubscribeStateResponse>;
  
}

export interface StateDefinition extends grpc.ServiceDefinition {
  GetState: MethodDefinition<_lnrpc_GetStateRequest, _lnrpc_GetStateResponse, _lnrpc_GetStateRequest__Output, _lnrpc_GetStateResponse__Output>
  SubscribeState: MethodDefinition<_lnrpc_SubscribeStateRequest, _lnrpc_SubscribeStateResponse, _lnrpc_SubscribeStateRequest__Output, _lnrpc_SubscribeStateResponse__Output>
}
