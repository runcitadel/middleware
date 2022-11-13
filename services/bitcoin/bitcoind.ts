import {Client as RpcClient, MempoolInfo} from '@runcitadel/bitcoin-rpc';
import {IBitcoinClient} from './abstract.js';

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

  public async getMempoolInfo(): Promise<MempoolInfo> {
    return this.#client.getMempoolInfo();
  }
}
