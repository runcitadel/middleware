import type {
  Channel,
  ChannelBalanceResponse,
  GetInfoResponse,
  WalletBalanceResponse,
} from '../services/lightning/autogenerated-types';
import * as lightningLogic from './lightning.js';

type LndBalance = {
  wallet: WalletBalanceResponse;
  channel: ChannelBalanceResponse;
};
type LndDetails = {
  balance: LndBalance;
  channels: Channel[];
  lightningInfo: GetInfoResponse;
};

export async function lndDetails(): Promise<LndDetails> {
  return {
    balance: {
      wallet: await lightningLogic.getWalletBalance(),
      channel: await lightningLogic.getChannelBalance(),
    },
    channels: await lightningLogic.getChannels(),
    lightningInfo: await lightningLogic.getGeneralInfo(),
  };
}
