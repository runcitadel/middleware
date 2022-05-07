import getClient from '../services/liquid.js';
import type {
  ChainInfo,
  ILiquidClient,
  MempoolInfo,
  MiningInfo,
  NetworkInfo,
  Transaction,
  TxIn,
} from '../services/liquid/abstract';

/**
 * A higher-level interface to the Liquid client.
 *
 * This provides some logic which can be calculated no matter what Liquid client is actually used by the data returned from the client
 *
 * This avoids having to repeat code in every client implementation.
 */
export default class LiquidLogic {
  #liquidClient: ILiquidClient;

  constructor() {
    this.#liquidClient = getClient();
  }

  async getBlockCount(): Promise<number> {
    return this.#liquidClient.getBlockCount();
  }

  async getConnectionsCount(): Promise<{
    total: number;
    inbound: number;
    outbound: number;
  }> {
    const peerInfo = await this.#liquidClient.getPeerInfo();

    let outBoundConnections = 0;
    let inBoundConnections = 0;

    for (const peer of peerInfo) {
      if (!peer.inbound) {
        outBoundConnections++;

        continue;
      }

      inBoundConnections++;
    }

    const connections = {
      total: inBoundConnections + outBoundConnections,
      inbound: inBoundConnections,
      outbound: outBoundConnections,
    };

    return connections;
  }

  async getStatus(): Promise<{operational: boolean}> {
    try {
      await this.#liquidClient.getPeerInfo();

      return {operational: true};
    } catch {
      return {operational: false};
    }
  }

  // Return the max synced header for all connected peers or -1 if no data is available.
  async getMaxSyncHeader(): Promise<number> {
    const peerInfo = await this.#liquidClient.getPeerInfo();

    if (peerInfo.length === 0) {
      return -1;
    }

    // eslint-disable-next-line unicorn/no-array-reduce
    const maxPeer = peerInfo.reduce(function (previous, current) {
      return previous.synced_headers > current.synced_headers
        ? previous
        : current;
    });

    return maxPeer.synced_headers;
  }

  async getMempoolInfo(): Promise<MempoolInfo> {
    return this.#liquidClient.getMempoolInfo();
  }

  async getLocalSyncInfo(): Promise<{
    chain: string;
    percent: number;
    currentBlock: number;
    headerCount: number;
  }> {
    const info = await this.#liquidClient.getBlockchainInfo();

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

  async getSyncStatus(): Promise<{
    chain: string;
    percent: number;
    currentBlock: number;
    headerCount: number;
  }> {
    const maxPeerHeader = await this.getMaxSyncHeader();
    const localSyncInfo = await this.getLocalSyncInfo();

    if (maxPeerHeader > localSyncInfo.headerCount) {
      localSyncInfo.headerCount = maxPeerHeader;
    }

    return localSyncInfo;
  }

  async getVersion(): Promise<string> {
    return this.#liquidClient.getVersion();
  }

  async getTransaction(txid: string): Promise<{
    txid: string;
    timestamp: number;
    confirmations: number;
    blockhash: string;
    size: number;
    input: string;
    utxo: unknown;
    rawtx: string;
  }> {
    const transactionObject = await this.#liquidClient.getRawTransaction(txid);
    const vintxid: string = Array.isArray(transactionObject.vin)
      ? transactionObject.vin[0].txid
      : (transactionObject.vin as unknown as TxIn).txid;
    const vouttx: unknown = Array.isArray(transactionObject.vout)
      ? transactionObject.vout[0]
      : transactionObject.vout;
    return {
      txid,
      timestamp: transactionObject.time,
      confirmations: transactionObject.confirmations,
      blockhash: transactionObject.blockhash,
      size: transactionObject.size,
      input: vintxid,
      utxo: vouttx,
      rawtx: transactionObject.hex,
    };
  }

  async getNetworkInfo(): Promise<NetworkInfo> {
    return this.#liquidClient.getNetworkInfo();
  }

  async getBlock(hash: string): Promise<{
    block: string;
    confirmations: number;
    size: number;
    height: number;
    blocktime: number;
    prevblock: string;
    nextblock: string | undefined;
    transactions: string | Transaction[];
  }> {
    const blockObject = await this.#liquidClient.getBlock(hash);
    return {
      block: hash,
      confirmations: blockObject.confirmations,
      size: blockObject.size,
      height: blockObject.height,
      blocktime: blockObject.time,
      prevblock: blockObject.previousblockhash,
      nextblock: blockObject.nextblockchash,
      transactions: blockObject.tx,
    };
  }

  async getBlocks(
    fromHeight: number,
    toHeight: number,
  ): Promise<
    Array<{
      hash: string;
      height: number;
      numTransactions: number;
      confirmations: number;
      time: number;
      size: number;
    }>
  > {
    const startingBlockHashRaw = await this.#liquidClient.getBlockHash(
      toHeight,
    );

    let currentHash = startingBlockHashRaw;

    const blocks = [];

    // Loop from 'to height' till 'from Height'
    for (
      let currentHeight = toHeight;
      currentHeight >= fromHeight;
      currentHeight--
    ) {
      // eslint-disable-next-line no-await-in-loop
      const block = await this.#liquidClient.getBlock(currentHash);

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
      // Terminate loop if we reach the genesis block
      if (!currentHash) {
        break;
      }
    }

    return blocks;
  }

  async getBlockHash(height: number): Promise<string> {
    const getBlockHashObject = await this.#liquidClient.getBlockHash(height);

    return getBlockHashObject;
  }

  async nodeStatusDump(): Promise<{
    blockchainInfo: ChainInfo;
    networkInfo: NetworkInfo;
    mempoolInfo: MempoolInfo;
    miningInfo: MiningInfo;
  }> {
    const blockchainInfo = await this.#liquidClient.getBlockchainInfo();
    const networkInfo = await this.#liquidClient.getNetworkInfo();
    const mempoolInfo = await this.#liquidClient.getMempoolInfo();
    const miningInfo = await this.#liquidClient.getMiningInfo();

    return {
      blockchainInfo,
      networkInfo,
      mempoolInfo,
      miningInfo,
    };
  }

  async nodeStatusSummary(): Promise<{
    size: number;
    mempool: number;
    connections: number;
  }> {
    const status = await this.nodeStatusDump();

    return {
      size: status.blockchainInfo.size_on_disk,
      mempool: status.mempoolInfo.bytes,
      connections: status.networkInfo.connections,
    };
  }
}
