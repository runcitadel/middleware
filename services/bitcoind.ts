import { Client as RpcClient } from "bitcoin-simple-rpc";
import type { Block, FetchedRawTransaction } from "bitcoin-simple-rpc";

const BITCOIND_RPC_PORT: number =
  parseInt(process.env.RPC_PORT || "8332") || 8332; // eslint-disable-line no-magic-numbers, max-len
const BITCOIND_HOST = process.env.BITCOIN_HOST || "127.0.0.1";
const BITCOIND_RPC_USER = process.env.RPC_USER || "";
const BITCOIND_RPC_PASSWORD = process.env.RPC_PASSWORD || "";

const rpcClient = new RpcClient({
  auth: {
    username: BITCOIND_RPC_USER,
    password: BITCOIND_RPC_PASSWORD,
  },
  baseURL: `${BITCOIND_HOST}:${BITCOIND_RPC_PORT}/`,
});

export async function getBlock(hash: string): Promise<Block> {
  return (await rpcClient.getBlock(hash, 2)) as Block;
}
export async function getTransaction(
  txid: string
): Promise<FetchedRawTransaction> {
  return (await rpcClient.getRawTransaction(
    txid,
    true
  )) as FetchedRawTransaction;
}

export const getBestBlockHash = rpcClient.getBestBlockHash;
export const getBlockHash = rpcClient.getBlockHash;
export const getBlockChainInfo = rpcClient.getBlockchainInfo;
export const getPeerInfo = rpcClient.getPeerInfo;
export const getBlockCount = rpcClient.getBlockCount;
export const getMempoolInfo = rpcClient.getMempoolInfo;
export const getNetworkInfo = rpcClient.getNetworkInfo;
export const getMiningInfo = rpcClient.getMiningInfo;
