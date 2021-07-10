import * as fs from "fs/promises";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import * as path from "path";

import type { ProtoGrpcType as LndMainProto } from "../lnd/rpc";
import type { ProtoGrpcType as LndWalletUnlockerProto } from "../lnd/walletunlocker";
import type { ProtoGrpcType as LndStateServiceProto } from "../lnd/stateservice";
import { WalletState } from '../lnd/lnrpc/WalletState.js';
import type { GetStateResponse__Output } from '../lnd/lnrpc/GetStateResponse';
import type { AddInvoiceResponse__Output } from '../lnd/lnrpc/AddInvoiceResponse';
import type { PayReqString__Output } from '../lnd/lnrpc/PayReqString';
import type { PolicyUpdateRequest } from '../lnd/lnrpc/PolicyUpdateRequest';
import type { OpenChannelRequest } from '../lnd/lnrpc/OpenChannelRequest';
import type { SendCoinsRequest } from '../lnd/lnrpc/SendCoinsRequest';
import type { EstimateFeeResponse__Output } from '../lnd/lnrpc/EstimateFeeResponse';

import {LndError} from '../models/errors.js';

type useLndApis = LndMainProto & LndWalletUnlockerProto & LndStateServiceProto;

const loaderOptions = {
  defaults: true,
  longs: String,
};

const lndPackageDefinition = protoLoader.loadSync([
  "./resources/rpc.proto",
  "./resources/walletunlocker.proto",
  "./resources/stateservice.proto",
], loaderOptions);


const lnrpcProto = grpc.loadPackageDefinition(
  lndPackageDefinition
) as unknown as useLndApis;

const lnrpc = lnrpcProto.lnrpc;
const WalletUnlocker = lnrpc.WalletUnlocker;
const StateService = lnrpc.State;

type RpcClientInfo = {
  Lightning?: InstanceType<useLndApis["lnrpc"]["Lightning"]>
  WalletUnlocker: InstanceType<useLndApis["lnrpc"]["WalletUnlocker"]>
  State: InstanceType<useLndApis["lnrpc"]["State"]>,
  state: WalletState
}

type RpcClientWithLightningForSure = {
  Lightning: InstanceType<useLndApis["lnrpc"]["Lightning"]>
  WalletUnlocker: InstanceType<useLndApis["lnrpc"]["WalletUnlocker"]>
  State: InstanceType<useLndApis["lnrpc"]["State"]>,
  state: WalletState
}

const LND_HOST = process.env.LND_HOST || '127.0.0.1';
const LND_DIR = process.env.LND_DIR || '/lnd';
const LND_PORT = process.env.LND_PORT || 10009;
const LND_NETWORK = process.env.LND_NETWORK || 'mainnet'; 

const DEFAULT_RECOVERY_WINDOW = 250;

// LND changed the macaroon path to ~/.lnd/data/chain/{chain}/{network}/admin.macaroon. We are currently only
// supporting bitcoind and have that hard coded. However, we are leaving the ability to switch between testnet and
// mainnet. This can be done with the /reset route. LND_NETWORK will be defaulted in /usr/local/casa/applications/.env.
// LND_NETWORK will be overwritten in the settings file.
let TLS_FILE = path.join(LND_DIR, 'tls.cert');
let MACAROON_FILE = path.join(LND_DIR, 'data', 'chain', 'bitcoin', LND_NETWORK + 'admin.macaroon');

