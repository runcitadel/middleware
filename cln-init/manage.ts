/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'manage';

export enum CreateWalletResult {
  CREATE_WALLET_SUCCESS = 0,
  CREATE_WALLET_ERROR_ALREADY_EXISTS = 1,
  CREATE_WALLET_ERROR_PERMISSION_DENIED = 2,
  CREATE_WALLET_ERROR_UNKNOWN = 3,
  CREATE_WALLET_ERROR_INVALID_MNEMONIC = 4,
  UNRECOGNIZED = -1,
}

export function createWalletResultFromJSON(object: any): CreateWalletResult {
  switch (object) {
    case 0:
    case 'CREATE_WALLET_SUCCESS':
      return CreateWalletResult.CREATE_WALLET_SUCCESS;
    case 1:
    case 'CREATE_WALLET_ERROR_ALREADY_EXISTS':
      return CreateWalletResult.CREATE_WALLET_ERROR_ALREADY_EXISTS;
    case 2:
    case 'CREATE_WALLET_ERROR_PERMISSION_DENIED':
      return CreateWalletResult.CREATE_WALLET_ERROR_PERMISSION_DENIED;
    case 3:
    case 'CREATE_WALLET_ERROR_UNKNOWN':
      return CreateWalletResult.CREATE_WALLET_ERROR_UNKNOWN;
    case 4:
    case 'CREATE_WALLET_ERROR_INVALID_MNEMONIC':
      return CreateWalletResult.CREATE_WALLET_ERROR_INVALID_MNEMONIC;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return CreateWalletResult.UNRECOGNIZED;
  }
}

export function createWalletResultToJSON(object: CreateWalletResult): string {
  switch (object) {
    case CreateWalletResult.CREATE_WALLET_SUCCESS:
      return 'CREATE_WALLET_SUCCESS';
    case CreateWalletResult.CREATE_WALLET_ERROR_ALREADY_EXISTS:
      return 'CREATE_WALLET_ERROR_ALREADY_EXISTS';
    case CreateWalletResult.CREATE_WALLET_ERROR_PERMISSION_DENIED:
      return 'CREATE_WALLET_ERROR_PERMISSION_DENIED';
    case CreateWalletResult.CREATE_WALLET_ERROR_UNKNOWN:
      return 'CREATE_WALLET_ERROR_UNKNOWN';
    case CreateWalletResult.CREATE_WALLET_ERROR_INVALID_MNEMONIC:
      return 'CREATE_WALLET_ERROR_INVALID_MNEMONIC';
    default:
      return 'UNKNOWN';
  }
}

export enum DeleteWalletResult {
  DELETE_WALLET_SUCCESS = 0,
  DELETE_WALLET_ERROR_DOESNT_EXISTS = 1,
  DELETE_WALLET_ERROR_PERMISSION_DENIED = 2,
  DELETE_WALLET_ERROR_UNKNOWN = 3,
  UNRECOGNIZED = -1,
}

export function deleteWalletResultFromJSON(object: any): DeleteWalletResult {
  switch (object) {
    case 0:
    case 'DELETE_WALLET_SUCCESS':
      return DeleteWalletResult.DELETE_WALLET_SUCCESS;
    case 1:
    case 'DELETE_WALLET_ERROR_DOESNT_EXISTS':
      return DeleteWalletResult.DELETE_WALLET_ERROR_DOESNT_EXISTS;
    case 2:
    case 'DELETE_WALLET_ERROR_PERMISSION_DENIED':
      return DeleteWalletResult.DELETE_WALLET_ERROR_PERMISSION_DENIED;
    case 3:
    case 'DELETE_WALLET_ERROR_UNKNOWN':
      return DeleteWalletResult.DELETE_WALLET_ERROR_UNKNOWN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return DeleteWalletResult.UNRECOGNIZED;
  }
}

