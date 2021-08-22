const CHANNEL_BACKUP_FILE =
  process.env.CHANNEL_BACKUP_FILE ||
  "/lnd/data/chain/bitcoin/" + process.env.LND_NETWORK + "/channel.backup";

export async function lndChannnelBackup(): Promise<string> {
  return CHANNEL_BACKUP_FILE;
}
