const LND_NETWORK = process.env.LND_NETWORK || 'mainnet';
const JWT_PUBLIC_KEY_FILE = process.env.JWT_PUBLIC_KEY_FILE || 'UNKNOWN';
const CHANNEL_BACKUP_FILE =
  process.env.CHANNEL_BACKUP_FILE ||
  `/lnd/data/chain/bitcoin/${LND_NETWORK}/channel.backup`;
const IS_BITCOIN_CORE_INSTALLED =
  process.env.IS_BITCOIN_CORE_INSTALLED !== 'false';

const constants = {
  LN_REQUIRED_CONFIRMATIONS: 3,
  JWT_PUBLIC_KEY_FILE,
  CHANNEL_BACKUP_FILE,
  IS_BITCOIN_CORE_INSTALLED,
};

export default constants;
