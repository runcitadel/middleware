import getClient from "../services/bitcoin.js";
import type {
  ChainInfo,
  MempoolInfo,
  MiningInfo,
  NetworkInfo,
  Transaction,
  TxIn,
} from "../services/bitcoin/abstract";
import { BitcoindError } from "@runcitadel/utils";

const bitcoinClient = getClient();

export async function getBlockCount(): Promise<number> {
  return await bitcoinClient.getBlockCount();
}

export async function getConnectionsCount(): Promise<{
  total: number;
  inbound: number;
  outbound: number;
}> {
  const peerInfo = await bitcoinClient.getPeerInfo();

  let outBoundConnections = 0;
  let inBoundConnections = 0;

  peerInfo.forEach(function (peer) {
    if (peer.inbound === false) {
      outBoundConnections++;

      return;
    }
    inBoundConnections++;
  });

  const connections = {
    total: inBoundConnections + outBoundConnections,
    inbound: inBoundConnections,
    outbound: outBoundConnections,
  };

  return connections;
}

export async function getStatus(): Promise<{ operational: boolean; }> {
  try {
    await bitcoinClient.getPeerInfo();

    return { operational: true };
  } catch (error) {
    if (error instanceof BitcoindError) {
      return { operational: false };
    }

    throw error;
  }
}

// Return the max synced header for all connected peers or -1 if no data is available.
export async function getMaxSyncHeader(): Promise<number> {
  const peerInfo = await bitcoinClient.getPeerInfo();

  if (peerInfo.length === 0) {
    return -1;
  }

  const maxPeer = peerInfo.reduce(function (prev, current) {
    return prev.synced_headers > current.synced_headers ? prev : current;
  });

  return maxPeer.synced_headers;
}

export async function getMempoolInfo(): Promise<MempoolInfo> {
  return await bitcoinClient.getMempoolInfo();
}

export async function getLocalSyncInfo(): Promise<{
  chain: string;
  percent: number;
  currentBlock: number;
  headerCount: number;
}> {
  const info = await bitcoinClient.getBlockchainInfo();

  const blockChainInfo = info;
  const chain = blockChainInfo.chain;
  const blockCount = blockChainInfo.blocks;
  const headerCount = blockChainInfo.headers;
  const percent = blockChainInfo.verificationprogress;

  return {
    chain,
    percent,
    currentBlock: blockCount,
    headerCount,
  };
}

export async function getSyncStatus(): Promise<{
  chain: string;
  percent: number;
  currentBlock: number;
  headerCount: number;
}> {
  const maxPeerHeader = await getMaxSyncHeader();
  const localSyncInfo = await getLocalSyncInfo();

  if (maxPeerHeader > localSyncInfo.headerCount) {
    localSyncInfo.headerCount = maxPeerHeader;
  }

  return localSyncInfo;
}

export async function getVersion(): Promise<string> {
  return await bitcoinClient.getVersion();
}

export async function getTransaction(txid: string): Promise<{
  txid: string;
  timestamp: number;
  confirmations: number;
  blockhash: string;
  size: number;
  input: string;
  utxo: unknown;
  rawtx: string;
}> {
  const transactionObj = await bitcoinClient.getRawTransactionVerbose(txid);
  const vintxid: string = Array.isArray(transactionObj.vin)
    ? transactionObj.vin[0].txid
    : (<TxIn>(<unknown>transactionObj.vin)).txid;
  const vouttx: unknown = Array.isArray(transactionObj.vout)
    ? transactionObj.vout[0]
    : transactionObj.vout;
  return {
    txid: txid,
    timestamp: transactionObj.time,
    confirmations: transactionObj.confirmations,
    blockhash: transactionObj.blockhash,
    size: transactionObj.size,
    input: vintxid,
    utxo: vouttx,
    rawtx: transactionObj.hex,
  };
}

export async function getNetworkInfo(): Promise<NetworkInfo> {
  return await bitcoinClient.getNetworkInfo();
}

export async function getBlock(hash: string): Promise<{
  block: string;
  confirmations: number;
  size: number;
  height: number;
  blocktime: number;
  prevblock: string;
  nextblock: string | undefined;
  transactions: string | Transaction[];
}> {
  const blockObj = await bitcoinClient.getBlockDetails(hash);
  return {
    block: hash,
    confirmations: blockObj.confirmations,
    size: blockObj.size,
    height: blockObj.height,
    blocktime: blockObj.time,
    prevblock: blockObj.previousblockhash,
    nextblock: blockObj.nextblockchash,
    transactions: blockObj.tx,
  };
}

export async function getBlocks(
  fromHeight: number,
  toHeight: number
): Promise<
  | {
      hash: string;
      height: number;
      numTransactions: number;
      confirmations: number;
      time: number;
      size: number;
    }[]
  | BitcoindError
> {
  let startingBlockHashRaw;

  try {
    startingBlockHashRaw = await bitcoinClient.getBlockHash(toHeight);
  } catch (error) {
    if (error instanceof BitcoindError) {
      return error;
    }
    throw error;
  }

  let currentHash = startingBlockHashRaw;

  const blocks = [];

  //loop from 'to height' till 'from Height'
  for (
    let currentHeight = toHeight;
    currentHeight >= fromHeight;
    currentHeight--
  ) {
    const blockRaw = await bitcoinClient.getBlockDetails(currentHash);
    const block = blockRaw;
    if (typeof block === "string")
      throw new BitcoindError("Received unexpected data from Bitcoin Core");

    const formattedBlock = {
      hash: block.hash,
      height: block.height,
      numTransactions: block.tx.length,
      confirmations: block.confirmations,
      time: block.time,
      size: block.size,
    };

    blocks.push(formattedBlock);

    currentHash = block.previousblockhash;
    //terminate loop if we reach the genesis block
    if (!currentHash) {
      break;
    }
  }

  return blocks;
}

export async function getBlockHash(height: number): Promise<string> {
  const getBlockHashObj = await bitcoinClient.getBlockHash(height);

  return getBlockHashObj;
}

export async function nodeStatusDump(): Promise<{
  blockchain_info: ChainInfo;
  network_info: NetworkInfo;
  mempool: MempoolInfo;
  mining_info: MiningInfo;
}> {
  const blockchainInfo = await bitcoinClient.getBlockchainInfo();
  const networkInfo = await bitcoinClient.getNetworkInfo();
  const mempoolInfo = await bitcoinClient.getMempoolInfo();
  const miningInfo = await bitcoinClient.getMiningInfo();

  return {
    blockchain_info: blockchainInfo,
    network_info: networkInfo,
    mempool: mempoolInfo,
    mining_info: miningInfo,
  };
}

export async function nodeStatusSummary(): Promise<{
  difficulty: number;
  size: number;
  mempool: number;
  connections: number;
  networkhashps: number;
}> {
  const blockchainInfo = await bitcoinClient.getBlockchainInfo();
  const networkInfo = await bitcoinClient.getNetworkInfo();
  const mempoolInfo = await bitcoinClient.getMempoolInfo();
  const miningInfo = await bitcoinClient.getMiningInfo();

  return {
    difficulty: blockchainInfo.difficulty,
    size: blockchainInfo.size_on_disk,
    mempool: mempoolInfo.bytes,
    connections: networkInfo.connections,
    networkhashps: miningInfo.networkhashps,
  };
}
