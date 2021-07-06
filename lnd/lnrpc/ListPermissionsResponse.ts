// Original file: resources/rpc.proto

import type { MacaroonPermissionList as _lnrpc_MacaroonPermissionList, MacaroonPermissionList__Output as _lnrpc_MacaroonPermissionList__Output } from '../lnrpc/MacaroonPermissionList';

export interface ListPermissionsResponse {
  'methodPermissions'?: ({[key: string]: _lnrpc_MacaroonPermissionList});
}

export interface ListPermissionsResponse__Output {
  'methodPermissions'?: ({[key: string]: _lnrpc_MacaroonPermissionList__Output});
}
