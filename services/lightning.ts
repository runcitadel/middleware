import * as path from "path";
import * as fs from "fs";
import ILightningClient from "./lightning/abstract.js";
import LNDService from "./lightning/lnd.js";


const LND_HOST = process.env.LND_HOST || "127.0.0.1";
const LND_DIR = process.env.LND_DIR || "/lnd";
const LND_PORT = process.env.LND_PORT || 10009;
const LND_NETWORK = process.env.LND_NETWORK || "mainnet";

const TLS_FILE = path.join(LND_DIR, "tls.cert");
const MACAROON_FILE = path.join(
  LND_DIR,
  "data",
  "chain",
  "bitcoin",
  LND_NETWORK,
  "admin.macaroon"
);

export default function getLightning(): ILightningClient {
  switch(process.env.LIGHTNING_IMPL) {
    case "lnd":
    case undefined:
      return new LNDService(`${LND_HOST}:${LND_PORT}`, fs.readFileSync(TLS_FILE), MACAROON_FILE);
    default:
      throw new Error(`Unknown lightning implementation: ${process.env.LIGHTNING_IMPL}`);
  }
}