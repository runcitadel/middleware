import process from 'node:process';

const LND_NETWORK = process.env.LND_NETWORK ?? 'mainnet';
const JWT_PUBLIC_KEY_FILE = process.env.JWT_PUBLIC_KEY_FILE ?? 'UNKNOWN';
const CHANNEL_BACKUP_FILE =
  process.env.CHANNEL_BACKUP_FILE ??
  `/lnd/data/chain/bitcoin/${LND_NETWORK}/channel.backup`;
const DEVICE_HOSTNAME = process.env.DEVICE_HOSTNAME ?? 'citadel';
const LND_CERT_FILE = process.env.LND_CERT_FILE ?? '/lnd/tls.cert';
const TOR_HIDDEN_SERVICE_DIR = process.env.TOR_HIDDEN_SERVICE_DIR ?? '/tor';
const LND_ADMIN_MACAROON_FILE =
  process.env.LND_ADMIN_MACAROON_FILE ??
  '/lnd/data/chain/bitcoin/mainnet/admin.macaroon';

const constants = {
  LN_REQUIRED_CONFIRMATIONS: 3,
  JWT_PUBLIC_KEY_FILE,
  CHANNEL_BACKUP_FILE,
  DEVICE_HOSTNAME,
  LND_CERT_FILE,
  TOR_HIDDEN_SERVICE_DIR,
  LND_ADMIN_MACAROON_FILE,
};

export default constants;
