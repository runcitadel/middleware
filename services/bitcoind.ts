import {Client as RpcClient} from 'bitcoin-simple-rpc';

const BitcoindError = require('models/errors.js').BitcoindError;

const BITCOIND_RPC_PORT: number = parseInt(process.env.RPC_PORT || "8332") || 8332; // eslint-disable-line no-magic-numbers, max-len
const BITCOIND_HOST = process.env.BITCOIN_HOST || '127.0.0.1';
const BITCOIND_RPC_USER = process.env.RPC_USER || "";
const BITCOIND_RPC_PASSWORD = process.env.RPC_PASSWORD || "";

const rpcClient = new RpcClient({
  auth: {
    username: BITCOIND_RPC_USER, 
    password: BITCOIND_RPC_PASSWORD,
  },
  baseURL: `${BITCOIND_HOST}:${BITCOIND_RPC_PORT}/`,
});

export async function getBestBlockHash() {
  return await rpcClient.getBestBlockHash();
}

export async function getBlockHash(height: number) {
  return await rpcClient.getBlockHash(height);
}

export async function getBlock(hash: string) {
  return rpcClient.getBlock(hash, 2);
}

export async function getTransaction(txid: string) {
  return await rpcClient.getRawTransaction(txid, true);
}

export async function getBlockChainInfo() {
  return await rpcClient.getBlockchainInfo();
}

export async function getPeerInfo() {
  return await rpcClient.getPeerInfo();
}

export async function getBlockCount() {
  return await rpcClient.getBlockCount();
}

export async function getMempoolInfo() {
  return await rpcClient.getMempoolInfo();
}

export async function getNetworkInfo() {
  return await rpcClient.getNetworkInfo();
}

export async function getMiningInfo() {
  return await rpcClient.getMiningInfo();
}

