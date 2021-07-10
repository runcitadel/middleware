const LND_DATA_SOURCE_DIRECTORY = '/lnd/';
const LND_BACKUP_DEST_DIRECTORY = '/lndBackup';
const CHANNEL_BACKUP_FILE = process.env.CHANNEL_BACKUP_FILE || '/lnd/data/chain/bitcoin/' + process.env.LND_NETWORK + '/channel.backup';
export async function lndChannnelBackup() {
    return CHANNEL_BACKUP_FILE;
}