export function deleteWalletResultToJSON(object: DeleteWalletResult): string {
  switch (object) {
    case DeleteWalletResult.DELETE_WALLET_SUCCESS:
      return 'DELETE_WALLET_SUCCESS';
    case DeleteWalletResult.DELETE_WALLET_ERROR_DOESNT_EXISTS:
      return 'DELETE_WALLET_ERROR_DOESNT_EXISTS';
    case DeleteWalletResult.DELETE_WALLET_ERROR_PERMISSION_DENIED:
      return 'DELETE_WALLET_ERROR_PERMISSION_DENIED';
    case DeleteWalletResult.DELETE_WALLET_ERROR_UNKNOWN:
      return 'DELETE_WALLET_ERROR_UNKNOWN';
    default:
      return 'UNKNOWN';
  }
}

export enum GenSeedLength {
  GEN_SEED_12_WORDS = 0,
  GEN_SEED_15_WORDS = 1,
  GEN_SEED_18_WORDS = 2,
  GEN_SEED_21_WORDS = 3,
  GEN_SEED_24_WORDS = 4,
  UNRECOGNIZED = -1,
}

export function genSeedLengthFromJSON(object: any): GenSeedLength {
  switch (object) {
    case 0:
    case 'GEN_SEED_12_WORDS':
      return GenSeedLength.GEN_SEED_12_WORDS;
    case 1:
    case 'GEN_SEED_15_WORDS':
      return GenSeedLength.GEN_SEED_15_WORDS;
    case 2:
    case 'GEN_SEED_18_WORDS':
      return GenSeedLength.GEN_SEED_18_WORDS;
    case 3:
    case 'GEN_SEED_21_WORDS':
      return GenSeedLength.GEN_SEED_21_WORDS;
    case 4:
    case 'GEN_SEED_24_WORDS':
      return GenSeedLength.GEN_SEED_24_WORDS;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return GenSeedLength.UNRECOGNIZED;
  }
}

export function genSeedLengthToJSON(object: GenSeedLength): string {
  switch (object) {
    case GenSeedLength.GEN_SEED_12_WORDS:
      return 'GEN_SEED_12_WORDS';
    case GenSeedLength.GEN_SEED_15_WORDS:
      return 'GEN_SEED_15_WORDS';
    case GenSeedLength.GEN_SEED_18_WORDS:
      return 'GEN_SEED_18_WORDS';
    case GenSeedLength.GEN_SEED_21_WORDS:
      return 'GEN_SEED_21_WORDS';
    case GenSeedLength.GEN_SEED_24_WORDS:
      return 'GEN_SEED_24_WORDS';
    default:
      return 'UNKNOWN';
  }
}

export enum StartDaemonResult {
  START_DAEMON_SUCCESS = 0,
  START_DAEMON_ERROR_ALREADY_RUNNING = 1,
  START_DAEMON_ERROR_PERMISSION_DENIED = 2,
  START_DAEMON_ERROR_NOT_FOUND = 3,
  START_DAEMON_ERROR_UNKNOWN = 4,
  UNRECOGNIZED = -1,
}

export function startDaemonResultFromJSON(object: any): StartDaemonResult {
  switch (object) {
    case 0:
    case 'START_DAEMON_SUCCESS':
      return StartDaemonResult.START_DAEMON_SUCCESS;
    case 1:
    case 'START_DAEMON_ERROR_ALREADY_RUNNING':
      return StartDaemonResult.START_DAEMON_ERROR_ALREADY_RUNNING;
    case 2:
    case 'START_DAEMON_ERROR_PERMISSION_DENIED':
      return StartDaemonResult.START_DAEMON_ERROR_PERMISSION_DENIED;
    case 3:
    case 'START_DAEMON_ERROR_NOT_FOUND':
      return StartDaemonResult.START_DAEMON_ERROR_NOT_FOUND;
    case 4:
    case 'START_DAEMON_ERROR_UNKNOWN':
      return StartDaemonResult.START_DAEMON_ERROR_UNKNOWN;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return StartDaemonResult.UNRECOGNIZED;
  }
}

