import { Client as RpcClient } from "@runcitadel/bitcoin-rpc";
import type { Block } from "@runcitadel/bitcoin-rpc";
import { IBitcoinClient, FetchedRawTransaction } from "./abstract.js";

export default class BitcoindClient
  extends RpcClient
  implements IBitcoinClient
{
  public async getBlockDetails(hash: string): Promise<Block> {
    const block = await this.getBlock(hash, 2);
    return <Block>block;
  }

  public async getRawTransactionVerbose(
    txid: string
  ): Promise<FetchedRawTransaction> {
    return (await this.getRawTransaction(txid, true)) as FetchedRawTransaction;
  }
  public async getVersion(): Promise<string> {
    const networkInfo = await this.getNetworkInfo();
    return networkInfo.subversion;
  }
}
