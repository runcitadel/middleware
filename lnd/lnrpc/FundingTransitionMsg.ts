// Original file: resources/rpc.proto

import type { FundingShim as _lnrpc_FundingShim, FundingShim__Output as _lnrpc_FundingShim__Output } from '../lnrpc/FundingShim';
import type { FundingShimCancel as _lnrpc_FundingShimCancel, FundingShimCancel__Output as _lnrpc_FundingShimCancel__Output } from '../lnrpc/FundingShimCancel';
import type { FundingPsbtVerify as _lnrpc_FundingPsbtVerify, FundingPsbtVerify__Output as _lnrpc_FundingPsbtVerify__Output } from '../lnrpc/FundingPsbtVerify';
import type { FundingPsbtFinalize as _lnrpc_FundingPsbtFinalize, FundingPsbtFinalize__Output as _lnrpc_FundingPsbtFinalize__Output } from '../lnrpc/FundingPsbtFinalize';

export interface FundingTransitionMsg {
  'shimRegister'?: (_lnrpc_FundingShim | null);
  'shimCancel'?: (_lnrpc_FundingShimCancel | null);
  'psbtVerify'?: (_lnrpc_FundingPsbtVerify | null);
  'psbtFinalize'?: (_lnrpc_FundingPsbtFinalize | null);
  'trigger'?: "shimRegister"|"shimCancel"|"psbtVerify"|"psbtFinalize";
}

export interface FundingTransitionMsg__Output {
  'shimRegister'?: (_lnrpc_FundingShim__Output | null);
  'shimCancel'?: (_lnrpc_FundingShimCancel__Output | null);
  'psbtVerify'?: (_lnrpc_FundingPsbtVerify__Output | null);
  'psbtFinalize'?: (_lnrpc_FundingPsbtFinalize__Output | null);
}
