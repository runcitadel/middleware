import * as lightningLogic from "./lightning.js";
import type { ChannelBalanceResponse__Output } from "../lnd/lnrpc/ChannelBalanceResponse";
import type { WalletBalanceResponse__Output } from "../lnd/lnrpc/WalletBalanceResponse";
import type { Channel__Output } from "../lnd/lnrpc/Channel";
import { GetInfoResponse__Output } from "../lnd/lnrpc/GetInfoResponse.js";

type LndBalance = {
  wallet: WalletBalanceResponse__Output;
  channel: ChannelBalanceResponse__Output;
};
type LndDetails = {
  balance: LndBalance;
  channels: Channel__Output[];
  lightningInfo: GetInfoResponse__Output;
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
