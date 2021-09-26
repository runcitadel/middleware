/* eslint-disable id-length */
export default {
  LN_REQUIRED_CONFIRMATIONS: 3,
  LND_STATUS_CODES: {
    UNAVAILABLE: 14,
    UNKNOWN: 2,
  },
  JWT_PUBLIC_KEY_FILE: process.env.JWT_PUBLIC_KEY_FILE || "UNKNOWN",
  MANAGED_CHANNELS_FILE: "/channel-data/managedChannels.json",
  LND_WALLET_PASSWORD: process.env.LND_WALLET_PASSWORD || "moneyprintergobrrr",
  CHANNEL_BACKUP_FILE:
    process.env.CHANNEL_BACKUP_FILE ||
    "/lnd/data/chain/bitcoin/" + process.env.LND_NETWORK + "/channel.backup",
};

export enum STATUS_CODES {
  ACCEPTED = 202,
  BAD_GATEWAY = 502,
  CONFLICT = 409,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  OK = 200,
  UNAUTHORIZED = 401,
  INTERNAL_SERVER_ERROR = 500,
}