export async function promiseify(rpcObj: unknown, rpcFn: Function, payload: unknown, description: string): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      rpcFn.call(rpcObj, payload, (error: unknown, grpcResponse: unknown) => {
        if (error) {
          reject(new LndError(`Unable to ${description}`, error));
        } else {
          resolve(grpcResponse);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
export async function initializeRPCClient(): Promise<RpcClientInfo> {
  // Create credentials
  const lndCert = await fs.readFile(TLS_FILE);
  const sslCreds = grpc.credentials.createSsl(lndCert);
  const stateService = new StateService(`${LND_HOST}:${LND_PORT}`, sslCreds);
  const walletUnlocker = new WalletUnlocker(`${LND_HOST}:${LND_PORT}`, sslCreds);
  const walletState: GetStateResponse__Output = await promiseify(stateService, stateService.getState, {}, "get wallet state");

  // WAIING_TO_START will be used in the future
  // https://github.com/Lightningnetwork/lnd/blob/bb5c3f3b51c7c58296d120d5afe4ed0640d5751e/docs/leader_election.md
  if(walletState.state == WalletState.NON_EXISTING || walletState.state == WalletState.LOCKED || walletState.state == WalletState.WAITING_TO_START) {
    return {
      WalletUnlocker: walletUnlocker,
      State: stateService,
      state: walletState.state
    }
  } else if(walletState.state == WalletState.RPC_ACTIVE) {
    // Read macaroons, they should exist in this state
    const macaroon = await fs.readFile(MACAROON_FILE);
  
    // build credentials from macaroons
    const metadata = new grpc.Metadata();
    metadata.add('macaroon', macaroon.toString('hex'));
    const macaroonCreds = grpc.credentials.createFromMetadataGenerator((_args, callback) => {
      callback(null, metadata);
    });
    const fullCredentials = grpc.credentials.combineChannelCredentials(sslCreds, macaroonCreds);
    
    return {
      WalletUnlocker: walletUnlocker,
      State: stateService,
      Lightning: new lnrpc.Lightning(`${LND_HOST}:${LND_PORT}`, fullCredentials),
      state: walletState.state
    }
  } else {
    throw new LndError("Unexpected LND state!", undefined, 500);
  }
}

export async function expectWalletToExist(): Promise<RpcClientWithLightningForSure> {
  const client = await initializeRPCClient();
  if(!client.Lightning) throw new LndError("Error: Wallet not ready");
  return client as RpcClientWithLightningForSure;
}

// an amount, an options memo, and can only be paid to node that created it.
export async function addInvoice(amount: number | string, memo: string): Promise<{
  rHash: Buffer,
  paymentRequest: string,
}> {
  const rpcPayload = {
    value: amount,
    memo,
    expiry: 3600
  };

  const conn = await expectWalletToExist();

  const grpcResponse = await promiseify(conn.Lightning, conn.Lightning.addInvoice, rpcPayload, 'create new invoice') as AddInvoiceResponse__Output;

  if (grpcResponse && grpcResponse.paymentRequest) {
    return {
      rHash: grpcResponse.rHash,
      paymentRequest: grpcResponse.paymentRequest,
    };
  } else {
    throw new LndError('Unable to parse invoice from lnd');
  }
}

export async function closeChannel(fundingTxId: string, index: number, force: boolean): Promise<void> {
  const rpcPayload = {
    channelPoint: {
      fundingTxidStr: fundingTxId,
      outputIndex: index
    },
    force
  };

  const { Lightning } = await expectWalletToExist();
  return await new Promise((resolve, reject) => {
    try {
      const call = Lightning.CloseChannel(rpcPayload);

      call.on('data', chan => {
        if (chan.update === 'closePending') {
          resolve();
        }
      });

      call.on('error', error => {
        reject(new LndError('Unable to close channel', error));
      });
    } catch (error_1) {
      reject(error_1);
    }
  });
}

// Connects this lnd node to a peer.
export async function connectToPeer(pubKey: string, ip: string, port: number | string) {
  const rpcPayload = {
    addr: {
      pubkey: pubKey,
      host: `${ip}:${port}`,
    }
  };

  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.ConnectPeer, rpcPayload, 'connect to peer');
}

export async function decodePaymentRequest(paymentRequest: string) {
  const rpcPayload: PayReqString__Output = {
    payReq: paymentRequest
  };

  const { Lightning } = await expectWalletToExist();
  const invoice = await promiseify(Lightning, Lightning.decodePayReq, rpcPayload, 'decode payment request');
  // add on payment request for extra details
  invoice.paymentRequest = paymentRequest;
  return invoice;
}

export async function estimateFee(address: string, amt: string | number, confTarget: number): Promise<EstimateFeeResponse__Output> {
  const addrToAmount: Record<string, unknown> = {};
  addrToAmount[address] = amt;

  const rpcPayload = {
    AddrToAmount: addrToAmount,
    targetConf: confTarget,
  };

  const conn = await expectWalletToExist();

  return await promiseify(conn.Lightning, conn.Lightning.estimateFee, rpcPayload, 'estimate fee request');
}

export async function generateAddress() {
  const rpcPayload = {
    type: 0
  };

  const conn = await expectWalletToExist();

  return await promiseify(conn.Lightning, conn.Lightning.NewAddress, rpcPayload, 'generate address');
}

export async function generateSeed() {
  const { WalletUnlocker, state } = await initializeRPCClient();
  if (state !== WalletState.NON_EXISTING) {
    throw new LndError('Wallet already exists');
  }
  return await promiseify(WalletUnlocker, WalletUnlocker.GenSeed, {}, 'generate seed');
}

export async function getChannelBalance() {
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.ChannelBalance, {}, 'get channel balance');
}

export async function getFeeReport() {
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.FeeReport, {}, 'get fee report');
}

export async function getForwardingEvents(startTime: number | string, endTime: number | string, indexOffset: number) {
  const rpcPayload = {
    startTime,
    endTime,
    indexOffset,
  };

  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.ForwardingHistory, rpcPayload, 'get forwarding events');
}

export async function getInfo() {
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.GetInfo, {}, 'get lnd information');
}

export async function getNodeInfo(pubkey: string, includeChannels: boolean) {
  const rpcPayload = {
    pubKey: pubkey,
    includeChannels
  };
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.GetNodeInfo, rpcPayload, 'get node information');
}

// Returns a list of lnd's currently open channels. Channels are considered open by this node and it's directly
// connected peer after three confirmation. After six confirmations, the channel is broadcasted by this node and it's
// directly connected peer to the broader Lightning network.
export async function getOpenChannels() {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = await promiseify(Lightning, Lightning.ListChannels, {}, 'list channels');
  return grpcResponse.channels;
}

