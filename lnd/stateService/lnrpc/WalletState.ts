// Original file: resources/stateservice.proto

export enum WalletState {
  NON_EXISTING = 0,
  LOCKED = 1,
  UNLOCKED = 2,
  RPC_ACTIVE = 3,
  WAITING_TO_START = 255,
}