export function startDaemonResultToJSON(object: StartDaemonResult): string {
  switch (object) {
    case StartDaemonResult.START_DAEMON_SUCCESS:
      return 'START_DAEMON_SUCCESS';
    case StartDaemonResult.START_DAEMON_ERROR_ALREADY_RUNNING:
      return 'START_DAEMON_ERROR_ALREADY_RUNNING';
    case StartDaemonResult.START_DAEMON_ERROR_PERMISSION_DENIED:
      return 'START_DAEMON_ERROR_PERMISSION_DENIED';
    case StartDaemonResult.START_DAEMON_ERROR_NOT_FOUND:
      return 'START_DAEMON_ERROR_NOT_FOUND';
    case StartDaemonResult.START_DAEMON_ERROR_UNKNOWN:
      return 'START_DAEMON_ERROR_UNKNOWN';
    default:
      return 'UNKNOWN';
  }
}

export interface CreateWalletRequest {
  bip39: string[];
  passphrase: string;
}

export interface CreateWalletResponse {
  result: CreateWalletResult;
}

export interface DeleteWalletRequest {}

export interface DeleteWalletResponse {
  result: DeleteWalletResult;
}

export interface GenSeedRequest {
  length: GenSeedLength;
}

export interface GenSeedResponse {
  bip39: string[];
}

export interface StartDaemonRequest {
  args: string[];
}

export interface StartDaemonResponse {
  result: StartDaemonResult;
}

function createBaseCreateWalletRequest(): CreateWalletRequest {
  return {bip39: [], passphrase: ''};
}

