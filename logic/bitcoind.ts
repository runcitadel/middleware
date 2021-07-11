import * as bitcoindService from "../services/bitcoind.js";
import { BitcoindError } from "@runcitadel/utils";

export async function getBlockCount() {
  const blockCount = await bitcoindService.getBlockCount();

  return { blockCount: blockCount };
}

export async function getConnectionsCount() {
  const peerInfo = await bitcoindService.getPeerInfo();

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

export async function getStatus() {
  try {
    await bitcoindService.getPeerInfo();

    return { operational: true };
  } catch (error) {
    if (error instanceof BitcoindError) {
      return { operational: false };
    }

    throw error;
  }
}

// Return the max synced header for all connected peers or -1 if no data is available.
export async function getMaxSyncHeader() {
  const peerInfo = await bitcoindService.getPeerInfo();

  if (peerInfo.length === 0) {
    return -1;
  }

  const maxPeer = peerInfo.reduce(function (prev, current) {
    return prev.synced_headers > current.synced_headers ? prev : current;
  });

  return maxPeer.synced_headers;
}

export async function getMempoolInfo() {
  return await bitcoindService.getMempoolInfo();
}

export async function getLocalSyncInfo() {
  const info = await bitcoindService.getBlockChainInfo();

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

export async function getSyncStatus() {
  const maxPeerHeader = await getMaxSyncHeader();
  const localSyncInfo = await getLocalSyncInfo();

  if (maxPeerHeader > localSyncInfo.headerCount) {
    localSyncInfo.headerCount = maxPeerHeader;
  }

  return localSyncInfo;
}

export async function getVersion() {
  const networkInfo = await bitcoindService.getNetworkInfo();
  const unformattedVersion = networkInfo.subversion;

  // Remove all non-digits or decimals.
  const version = unformattedVersion.replace(/[^\d.]/g, "");

  return { version: version }; // eslint-disable-line object-shorthand
}

export async function getTransaction(txid: string): Promise<{
  txid: string,
  timestamp: number,
  confirmations: number,
  blockhash: string,
  size: number,
  input: string,
  utxo: unknown,
  rawtx: string,
}> {
  const transactionObj = await bitcoindService.getTransaction(txid);
  const vintxid: string = Array.isArray(transactionObj.vin)
    ? transactionObj.vin[0].txid
    // @ts-expect-error This can happen sometims
    : transactionObj.vin.txid;
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

export const getNetworkInfo = bitcoindService.getNetworkInfo;

export async function getBlock(hash: string) {
  const blockObj = await bitcoindService.getBlock(hash);
  if (typeof blockObj === "string")
    throw new BitcoindError("Received unexpected data from Bitcoin Core");
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

export async function getBlocks(fromHeight: number, toHeight: number) {
  let startingBlockHashRaw;

  try {
    startingBlockHashRaw = await bitcoindService.getBlockHash(toHeight);
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
    const blockRaw = await bitcoindService.getBlock(currentHash);
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

  return { blocks: blocks };
}

export async function getBlockHash(height: number) {
  const getBlockHashObj = await bitcoindService.getBlockHash(height);

  return {
    hash: getBlockHashObj,
  };
}

export async function nodeStatusDump() {
  const blockchainInfo = await bitcoindService.getBlockChainInfo();
  const networkInfo = await bitcoindService.getNetworkInfo();
  const mempoolInfo = await bitcoindService.getMempoolInfo();
  const miningInfo = await bitcoindService.getMiningInfo();

  return {
    blockchain_info: blockchainInfo,
    network_info: networkInfo,
    mempool: mempoolInfo,
    mining_info: miningInfo,
  };
}

export async function nodeStatusSummary() {
  const blockchainInfo = await bitcoindService.getBlockChainInfo();
  const networkInfo = await bitcoindService.getNetworkInfo();
  const mempoolInfo = await bitcoindService.getMempoolInfo();
  const miningInfo = await bitcoindService.getMiningInfo();

  return {
    difficulty: blockchainInfo.difficulty,
    size: blockchainInfo.size_on_disk,
    mempool: mempoolInfo.bytes,
    connections: networkInfo.connections,
    networkhashps: miningInfo.networkhashps,
  };
}
