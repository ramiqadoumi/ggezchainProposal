/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "ggezchain.mobile";

export interface MsgInsertMobileNumber {
  creator: string;
  tradeType: string;
  coin: string;
  price: string;
  quantity: string;
  receiverAddress: string;
  tradeData: string;
}

export interface MsgInsertMobileNumberResponse {
  mobileIndex: string;
  status: string;
}

function createBaseMsgInsertMobileNumber(): MsgInsertMobileNumber {
  return { creator: "", tradeType: "", coin: "", price: "", quantity: "", receiverAddress: "", tradeData: "" };
}

export const MsgInsertMobileNumber = {
  encode(message: MsgInsertMobileNumber, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tradeType !== "") {
      writer.uint32(18).string(message.tradeType);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    if (message.price !== "") {
      writer.uint32(34).string(message.price);
    }
    if (message.quantity !== "") {
      writer.uint32(42).string(message.quantity);
    }
    if (message.receiverAddress !== "") {
      writer.uint32(50).string(message.receiverAddress);
    }
    if (message.tradeData !== "") {
      writer.uint32(58).string(message.tradeData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInsertMobileNumber {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInsertMobileNumber();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tradeType = reader.string();
          break;
        case 3:
          message.coin = reader.string();
          break;
        case 4:
          message.price = reader.string();
          break;
        case 5:
          message.quantity = reader.string();
          break;
        case 6:
          message.receiverAddress = reader.string();
          break;
        case 7:
          message.tradeData = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertMobileNumber {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tradeType: isSet(object.tradeType) ? String(object.tradeType) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      price: isSet(object.price) ? String(object.price) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      receiverAddress: isSet(object.receiverAddress) ? String(object.receiverAddress) : "",
      tradeData: isSet(object.tradeData) ? String(object.tradeData) : "",
    };
  },

  toJSON(message: MsgInsertMobileNumber): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tradeType !== undefined && (obj.tradeType = message.tradeType);
    message.coin !== undefined && (obj.coin = message.coin);
    message.price !== undefined && (obj.price = message.price);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.receiverAddress !== undefined && (obj.receiverAddress = message.receiverAddress);
    message.tradeData !== undefined && (obj.tradeData = message.tradeData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInsertMobileNumber>, I>>(object: I): MsgInsertMobileNumber {
    const message = createBaseMsgInsertMobileNumber();
    message.creator = object.creator ?? "";
    message.tradeType = object.tradeType ?? "";
    message.coin = object.coin ?? "";
    message.price = object.price ?? "";
    message.quantity = object.quantity ?? "";
    message.receiverAddress = object.receiverAddress ?? "";
    message.tradeData = object.tradeData ?? "";
    return message;
  },
};

function createBaseMsgInsertMobileNumberResponse(): MsgInsertMobileNumberResponse {
  return { mobileIndex: "", status: "" };
}

export const MsgInsertMobileNumberResponse = {
  encode(message: MsgInsertMobileNumberResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mobileIndex !== "") {
      writer.uint32(10).string(message.mobileIndex);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInsertMobileNumberResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInsertMobileNumberResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mobileIndex = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInsertMobileNumberResponse {
    return {
      mobileIndex: isSet(object.mobileIndex) ? String(object.mobileIndex) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgInsertMobileNumberResponse): unknown {
    const obj: any = {};
    message.mobileIndex !== undefined && (obj.mobileIndex = message.mobileIndex);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInsertMobileNumberResponse>, I>>(
    object: I,
  ): MsgInsertMobileNumberResponse {
    const message = createBaseMsgInsertMobileNumberResponse();
    message.mobileIndex = object.mobileIndex ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  InsertMobileNumber(request: MsgInsertMobileNumber): Promise<MsgInsertMobileNumberResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.InsertMobileNumber = this.InsertMobileNumber.bind(this);
  }
  InsertMobileNumber(request: MsgInsertMobileNumber): Promise<MsgInsertMobileNumberResponse> {
    const data = MsgInsertMobileNumber.encode(request).finish();
    const promise = this.rpc.request("ggezchain.mobile.Msg", "InsertMobileNumber", data);
    return promise.then((data) => MsgInsertMobileNumberResponse.decode(new _m0.Reader(data)));
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
