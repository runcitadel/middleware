/* eslint-disable id-length */
export default {
  LN_REQUIRED_CONFIRMATIONS: 3,
  JWT_PUBLIC_KEY_FILE: process.env.JWT_PUBLIC_KEY_FILE || "UNKNOWN",
  CHANNEL_BACKUP_FILE:
    process.env.CHANNEL_BACKUP_FILE ||
    "/lnd/data/chain/bitcoin/" + process.env.LND_NETWORK + "/channel.backup",
};
