/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { MobileIndex } from "./mobile_index";
import { Params } from "./params";
import { StoredTrade } from "./stored_trade";

export const protobufPackage = "ggezchain.mobile";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMobileIndexRequest {
}

export interface QueryGetMobileIndexResponse {
  MobileIndex: MobileIndex | undefined;
}

export interface QueryGetStoredTradeRequest {
  tradeIndex: string;
}

export interface QueryGetStoredTradeResponse {
  storedTrade: StoredTrade | undefined;
}

export interface QueryAllStoredTradeRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredTradeResponse {
  storedTrade: StoredTrade[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMobileIndexRequest(): QueryGetMobileIndexRequest {
  return {};
}

export const QueryGetMobileIndexRequest = {
  encode(_: QueryGetMobileIndexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMobileIndexRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMobileIndexRequest();
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

  fromJSON(_: any): QueryGetMobileIndexRequest {
    return {};
  },

  toJSON(_: QueryGetMobileIndexRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMobileIndexRequest>, I>>(_: I): QueryGetMobileIndexRequest {
    const message = createBaseQueryGetMobileIndexRequest();
    return message;
  },
};

function createBaseQueryGetMobileIndexResponse(): QueryGetMobileIndexResponse {
  return { MobileIndex: undefined };
}

export const QueryGetMobileIndexResponse = {
  encode(message: QueryGetMobileIndexResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.MobileIndex !== undefined) {
      MobileIndex.encode(message.MobileIndex, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMobileIndexResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMobileIndexResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.MobileIndex = MobileIndex.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMobileIndexResponse {
    return { MobileIndex: isSet(object.MobileIndex) ? MobileIndex.fromJSON(object.MobileIndex) : undefined };
  },

  toJSON(message: QueryGetMobileIndexResponse): unknown {
    const obj: any = {};
    message.MobileIndex !== undefined
      && (obj.MobileIndex = message.MobileIndex ? MobileIndex.toJSON(message.MobileIndex) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMobileIndexResponse>, I>>(object: I): QueryGetMobileIndexResponse {
    const message = createBaseQueryGetMobileIndexResponse();
    message.MobileIndex = (object.MobileIndex !== undefined && object.MobileIndex !== null)
      ? MobileIndex.fromPartial(object.MobileIndex)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredTradeRequest(): QueryGetStoredTradeRequest {
  return { tradeIndex: "" };
}

export const QueryGetStoredTradeRequest = {
  encode(message: QueryGetStoredTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeIndex !== "") {
      writer.uint32(10).string(message.tradeIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredTradeRequest {
    return { tradeIndex: isSet(object.tradeIndex) ? String(object.tradeIndex) : "" };
  },

  toJSON(message: QueryGetStoredTradeRequest): unknown {
    const obj: any = {};
    message.tradeIndex !== undefined && (obj.tradeIndex = message.tradeIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredTradeRequest>, I>>(object: I): QueryGetStoredTradeRequest {
    const message = createBaseQueryGetStoredTradeRequest();
    message.tradeIndex = object.tradeIndex ?? "";
    return message;
  },
};

function createBaseQueryGetStoredTradeResponse(): QueryGetStoredTradeResponse {
  return { storedTrade: undefined };
}

export const QueryGetStoredTradeResponse = {
  encode(message: QueryGetStoredTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedTrade !== undefined) {
      StoredTrade.encode(message.storedTrade, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTrade = StoredTrade.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredTradeResponse {
    return { storedTrade: isSet(object.storedTrade) ? StoredTrade.fromJSON(object.storedTrade) : undefined };
  },

  toJSON(message: QueryGetStoredTradeResponse): unknown {
    const obj: any = {};
    message.storedTrade !== undefined
      && (obj.storedTrade = message.storedTrade ? StoredTrade.toJSON(message.storedTrade) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredTradeResponse>, I>>(object: I): QueryGetStoredTradeResponse {
    const message = createBaseQueryGetStoredTradeResponse();
    message.storedTrade = (object.storedTrade !== undefined && object.storedTrade !== null)
      ? StoredTrade.fromPartial(object.storedTrade)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredTradeRequest(): QueryAllStoredTradeRequest {
  return { pagination: undefined };
}

export const QueryAllStoredTradeRequest = {
  encode(message: QueryAllStoredTradeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredTradeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTradeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredTradeRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredTradeRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredTradeRequest>, I>>(object: I): QueryAllStoredTradeRequest {
    const message = createBaseQueryAllStoredTradeRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredTradeResponse(): QueryAllStoredTradeResponse {
  return { storedTrade: [], pagination: undefined };
}

export const QueryAllStoredTradeResponse = {
  encode(message: QueryAllStoredTradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedTrade) {
      StoredTrade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredTradeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredTradeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedTrade.push(StoredTrade.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredTradeResponse {
    return {
      storedTrade: Array.isArray(object?.storedTrade)
        ? object.storedTrade.map((e: any) => StoredTrade.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredTradeResponse): unknown {
    const obj: any = {};
    if (message.storedTrade) {
      obj.storedTrade = message.storedTrade.map((e) => e ? StoredTrade.toJSON(e) : undefined);
    } else {
      obj.storedTrade = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredTradeResponse>, I>>(object: I): QueryAllStoredTradeResponse {
    const message = createBaseQueryAllStoredTradeResponse();
    message.storedTrade = object.storedTrade?.map((e) => StoredTrade.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a MobileIndex by index. */
  MobileIndex(request: QueryGetMobileIndexRequest): Promise<QueryGetMobileIndexResponse>;
  /** Queries a list of StoredTrade items. */
  StoredTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse>;
  StoredTradeAll(request: QueryAllStoredTradeRequest): Promise<QueryAllStoredTradeResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.MobileIndex = this.MobileIndex.bind(this);
    this.StoredTrade = this.StoredTrade.bind(this);
    this.StoredTradeAll = this.StoredTradeAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.mobile.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  MobileIndex(request: QueryGetMobileIndexRequest): Promise<QueryGetMobileIndexResponse> {
    const data = QueryGetMobileIndexRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.mobile.Query", "MobileIndex", data);
    return promise.then((data) => QueryGetMobileIndexResponse.decode(new _m0.Reader(data)));
  }

  StoredTrade(request: QueryGetStoredTradeRequest): Promise<QueryGetStoredTradeResponse> {
    const data = QueryGetStoredTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.mobile.Query", "StoredTrade", data);
    return promise.then((data) => QueryGetStoredTradeResponse.decode(new _m0.Reader(data)));
  }

  StoredTradeAll(request: QueryAllStoredTradeRequest): Promise<QueryAllStoredTradeResponse> {
    const data = QueryAllStoredTradeRequest.encode(request).finish();
    const promise = this.rpc.request("ggezchain.mobile.Query", "StoredTradeAll", data);
    return promise.then((data) => QueryAllStoredTradeResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