export const CreateWalletRequest = {
  encode(
    message: CreateWalletRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.bip39) {
      writer.uint32(10).string(v!);
    }
    if (message.passphrase !== '') {
      writer.uint32(18).string(message.passphrase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateWalletRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWalletRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bip39.push(reader.string());
          break;
        case 2:
          message.passphrase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateWalletRequest {
    return {
      bip39: Array.isArray(object?.bip39)
        ? object.bip39.map((e: any) => String(e))
        : [],
      passphrase: isSet(object.passphrase) ? String(object.passphrase) : '',
    };
  },

  toJSON(message: CreateWalletRequest): unknown {
    const obj: any = {};
    if (message.bip39) {
      obj.bip39 = message.bip39.map((e) => e);
    } else {
      obj.bip39 = [];
    }
    message.passphrase !== undefined && (obj.passphrase = message.passphrase);
    return obj;
  },

  fromPartial(object: DeepPartial<CreateWalletRequest>): CreateWalletRequest {
    const message = createBaseCreateWalletRequest();
    message.bip39 = object.bip39?.map((e) => e) || [];
    message.passphrase = object.passphrase ?? '';
    return message;
  },
};

function createBaseCreateWalletResponse(): CreateWalletResponse {
  return {result: 0};
}

export const CreateWalletResponse = {
  encode(
    message: CreateWalletResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CreateWalletResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateWalletResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateWalletResponse {
    return {
      result: isSet(object.result)
        ? createWalletResultFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: CreateWalletResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = createWalletResultToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<CreateWalletResponse>): CreateWalletResponse {
    const message = createBaseCreateWalletResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseDeleteWalletRequest(): DeleteWalletRequest {
  return {};
}

export const DeleteWalletRequest = {
  encode(
    _: DeleteWalletRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteWalletRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteWalletRequest();
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

  fromJSON(_: any): DeleteWalletRequest {
    return {};
  },

  toJSON(_: DeleteWalletRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<DeleteWalletRequest>): DeleteWalletRequest {
    const message = createBaseDeleteWalletRequest();
    return message;
  },
};

function createBaseDeleteWalletResponse(): DeleteWalletResponse {
  return {result: 0};
}

export const DeleteWalletResponse = {
  encode(
    message: DeleteWalletResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): DeleteWalletResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteWalletResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteWalletResponse {
    return {
      result: isSet(object.result)
        ? deleteWalletResultFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: DeleteWalletResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = deleteWalletResultToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<DeleteWalletResponse>): DeleteWalletResponse {
    const message = createBaseDeleteWalletResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseGenSeedRequest(): GenSeedRequest {
  return {length: 0};
}

export const GenSeedRequest = {
  encode(
    message: GenSeedRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.length !== 0) {
      writer.uint32(8).int32(message.length);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenSeedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenSeedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.length = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenSeedRequest {
    return {
      length: isSet(object.length) ? genSeedLengthFromJSON(object.length) : 0,
    };
  },

  toJSON(message: GenSeedRequest): unknown {
    const obj: any = {};
    message.length !== undefined &&
      (obj.length = genSeedLengthToJSON(message.length));
    return obj;
  },

  fromPartial(object: DeepPartial<GenSeedRequest>): GenSeedRequest {
    const message = createBaseGenSeedRequest();
    message.length = object.length ?? 0;
    return message;
  },
};

function createBaseGenSeedResponse(): GenSeedResponse {
  return {bip39: []};
}

export const GenSeedResponse = {
  encode(
    message: GenSeedResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.bip39) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenSeedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenSeedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bip39.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenSeedResponse {
    return {
      bip39: Array.isArray(object?.bip39)
        ? object.bip39.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: GenSeedResponse): unknown {
    const obj: any = {};
    if (message.bip39) {
      obj.bip39 = message.bip39.map((e) => e);
    } else {
      obj.bip39 = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenSeedResponse>): GenSeedResponse {
    const message = createBaseGenSeedResponse();
    message.bip39 = object.bip39?.map((e) => e) || [];
    return message;
  },
};

function createBaseStartDaemonRequest(): StartDaemonRequest {
  return {args: []};
}

export const StartDaemonRequest = {
  encode(
    message: StartDaemonRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.args) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDaemonRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDaemonRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartDaemonRequest {
    return {
      args: Array.isArray(object?.args)
        ? object.args.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: StartDaemonRequest): unknown {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map((e) => e);
    } else {
      obj.args = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<StartDaemonRequest>): StartDaemonRequest {
    const message = createBaseStartDaemonRequest();
    message.args = object.args?.map((e) => e) || [];
    return message;
  },
};

function createBaseStartDaemonResponse(): StartDaemonResponse {
  return {result: 0};
}

export const StartDaemonResponse = {
  encode(
    message: StartDaemonResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartDaemonResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartDaemonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartDaemonResponse {
    return {
      result: isSet(object.result)
        ? startDaemonResultFromJSON(object.result)
        : 0,
    };
  },

  toJSON(message: StartDaemonResponse): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = startDaemonResultToJSON(message.result));
    return obj;
  },

  fromPartial(object: DeepPartial<StartDaemonResponse>): StartDaemonResponse {
    const message = createBaseStartDaemonResponse();
    message.result = object.result ?? 0;
    return message;
  },
};

export const NodeManagerDefinition = {
  name: 'NodeManager',
  fullName: 'manage.NodeManager',
  methods: {
    createWallet: {
      name: 'CreateWallet',
      requestType: CreateWalletRequest,
      requestStream: false,
      responseType: CreateWalletResponse,
      responseStream: false,
      options: {},
    },
    genSeed: {
      name: 'GenSeed',
      requestType: GenSeedRequest,
      requestStream: false,
      responseType: GenSeedResponse,
      responseStream: false,
      options: {},
    },
    deleteWallet: {
      name: 'DeleteWallet',
      requestType: DeleteWalletRequest,
      requestStream: false,
      responseType: DeleteWalletResponse,
      responseStream: false,
      options: {},
    },
    startDaemon: {
      name: 'StartDaemon',
      requestType: StartDaemonRequest,
      requestStream: false,
      responseType: StartDaemonResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? {[K in keyof T]?: DeepPartial<T[K]>}
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
