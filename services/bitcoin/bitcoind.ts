import {
  NetworkInfo,
  Client as RpcClient,
  ChainInfo,
  PeerInfo,
  MiningInfo,
  MempoolInfo,
} from "@runcitadel/bitcoin-rpc";
import type { Block } from "@runcitadel/bitcoin-rpc";
import { IBitcoinClient, FetchedRawTransaction } from "./abstract.js";

export default class BitcoindClient implements IBitcoinClient {
  #client: RpcClient;

  constructor(
    username: string,
    password: string,
    host: string,
    port: string | number
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
      true
    )) as FetchedRawTransaction;
  }

  public async getBlockchainInfo(): Promise<ChainInfo> {
    return await this.#client.getBlockchainInfo();
  }

  public async getPeerInfo(): Promise<PeerInfo[]> {
    return await this.#client.getPeerInfo();
  }

  public async getMempoolInfo(): Promise<MempoolInfo> {
    return await this.#client.getMempoolInfo();
  }

  public async getNetworkInfo(): Promise<NetworkInfo> {
    return await this.#client.getNetworkInfo();
  }

  public async getMiningInfo(): Promise<MiningInfo> {
    return await this.#client.getMiningInfo();
  }

  public async getBestBlockHash(): Promise<string> {
    return await this.#client.getBestBlockHash();
  }

  public async getBlockHash(height: number): Promise<string> {
    return await this.#client.getBlockHash(height);
  }

  public async getBlockCount(): Promise<number> {
    return await this.#client.getBlockCount();
  }

  public async getVersion(): Promise<string> {
    const networkInfo = await this.getNetworkInfo();
    return networkInfo.subversion;
  }
}
