import {
  NetworkInfo,
  Client as RpcClient,
  ChainInfo,
  PeerInfo,
  MiningInfo,
  MempoolInfo,
} from '@runcitadel/bitcoin-rpc';
import type {Block} from '@runcitadel/bitcoin-rpc';
import {IBitcoinClient, FetchedRawTransaction} from './abstract.js';

export default class BitcoindClient implements IBitcoinClient {
  #client: RpcClient;

  constructor(
    username: string,
    password: string,
    host: string,
    port: string | number,
  ) {
    this.#client = new RpcClient({
      auth: {
        username,
        password,
      },
      baseURL: `http://${host}:${port}/`,
    });
  }

  public async getBlock(hash: string): Promise<Block> {
    const block = await this.#client.getBlock(hash, 2);
    return <Block>block;
  }

  public async getRawTransaction(txid: string): Promise<FetchedRawTransaction> {
    return (await this.#client.getRawTransaction(
      txid,
      true,
    )) as FetchedRawTransaction;
  }

  public async getBlockchainInfo(): Promise<ChainInfo> {
    return this.#client.getBlockchainInfo();
  }

  public async getPeerInfo(): Promise<PeerInfo[]> {
    return this.#client.getPeerInfo();
  }

  public async getMempoolInfo(): Promise<MempoolInfo> {
    return this.#client.getMempoolInfo();
  }

  public async getNetworkInfo(): Promise<NetworkInfo> {
    return this.#client.getNetworkInfo();
  }

  public async getMiningInfo(): Promise<MiningInfo> {
    return this.#client.getMiningInfo();
  }

  public async getBestBlockHash(): Promise<string> {
    return this.#client.getBestBlockHash();
  }

  public async getBlockHash(height: number): Promise<string> {
    return this.#client.getBlockHash(height);
  }

  public async getBlockCount(): Promise<number> {
    return this.#client.getBlockCount();
  }

  public async getVersion(): Promise<string> {
    const networkInfo = await this.getNetworkInfo();
    return networkInfo.subversion;
  }
}
