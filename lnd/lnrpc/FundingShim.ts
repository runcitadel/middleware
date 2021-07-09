// Original file: resources/rpc.proto

import type { ChanPointShim as _lnrpc_ChanPointShim, ChanPointShim__Output as _lnrpc_ChanPointShim__Output } from '../lnrpc/ChanPointShim';
import type { PsbtShim as _lnrpc_PsbtShim, PsbtShim__Output as _lnrpc_PsbtShim__Output } from '../lnrpc/PsbtShim';

export interface FundingShim {
  'chanPointShim'?: (_lnrpc_ChanPointShim | null);
  'psbtShim'?: (_lnrpc_PsbtShim | null);
  'shim'?: "chanPointShim"|"psbtShim";
}

export interface FundingShim__Output {
  'chanPointShim'?: (_lnrpc_ChanPointShim__Output | null);
  'psbtShim'?: (_lnrpc_PsbtShim__Output | null);
}