export async function getClosedChannels() {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = await promiseify(Lightning, Lightning.ClosedChannels, {}, 'closed channels');
  return grpcResponse.channels;
}

// Returns a list of all outgoing payments.
export async function getPayments() {
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.ListPayments, {}, 'get payments');
}

// Returns a list of all lnd's currently connected and active peers.
export async function getPeers() {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = await promiseify(Lightning, Lightning.ListPeers, {}, 'get peer information');
  if (grpcResponse && grpcResponse.peers) {
    return grpcResponse.peers;
  } else {
    throw new LndError('Unable to parse peer information');
  }
}

// Returns a list of lnd's currently pending channels. Pending channels include, channels that are in the process of
// being opened, but have not reached three confirmations. Channels that are pending closed, but have not reached
// one confirmation. Forced close channels that require potentially hundreds of confirmations.
export async function getPendingChannels() {
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.PendingChannels, {}, 'list pending channels');
}

export async function getWalletBalance() {
  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.WalletBalance, {}, 'get wallet balance');
}

export async function initWallet(options: {
  mnemonic: string[],
  password: string
}) {
  const passwordBuff = Buffer.from(options.password, 'utf8');

  const rpcPayload = {
    walletPassword: passwordBuff,
    cipherSeedMnemonic: options.mnemonic,
    recoveryWindow: DEFAULT_RECOVERY_WINDOW
  };

  const { WalletUnlocker, state } = await initializeRPCClient();
  if (state !== WalletState.NON_EXISTING) {
    throw new LndError('Wallet already exists');
  }
  await promiseify(WalletUnlocker, WalletUnlocker.InitWallet, rpcPayload, 'initialize wallet');
  return options.mnemonic;
}

// Returns a list of all invoices.
export async function getInvoices() {
  const rpcPayload = {
    reversed: true, // Returns most recent
    num_max_invoices: 100,
  };

  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.ListInvoices, rpcPayload, 'list invoices');
}

// Returns a list of all on chain transactions.
export async function getOnChainTransactions() {
  const { Lightning } = await expectWalletToExist();
  const grpcResponse = await promiseify(Lightning, Lightning.GetTransactions, {}, 'list on-chain transactions');
  return grpcResponse.transactions;
}

export async function listUnspent() {
  const rpcPayload = {
    min_confs: 1,
    max_confs: 10000000, // Use arbitrarily high maximum confirmation limit.
  };

  const { Lightning } = await expectWalletToExist();

  return await promiseify(Lightning, Lightning.listUnspent, rpcPayload, 'estimate fee request');
}

export async function openChannel(pubKey: string, amt: string | number, satPerByte: string | number) {
  const rpcPayload: OpenChannelRequest = {
    nodePubkeyString: pubKey,
    localFundingAmount: amt,
  };

  if (satPerByte) {
    rpcPayload.satPerByte = satPerByte;
  } else {
    rpcPayload.targetConf = 6;
  }

  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.OpenChannelSync, rpcPayload, 'open channel');
}

export async function sendCoins(addr: string, amt: string | number | undefined, satPerByte: string, sendAll: boolean) {
  const rpcPayload: SendCoinsRequest = {
    addr,
    amount: amt,
    sendAll,
  };

  if (satPerByte) {
    rpcPayload.satPerByte = satPerByte;
  } else {
    rpcPayload.targetConf = 6;
  }

  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.SendCoins, rpcPayload, 'send coins');
}

export async function sendPaymentSync(paymentRequest: string, amt: string | number) {
  const rpcPayload = {
    paymentRequest,
    amt,
  };

  const { Lightning } = await expectWalletToExist();
  const response = await promiseify(Lightning, Lightning.SendPaymentSync, rpcPayload, 'send Lightning payment');
  // sometimes the error comes in on the response...
  if (response.paymentError) {
    throw new LndError(`Unable to send Lightning payment: ${response.paymentError}`);
  }
  return response;
}

export async function unlockWallet(password: string) {
  const passwordBuff = Buffer.from(password, 'utf8');

  const rpcPayload = {
    wallet_password: passwordBuff
  };

  const { WalletUnlocker, state } = await initializeRPCClient();
  if(state == WalletState.UNLOCKED || state == WalletState.RPC_ACTIVE) return;
  return await promiseify(WalletUnlocker, WalletUnlocker.UnlockWallet, rpcPayload, 'unlock wallet');
}

export async function updateChannelPolicy(global: boolean, fundingTxid: string, outputIndex: number, baseFeeMsat: string, feeRate: number, timeLockDelta: number) {
  const rpcPayload: PolicyUpdateRequest = {
    baseFeeMsat,
    feeRate,
    timeLockDelta,
    minHtlcMsatSpecified: false
  };

  if (global) {
    rpcPayload.global = global;
  } else {
    rpcPayload.chanPoint = {
      fundingTxidStr: fundingTxid,
      outputIndex,
    };
  }

  const { Lightning } = await expectWalletToExist();
  return await promiseify(Lightning, Lightning.UpdateChannelPolicy, rpcPayload,
    'update channel policy coins');
}
