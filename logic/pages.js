import * as lightningLogic from './lightning.js';
export async function lndDetails() {
    const calls = [
        lightningLogic.getChannelBalance(),
        lightningLogic.getWalletBalance(),
        lightningLogic.getChannels(),
        lightningLogic.getGeneralInfo()
    ];
    // prevent fail fast, ux will expect a null on failed calls
    const [externalIP, channelBalance, walletBalance, channels, lightningInfo] = await Promise.all(calls.map(p => p.catch(err => null))); // eslint-disable-line
    return {
        externalIP: externalIP,
        balance: {
            wallet: walletBalance,
            channel: channelBalance,
        },
        channels: channels,
        lightningInfo: lightningInfo // eslint-disable-line object-shorthand
    };
}
module.exports = {
    lndDetails
};
