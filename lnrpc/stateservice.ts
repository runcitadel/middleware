/* eslint-disable */
// Manually patched with the extension
import _m0 from 'protobufjs/minimal.js';

export const protobufPackage = "lnrpc";

export enum WalletState {
  NON_EXISTING = 0,
  LOCKED = 1,
  UNLOCKED = 2,
  RPC_ACTIVE = 3,
  /** SERVER_ACTIVE - SERVER_ACTIVE means that the lnd server is ready to accept calls. */
  SERVER_ACTIVE = 4,
  WAITING_TO_START = 255,
  UNRECOGNIZED = -1,
}

export function walletStateFromJSON(object: any): WalletState {
  switch (object) {
    case 0:
    case "NON_EXISTING":
      return WalletState.NON_EXISTING;
    case 1:
    case "LOCKED":
      return WalletState.LOCKED;
    case 2:
    case "UNLOCKED":
      return WalletState.UNLOCKED;
    case 3:
    case "RPC_ACTIVE":
      return WalletState.RPC_ACTIVE;
    case 4:
    case "SERVER_ACTIVE":
      return WalletState.SERVER_ACTIVE;
    case 255:
    case "WAITING_TO_START":
      return WalletState.WAITING_TO_START;
    case -1:
    case "UNRECOGNIZED":
    default:
      return WalletState.UNRECOGNIZED;
  }
}

export function walletStateToJSON(object: WalletState): string {
  switch (object) {
    case WalletState.NON_EXISTING:
      return "NON_EXISTING";
    case WalletState.LOCKED:
      return "LOCKED";
    case WalletState.UNLOCKED:
      return "UNLOCKED";
    case WalletState.RPC_ACTIVE:
      return "RPC_ACTIVE";
    case WalletState.SERVER_ACTIVE:
      return "SERVER_ACTIVE";
    case WalletState.WAITING_TO_START:
      return "WAITING_TO_START";
    case WalletState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface SubscribeStateRequest {
}

export interface SubscribeStateResponse {
  state: WalletState;
}

export interface GetStateRequest {
}

export interface GetStateResponse {
  state: WalletState;
}

function createBaseSubscribeStateRequest(): SubscribeStateRequest {
  return {};
}

export const SubscribeStateRequest = {
  encode(_: SubscribeStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): SubscribeStateRequest {
    return {};
  },

  toJSON(_: SubscribeStateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<SubscribeStateRequest>): SubscribeStateRequest {
    const message = createBaseSubscribeStateRequest();
    return message;
  },
};

function createBaseSubscribeStateResponse(): SubscribeStateResponse {
  return { state: 0 };
}

export const SubscribeStateResponse = {
  encode(message: SubscribeStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubscribeStateResponse {
    return { state: isSet(object.state) ? walletStateFromJSON(object.state) : 0 };
  },

  toJSON(message: SubscribeStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = walletStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<SubscribeStateResponse>): SubscribeStateResponse {
    const message = createBaseSubscribeStateResponse();
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetStateRequest(): GetStateRequest {
  return {};
}

export const GetStateRequest = {
  encode(_: GetStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetStateRequest {
    return {};
  },

  toJSON(_: GetStateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetStateRequest>): GetStateRequest {
    const message = createBaseGetStateRequest();
    return message;
  },
};

function createBaseGetStateResponse(): GetStateResponse {
  return { state: 0 };
}

export const GetStateResponse = {
  encode(message: GetStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStateResponse {
    return { state: isSet(object.state) ? walletStateFromJSON(object.state) : 0 };
  },

  toJSON(message: GetStateResponse): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = walletStateToJSON(message.state));
    return obj;
  },

  fromPartial(object: DeepPartial<GetStateResponse>): GetStateResponse {
    const message = createBaseGetStateResponse();
    message.state = object.state ?? 0;
    return message;
  },
};

/**
 * State service is a always running service that exposes the current state of
 * the wallet and RPC server.
 */
export type StateDefinition = typeof StateDefinition;
export const StateDefinition = {
  name: "State",
  fullName: "lnrpc.State",
  methods: {
    /**
     * SubscribeState subscribes to the state of the wallet. The current wallet
     * state will always be delivered immediately.
     */
    subscribeState: {
      name: "SubscribeState",
      requestType: SubscribeStateRequest,
      requestStream: false,
      responseType: SubscribeStateResponse,
      responseStream: true,
      options: {},
    },
    /**
     * GetState returns the current wallet state without streaming further
     * changes.
     */
    getState: {
      name: "GetState",
      requestType: GetStateRequest,
      requestStream: false,
      responseType: GetStateResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
