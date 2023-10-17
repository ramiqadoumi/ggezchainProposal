// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreateTrade } from "./types/ggezchain/trade/tx";
import { MsgProcessTrade } from "./types/ggezchain/trade/tx";

import { Params as typeParams} from "./types"
import { StoredTempTrade as typeStoredTempTrade} from "./types"
import { StoredTrade as typeStoredTrade} from "./types"
import { TradeIndex as typeTradeIndex} from "./types"

export { MsgCreateTrade, MsgProcessTrade };

type sendMsgCreateTradeParams = {
  value: MsgCreateTrade,
  fee?: StdFee,
  memo?: string
};

type sendMsgProcessTradeParams = {
  value: MsgProcessTrade,
  fee?: StdFee,
  memo?: string
};


type msgCreateTradeParams = {
  value: MsgCreateTrade,
};

type msgProcessTradeParams = {
  value: MsgProcessTrade,
};


export const registry = new Registry(msgTypes);

type Field = {
	name: string;
	type: unknown;
}
function getStructure(template) {
	const structure: {fields: Field[]} = { fields: [] }
	for (let [key, value] of Object.entries(template)) {
		let field = { name: key, type: typeof value }
		structure.fields.push(field)
	}
	return structure
}
const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreateTrade({ value, fee, memo }: sendMsgCreateTradeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreateTrade: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreateTrade({ value: MsgCreateTrade.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreateTrade: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgProcessTrade({ value, fee, memo }: sendMsgProcessTradeParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgProcessTrade: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgProcessTrade({ value: MsgProcessTrade.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgProcessTrade: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreateTrade({ value }: msgCreateTradeParams): EncodeObject {
			try {
				return { typeUrl: "/ggezchain.trade.MsgCreateTrade", value: MsgCreateTrade.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreateTrade: Could not create message: ' + e.message)
			}
		},
		
		msgProcessTrade({ value }: msgProcessTradeParams): EncodeObject {
			try {
				return { typeUrl: "/ggezchain.trade.MsgProcessTrade", value: MsgProcessTrade.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgProcessTrade: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	public structure: Record<string,unknown>;
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		this.structure =  {
						Params: getStructure(typeParams.fromPartial({})),
						StoredTempTrade: getStructure(typeStoredTempTrade.fromPartial({})),
						StoredTrade: getStructure(typeStoredTrade.fromPartial({})),
						TradeIndex: getStructure(typeTradeIndex.fromPartial({})),
						
		};
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			GgezchainTrade: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;