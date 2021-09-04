import { IBitcoinClient } from "./bitcoin/abstract.js";
import BitcoindClient from "./bitcoin/bitcoind.js";

const BITCOIND_RPC_PORT: number = parseInt(process.env.RPC_PORT || "8332");
const BITCOIND_HOST = process.env.BITCOIN_HOST || "127.0.0.1";
const BITCOIND_RPC_USER = process.env.RPC_USER || "";
const BITCOIND_RPC_PASSWORD = process.env.RPC_PASSWORD || "";

export default function getClient(): IBitcoinClient {
  switch (process.env.BITCOIN_IMPL) {
    case "bitcoind":
    case undefined:
      return new BitcoindClient(BITCOIND_RPC_USER, BITCOIND_RPC_PASSWORD, BITCOIND_HOST, BITCOIND_RPC_PORT);
    default:
      throw new Error(
        `Unknown bitcoin implementation: ${process.env.BITCOIN_IMPL}`
      );
  }
}
