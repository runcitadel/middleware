// Original file: resources/rpc.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AbandonChannelRequest as _lnrpc_AbandonChannelRequest, AbandonChannelRequest__Output as _lnrpc_AbandonChannelRequest__Output } from '../lnrpc/AbandonChannelRequest';
import type { AbandonChannelResponse as _lnrpc_AbandonChannelResponse, AbandonChannelResponse__Output as _lnrpc_AbandonChannelResponse__Output } from '../lnrpc/AbandonChannelResponse';
import type { AddInvoiceResponse as _lnrpc_AddInvoiceResponse, AddInvoiceResponse__Output as _lnrpc_AddInvoiceResponse__Output } from '../lnrpc/AddInvoiceResponse';
import type { BakeMacaroonRequest as _lnrpc_BakeMacaroonRequest, BakeMacaroonRequest__Output as _lnrpc_BakeMacaroonRequest__Output } from '../lnrpc/BakeMacaroonRequest';
import type { BakeMacaroonResponse as _lnrpc_BakeMacaroonResponse, BakeMacaroonResponse__Output as _lnrpc_BakeMacaroonResponse__Output } from '../lnrpc/BakeMacaroonResponse';
import type { ChanBackupExportRequest as _lnrpc_ChanBackupExportRequest, ChanBackupExportRequest__Output as _lnrpc_ChanBackupExportRequest__Output } from '../lnrpc/ChanBackupExportRequest';
import type { ChanBackupSnapshot as _lnrpc_ChanBackupSnapshot, ChanBackupSnapshot__Output as _lnrpc_ChanBackupSnapshot__Output } from '../lnrpc/ChanBackupSnapshot';
import type { ChanInfoRequest as _lnrpc_ChanInfoRequest, ChanInfoRequest__Output as _lnrpc_ChanInfoRequest__Output } from '../lnrpc/ChanInfoRequest';
import type { ChannelAcceptRequest as _lnrpc_ChannelAcceptRequest, ChannelAcceptRequest__Output as _lnrpc_ChannelAcceptRequest__Output } from '../lnrpc/ChannelAcceptRequest';
import type { ChannelAcceptResponse as _lnrpc_ChannelAcceptResponse, ChannelAcceptResponse__Output as _lnrpc_ChannelAcceptResponse__Output } from '../lnrpc/ChannelAcceptResponse';
import type { ChannelBackup as _lnrpc_ChannelBackup, ChannelBackup__Output as _lnrpc_ChannelBackup__Output } from '../lnrpc/ChannelBackup';
import type { ChannelBackupSubscription as _lnrpc_ChannelBackupSubscription, ChannelBackupSubscription__Output as _lnrpc_ChannelBackupSubscription__Output } from '../lnrpc/ChannelBackupSubscription';
import type { ChannelBalanceRequest as _lnrpc_ChannelBalanceRequest, ChannelBalanceRequest__Output as _lnrpc_ChannelBalanceRequest__Output } from '../lnrpc/ChannelBalanceRequest';
import type { ChannelBalanceResponse as _lnrpc_ChannelBalanceResponse, ChannelBalanceResponse__Output as _lnrpc_ChannelBalanceResponse__Output } from '../lnrpc/ChannelBalanceResponse';
import type { ChannelEdge as _lnrpc_ChannelEdge, ChannelEdge__Output as _lnrpc_ChannelEdge__Output } from '../lnrpc/ChannelEdge';
import type { ChannelEventSubscription as _lnrpc_ChannelEventSubscription, ChannelEventSubscription__Output as _lnrpc_ChannelEventSubscription__Output } from '../lnrpc/ChannelEventSubscription';
import type { ChannelEventUpdate as _lnrpc_ChannelEventUpdate, ChannelEventUpdate__Output as _lnrpc_ChannelEventUpdate__Output } from '../lnrpc/ChannelEventUpdate';
import type { ChannelGraph as _lnrpc_ChannelGraph, ChannelGraph__Output as _lnrpc_ChannelGraph__Output } from '../lnrpc/ChannelGraph';
import type { ChannelGraphRequest as _lnrpc_ChannelGraphRequest, ChannelGraphRequest__Output as _lnrpc_ChannelGraphRequest__Output } from '../lnrpc/ChannelGraphRequest';
import type { ChannelPoint as _lnrpc_ChannelPoint, ChannelPoint__Output as _lnrpc_ChannelPoint__Output } from '../lnrpc/ChannelPoint';
import type { CloseChannelRequest as _lnrpc_CloseChannelRequest, CloseChannelRequest__Output as _lnrpc_CloseChannelRequest__Output } from '../lnrpc/CloseChannelRequest';
import type { CloseStatusUpdate as _lnrpc_CloseStatusUpdate, CloseStatusUpdate__Output as _lnrpc_CloseStatusUpdate__Output } from '../lnrpc/CloseStatusUpdate';
import type { ClosedChannelsRequest as _lnrpc_ClosedChannelsRequest, ClosedChannelsRequest__Output as _lnrpc_ClosedChannelsRequest__Output } from '../lnrpc/ClosedChannelsRequest';
import type { ClosedChannelsResponse as _lnrpc_ClosedChannelsResponse, ClosedChannelsResponse__Output as _lnrpc_ClosedChannelsResponse__Output } from '../lnrpc/ClosedChannelsResponse';
import type { ConnectPeerRequest as _lnrpc_ConnectPeerRequest, ConnectPeerRequest__Output as _lnrpc_ConnectPeerRequest__Output } from '../lnrpc/ConnectPeerRequest';
import type { ConnectPeerResponse as _lnrpc_ConnectPeerResponse, ConnectPeerResponse__Output as _lnrpc_ConnectPeerResponse__Output } from '../lnrpc/ConnectPeerResponse';
import type { DebugLevelRequest as _lnrpc_DebugLevelRequest, DebugLevelRequest__Output as _lnrpc_DebugLevelRequest__Output } from '../lnrpc/DebugLevelRequest';
import type { DebugLevelResponse as _lnrpc_DebugLevelResponse, DebugLevelResponse__Output as _lnrpc_DebugLevelResponse__Output } from '../lnrpc/DebugLevelResponse';
import type { DeleteAllPaymentsRequest as _lnrpc_DeleteAllPaymentsRequest, DeleteAllPaymentsRequest__Output as _lnrpc_DeleteAllPaymentsRequest__Output } from '../lnrpc/DeleteAllPaymentsRequest';
import type { DeleteAllPaymentsResponse as _lnrpc_DeleteAllPaymentsResponse, DeleteAllPaymentsResponse__Output as _lnrpc_DeleteAllPaymentsResponse__Output } from '../lnrpc/DeleteAllPaymentsResponse';
import type { DeleteMacaroonIDRequest as _lnrpc_DeleteMacaroonIDRequest, DeleteMacaroonIDRequest__Output as _lnrpc_DeleteMacaroonIDRequest__Output } from '../lnrpc/DeleteMacaroonIDRequest';
import type { DeleteMacaroonIDResponse as _lnrpc_DeleteMacaroonIDResponse, DeleteMacaroonIDResponse__Output as _lnrpc_DeleteMacaroonIDResponse__Output } from '../lnrpc/DeleteMacaroonIDResponse';
import type { DisconnectPeerRequest as _lnrpc_DisconnectPeerRequest, DisconnectPeerRequest__Output as _lnrpc_DisconnectPeerRequest__Output } from '../lnrpc/DisconnectPeerRequest';
import type { DisconnectPeerResponse as _lnrpc_DisconnectPeerResponse, DisconnectPeerResponse__Output as _lnrpc_DisconnectPeerResponse__Output } from '../lnrpc/DisconnectPeerResponse';
import type { EstimateFeeRequest as _lnrpc_EstimateFeeRequest, EstimateFeeRequest__Output as _lnrpc_EstimateFeeRequest__Output } from '../lnrpc/EstimateFeeRequest';
import type { EstimateFeeResponse as _lnrpc_EstimateFeeResponse, EstimateFeeResponse__Output as _lnrpc_EstimateFeeResponse__Output } from '../lnrpc/EstimateFeeResponse';
import type { ExportChannelBackupRequest as _lnrpc_ExportChannelBackupRequest, ExportChannelBackupRequest__Output as _lnrpc_ExportChannelBackupRequest__Output } from '../lnrpc/ExportChannelBackupRequest';
import type { FeeReportRequest as _lnrpc_FeeReportRequest, FeeReportRequest__Output as _lnrpc_FeeReportRequest__Output } from '../lnrpc/FeeReportRequest';
import type { FeeReportResponse as _lnrpc_FeeReportResponse, FeeReportResponse__Output as _lnrpc_FeeReportResponse__Output } from '../lnrpc/FeeReportResponse';
import type { ForwardingHistoryRequest as _lnrpc_ForwardingHistoryRequest, ForwardingHistoryRequest__Output as _lnrpc_ForwardingHistoryRequest__Output } from '../lnrpc/ForwardingHistoryRequest';
import type { ForwardingHistoryResponse as _lnrpc_ForwardingHistoryResponse, ForwardingHistoryResponse__Output as _lnrpc_ForwardingHistoryResponse__Output } from '../lnrpc/ForwardingHistoryResponse';
import type { FundingStateStepResp as _lnrpc_FundingStateStepResp, FundingStateStepResp__Output as _lnrpc_FundingStateStepResp__Output } from '../lnrpc/FundingStateStepResp';
import type { FundingTransitionMsg as _lnrpc_FundingTransitionMsg, FundingTransitionMsg__Output as _lnrpc_FundingTransitionMsg__Output } from '../lnrpc/FundingTransitionMsg';
import type { GetInfoRequest as _lnrpc_GetInfoRequest, GetInfoRequest__Output as _lnrpc_GetInfoRequest__Output } from '../lnrpc/GetInfoRequest';
import type { GetInfoResponse as _lnrpc_GetInfoResponse, GetInfoResponse__Output as _lnrpc_GetInfoResponse__Output } from '../lnrpc/GetInfoResponse';
import type { GetRecoveryInfoRequest as _lnrpc_GetRecoveryInfoRequest, GetRecoveryInfoRequest__Output as _lnrpc_GetRecoveryInfoRequest__Output } from '../lnrpc/GetRecoveryInfoRequest';
import type { GetRecoveryInfoResponse as _lnrpc_GetRecoveryInfoResponse, GetRecoveryInfoResponse__Output as _lnrpc_GetRecoveryInfoResponse__Output } from '../lnrpc/GetRecoveryInfoResponse';
import type { GetTransactionsRequest as _lnrpc_GetTransactionsRequest, GetTransactionsRequest__Output as _lnrpc_GetTransactionsRequest__Output } from '../lnrpc/GetTransactionsRequest';
import type { GraphTopologySubscription as _lnrpc_GraphTopologySubscription, GraphTopologySubscription__Output as _lnrpc_GraphTopologySubscription__Output } from '../lnrpc/GraphTopologySubscription';
import type { GraphTopologyUpdate as _lnrpc_GraphTopologyUpdate, GraphTopologyUpdate__Output as _lnrpc_GraphTopologyUpdate__Output } from '../lnrpc/GraphTopologyUpdate';
import type { Invoice as _lnrpc_Invoice, Invoice__Output as _lnrpc_Invoice__Output } from '../lnrpc/Invoice';
import type { InvoiceSubscription as _lnrpc_InvoiceSubscription, InvoiceSubscription__Output as _lnrpc_InvoiceSubscription__Output } from '../lnrpc/InvoiceSubscription';
import type { ListChannelsRequest as _lnrpc_ListChannelsRequest, ListChannelsRequest__Output as _lnrpc_ListChannelsRequest__Output } from '../lnrpc/ListChannelsRequest';
import type { ListChannelsResponse as _lnrpc_ListChannelsResponse, ListChannelsResponse__Output as _lnrpc_ListChannelsResponse__Output } from '../lnrpc/ListChannelsResponse';
import type { ListInvoiceRequest as _lnrpc_ListInvoiceRequest, ListInvoiceRequest__Output as _lnrpc_ListInvoiceRequest__Output } from '../lnrpc/ListInvoiceRequest';
import type { ListInvoiceResponse as _lnrpc_ListInvoiceResponse, ListInvoiceResponse__Output as _lnrpc_ListInvoiceResponse__Output } from '../lnrpc/ListInvoiceResponse';
import type { ListMacaroonIDsRequest as _lnrpc_ListMacaroonIDsRequest, ListMacaroonIDsRequest__Output as _lnrpc_ListMacaroonIDsRequest__Output } from '../lnrpc/ListMacaroonIDsRequest';
import type { ListMacaroonIDsResponse as _lnrpc_ListMacaroonIDsResponse, ListMacaroonIDsResponse__Output as _lnrpc_ListMacaroonIDsResponse__Output } from '../lnrpc/ListMacaroonIDsResponse';
import type { ListPaymentsRequest as _lnrpc_ListPaymentsRequest, ListPaymentsRequest__Output as _lnrpc_ListPaymentsRequest__Output } from '../lnrpc/ListPaymentsRequest';
import type { ListPaymentsResponse as _lnrpc_ListPaymentsResponse, ListPaymentsResponse__Output as _lnrpc_ListPaymentsResponse__Output } from '../lnrpc/ListPaymentsResponse';
import type { ListPeersRequest as _lnrpc_ListPeersRequest, ListPeersRequest__Output as _lnrpc_ListPeersRequest__Output } from '../lnrpc/ListPeersRequest';
import type { ListPeersResponse as _lnrpc_ListPeersResponse, ListPeersResponse__Output as _lnrpc_ListPeersResponse__Output } from '../lnrpc/ListPeersResponse';
import type { ListPermissionsRequest as _lnrpc_ListPermissionsRequest, ListPermissionsRequest__Output as _lnrpc_ListPermissionsRequest__Output } from '../lnrpc/ListPermissionsRequest';
import type { ListPermissionsResponse as _lnrpc_ListPermissionsResponse, ListPermissionsResponse__Output as _lnrpc_ListPermissionsResponse__Output } from '../lnrpc/ListPermissionsResponse';
import type { ListUnspentRequest as _lnrpc_ListUnspentRequest, ListUnspentRequest__Output as _lnrpc_ListUnspentRequest__Output } from '../lnrpc/ListUnspentRequest';
import type { ListUnspentResponse as _lnrpc_ListUnspentResponse, ListUnspentResponse__Output as _lnrpc_ListUnspentResponse__Output } from '../lnrpc/ListUnspentResponse';
import type { NetworkInfo as _lnrpc_NetworkInfo, NetworkInfo__Output as _lnrpc_NetworkInfo__Output } from '../lnrpc/NetworkInfo';
import type { NetworkInfoRequest as _lnrpc_NetworkInfoRequest, NetworkInfoRequest__Output as _lnrpc_NetworkInfoRequest__Output } from '../lnrpc/NetworkInfoRequest';
import type { NewAddressRequest as _lnrpc_NewAddressRequest, NewAddressRequest__Output as _lnrpc_NewAddressRequest__Output } from '../lnrpc/NewAddressRequest';
import type { NewAddressResponse as _lnrpc_NewAddressResponse, NewAddressResponse__Output as _lnrpc_NewAddressResponse__Output } from '../lnrpc/NewAddressResponse';
import type { NodeInfo as _lnrpc_NodeInfo, NodeInfo__Output as _lnrpc_NodeInfo__Output } from '../lnrpc/NodeInfo';
import type { NodeInfoRequest as _lnrpc_NodeInfoRequest, NodeInfoRequest__Output as _lnrpc_NodeInfoRequest__Output } from '../lnrpc/NodeInfoRequest';
import type { NodeMetricsRequest as _lnrpc_NodeMetricsRequest, NodeMetricsRequest__Output as _lnrpc_NodeMetricsRequest__Output } from '../lnrpc/NodeMetricsRequest';
import type { NodeMetricsResponse as _lnrpc_NodeMetricsResponse, NodeMetricsResponse__Output as _lnrpc_NodeMetricsResponse__Output } from '../lnrpc/NodeMetricsResponse';
import type { OpenChannelRequest as _lnrpc_OpenChannelRequest, OpenChannelRequest__Output as _lnrpc_OpenChannelRequest__Output } from '../lnrpc/OpenChannelRequest';
import type { OpenStatusUpdate as _lnrpc_OpenStatusUpdate, OpenStatusUpdate__Output as _lnrpc_OpenStatusUpdate__Output } from '../lnrpc/OpenStatusUpdate';
import type { PayReq as _lnrpc_PayReq, PayReq__Output as _lnrpc_PayReq__Output } from '../lnrpc/PayReq';
import type { PayReqString as _lnrpc_PayReqString, PayReqString__Output as _lnrpc_PayReqString__Output } from '../lnrpc/PayReqString';
import type { PaymentHash as _lnrpc_PaymentHash, PaymentHash__Output as _lnrpc_PaymentHash__Output } from '../lnrpc/PaymentHash';
import type { PeerEvent as _lnrpc_PeerEvent, PeerEvent__Output as _lnrpc_PeerEvent__Output } from '../lnrpc/PeerEvent';
import type { PeerEventSubscription as _lnrpc_PeerEventSubscription, PeerEventSubscription__Output as _lnrpc_PeerEventSubscription__Output } from '../lnrpc/PeerEventSubscription';
import type { PendingChannelsRequest as _lnrpc_PendingChannelsRequest, PendingChannelsRequest__Output as _lnrpc_PendingChannelsRequest__Output } from '../lnrpc/PendingChannelsRequest';
import type { PendingChannelsResponse as _lnrpc_PendingChannelsResponse, PendingChannelsResponse__Output as _lnrpc_PendingChannelsResponse__Output } from '../lnrpc/PendingChannelsResponse';
import type { PolicyUpdateRequest as _lnrpc_PolicyUpdateRequest, PolicyUpdateRequest__Output as _lnrpc_PolicyUpdateRequest__Output } from '../lnrpc/PolicyUpdateRequest';
import type { PolicyUpdateResponse as _lnrpc_PolicyUpdateResponse, PolicyUpdateResponse__Output as _lnrpc_PolicyUpdateResponse__Output } from '../lnrpc/PolicyUpdateResponse';
import type { QueryRoutesRequest as _lnrpc_QueryRoutesRequest, QueryRoutesRequest__Output as _lnrpc_QueryRoutesRequest__Output } from '../lnrpc/QueryRoutesRequest';
import type { QueryRoutesResponse as _lnrpc_QueryRoutesResponse, QueryRoutesResponse__Output as _lnrpc_QueryRoutesResponse__Output } from '../lnrpc/QueryRoutesResponse';
import type { RestoreBackupResponse as _lnrpc_RestoreBackupResponse, RestoreBackupResponse__Output as _lnrpc_RestoreBackupResponse__Output } from '../lnrpc/RestoreBackupResponse';
import type { RestoreChanBackupRequest as _lnrpc_RestoreChanBackupRequest, RestoreChanBackupRequest__Output as _lnrpc_RestoreChanBackupRequest__Output } from '../lnrpc/RestoreChanBackupRequest';
import type { SendCoinsRequest as _lnrpc_SendCoinsRequest, SendCoinsRequest__Output as _lnrpc_SendCoinsRequest__Output } from '../lnrpc/SendCoinsRequest';
import type { SendCoinsResponse as _lnrpc_SendCoinsResponse, SendCoinsResponse__Output as _lnrpc_SendCoinsResponse__Output } from '../lnrpc/SendCoinsResponse';
import type { SendManyRequest as _lnrpc_SendManyRequest, SendManyRequest__Output as _lnrpc_SendManyRequest__Output } from '../lnrpc/SendManyRequest';
import type { SendManyResponse as _lnrpc_SendManyResponse, SendManyResponse__Output as _lnrpc_SendManyResponse__Output } from '../lnrpc/SendManyResponse';
import type { SendRequest as _lnrpc_SendRequest, SendRequest__Output as _lnrpc_SendRequest__Output } from '../lnrpc/SendRequest';
import type { SendResponse as _lnrpc_SendResponse, SendResponse__Output as _lnrpc_SendResponse__Output } from '../lnrpc/SendResponse';
import type { SendToRouteRequest as _lnrpc_SendToRouteRequest, SendToRouteRequest__Output as _lnrpc_SendToRouteRequest__Output } from '../lnrpc/SendToRouteRequest';
import type { SignMessageRequest as _lnrpc_SignMessageRequest, SignMessageRequest__Output as _lnrpc_SignMessageRequest__Output } from '../lnrpc/SignMessageRequest';
import type { SignMessageResponse as _lnrpc_SignMessageResponse, SignMessageResponse__Output as _lnrpc_SignMessageResponse__Output } from '../lnrpc/SignMessageResponse';
import type { StopRequest as _lnrpc_StopRequest, StopRequest__Output as _lnrpc_StopRequest__Output } from '../lnrpc/StopRequest';
import type { StopResponse as _lnrpc_StopResponse, StopResponse__Output as _lnrpc_StopResponse__Output } from '../lnrpc/StopResponse';
import type { Transaction as _lnrpc_Transaction, Transaction__Output as _lnrpc_Transaction__Output } from '../lnrpc/Transaction';
import type { TransactionDetails as _lnrpc_TransactionDetails, TransactionDetails__Output as _lnrpc_TransactionDetails__Output } from '../lnrpc/TransactionDetails';
import type { VerifyChanBackupResponse as _lnrpc_VerifyChanBackupResponse, VerifyChanBackupResponse__Output as _lnrpc_VerifyChanBackupResponse__Output } from '../lnrpc/VerifyChanBackupResponse';
import type { VerifyMessageRequest as _lnrpc_VerifyMessageRequest, VerifyMessageRequest__Output as _lnrpc_VerifyMessageRequest__Output } from '../lnrpc/VerifyMessageRequest';
import type { VerifyMessageResponse as _lnrpc_VerifyMessageResponse, VerifyMessageResponse__Output as _lnrpc_VerifyMessageResponse__Output } from '../lnrpc/VerifyMessageResponse';
import type { WalletBalanceRequest as _lnrpc_WalletBalanceRequest, WalletBalanceRequest__Output as _lnrpc_WalletBalanceRequest__Output } from '../lnrpc/WalletBalanceRequest';
import type { WalletBalanceResponse as _lnrpc_WalletBalanceResponse, WalletBalanceResponse__Output as _lnrpc_WalletBalanceResponse__Output } from '../lnrpc/WalletBalanceResponse';

export interface LightningClient extends grpc.Client {
  AbandonChannel(argument: _lnrpc_AbandonChannelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  AbandonChannel(argument: _lnrpc_AbandonChannelRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  AbandonChannel(argument: _lnrpc_AbandonChannelRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  AbandonChannel(argument: _lnrpc_AbandonChannelRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  abandonChannel(argument: _lnrpc_AbandonChannelRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_AbandonChannelResponse__Output) => void): grpc.ClientUnaryCall;
  
  AddInvoice(argument: _lnrpc_Invoice, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  AddInvoice(argument: _lnrpc_Invoice, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  AddInvoice(argument: _lnrpc_Invoice, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  AddInvoice(argument: _lnrpc_Invoice, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_Invoice, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_Invoice, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_Invoice, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  addInvoice(argument: _lnrpc_Invoice, callback: (error?: grpc.ServiceError, result?: _lnrpc_AddInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  BakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  bakeMacaroon(argument: _lnrpc_BakeMacaroonRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_BakeMacaroonResponse__Output) => void): grpc.ClientUnaryCall;
  
  ChannelAcceptor(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequest__Output>;
  ChannelAcceptor(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequest__Output>;
  channelAcceptor(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequest__Output>;
  channelAcceptor(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequest__Output>;
  
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  ChannelBalance(argument: _lnrpc_ChannelBalanceRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  channelBalance(argument: _lnrpc_ChannelBalanceRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  
  CloseChannel(argument: _lnrpc_CloseChannelRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate__Output>;
  CloseChannel(argument: _lnrpc_CloseChannelRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate__Output>;
  closeChannel(argument: _lnrpc_CloseChannelRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate__Output>;
  closeChannel(argument: _lnrpc_CloseChannelRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_CloseStatusUpdate__Output>;
  
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  ClosedChannels(argument: _lnrpc_ClosedChannelsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  closedChannels(argument: _lnrpc_ClosedChannelsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ClosedChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ConnectPeer(argument: _lnrpc_ConnectPeerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  ConnectPeer(argument: _lnrpc_ConnectPeerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  ConnectPeer(argument: _lnrpc_ConnectPeerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  ConnectPeer(argument: _lnrpc_ConnectPeerRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  connectPeer(argument: _lnrpc_ConnectPeerRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ConnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  
  DebugLevel(argument: _lnrpc_DebugLevelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  DebugLevel(argument: _lnrpc_DebugLevelRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  DebugLevel(argument: _lnrpc_DebugLevelRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  DebugLevel(argument: _lnrpc_DebugLevelRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  debugLevel(argument: _lnrpc_DebugLevelRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DebugLevelResponse__Output) => void): grpc.ClientUnaryCall;
  
  DecodePayReq(argument: _lnrpc_PayReqString, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  DecodePayReq(argument: _lnrpc_PayReqString, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  DecodePayReq(argument: _lnrpc_PayReqString, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  DecodePayReq(argument: _lnrpc_PayReqString, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqString, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqString, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqString, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  decodePayReq(argument: _lnrpc_PayReqString, callback: (error?: grpc.ServiceError, result?: _lnrpc_PayReq__Output) => void): grpc.ClientUnaryCall;
  
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  deleteAllPayments(argument: _lnrpc_DeleteAllPaymentsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteAllPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  DeleteMacaroonID(argument: _lnrpc_DeleteMacaroonIDRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  deleteMacaroonId(argument: _lnrpc_DeleteMacaroonIDRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DeleteMacaroonIDResponse__Output) => void): grpc.ClientUnaryCall;
  
  DescribeGraph(argument: _lnrpc_ChannelGraphRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  DescribeGraph(argument: _lnrpc_ChannelGraphRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  DescribeGraph(argument: _lnrpc_ChannelGraphRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  DescribeGraph(argument: _lnrpc_ChannelGraphRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  describeGraph(argument: _lnrpc_ChannelGraphRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelGraph__Output) => void): grpc.ClientUnaryCall;
  
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  DisconnectPeer(argument: _lnrpc_DisconnectPeerRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  disconnectPeer(argument: _lnrpc_DisconnectPeerRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_DisconnectPeerResponse__Output) => void): grpc.ClientUnaryCall;
  
  EstimateFee(argument: _lnrpc_EstimateFeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  EstimateFee(argument: _lnrpc_EstimateFeeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  EstimateFee(argument: _lnrpc_EstimateFeeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  EstimateFee(argument: _lnrpc_EstimateFeeRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  estimateFee(argument: _lnrpc_EstimateFeeRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_EstimateFeeResponse__Output) => void): grpc.ClientUnaryCall;
  
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  ExportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  exportAllChannelBackups(argument: _lnrpc_ChanBackupExportRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChanBackupSnapshot__Output) => void): grpc.ClientUnaryCall;
  
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  ExportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  exportChannelBackup(argument: _lnrpc_ExportChannelBackupRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelBackup__Output) => void): grpc.ClientUnaryCall;
  
  FeeReport(argument: _lnrpc_FeeReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  FeeReport(argument: _lnrpc_FeeReportRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  FeeReport(argument: _lnrpc_FeeReportRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  FeeReport(argument: _lnrpc_FeeReportRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  feeReport(argument: _lnrpc_FeeReportRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_FeeReportResponse__Output) => void): grpc.ClientUnaryCall;
  
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  ForwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  forwardingHistory(argument: _lnrpc_ForwardingHistoryRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ForwardingHistoryResponse__Output) => void): grpc.ClientUnaryCall;
  
  FundingStateStep(argument: _lnrpc_FundingTransitionMsg, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  FundingStateStep(argument: _lnrpc_FundingTransitionMsg, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  FundingStateStep(argument: _lnrpc_FundingTransitionMsg, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  FundingStateStep(argument: _lnrpc_FundingTransitionMsg, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsg, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsg, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsg, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  fundingStateStep(argument: _lnrpc_FundingTransitionMsg, callback: (error?: grpc.ServiceError, result?: _lnrpc_FundingStateStepResp__Output) => void): grpc.ClientUnaryCall;
  
  GetChanInfo(argument: _lnrpc_ChanInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  GetChanInfo(argument: _lnrpc_ChanInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  GetChanInfo(argument: _lnrpc_ChanInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  GetChanInfo(argument: _lnrpc_ChanInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  getChanInfo(argument: _lnrpc_ChanInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelEdge__Output) => void): grpc.ClientUnaryCall;
  
  GetInfo(argument: _lnrpc_GetInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  GetInfo(argument: _lnrpc_GetInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  GetInfo(argument: _lnrpc_GetInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  GetInfo(argument: _lnrpc_GetInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getInfo(argument: _lnrpc_GetInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetInfoResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  GetNetworkInfo(argument: _lnrpc_NetworkInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  getNetworkInfo(argument: _lnrpc_NetworkInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NetworkInfo__Output) => void): grpc.ClientUnaryCall;
  
  GetNodeInfo(argument: _lnrpc_NodeInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  GetNodeInfo(argument: _lnrpc_NodeInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  GetNodeInfo(argument: _lnrpc_NodeInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  GetNodeInfo(argument: _lnrpc_NodeInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  getNodeInfo(argument: _lnrpc_NodeInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeInfo__Output) => void): grpc.ClientUnaryCall;
  
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  GetNodeMetrics(argument: _lnrpc_NodeMetricsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  getNodeMetrics(argument: _lnrpc_NodeMetricsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NodeMetricsResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  GetRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  getRecoveryInfo(argument: _lnrpc_GetRecoveryInfoRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_GetRecoveryInfoResponse__Output) => void): grpc.ClientUnaryCall;
  
  GetTransactions(argument: _lnrpc_GetTransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  GetTransactions(argument: _lnrpc_GetTransactionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  GetTransactions(argument: _lnrpc_GetTransactionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  GetTransactions(argument: _lnrpc_GetTransactionsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  getTransactions(argument: _lnrpc_GetTransactionsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_TransactionDetails__Output) => void): grpc.ClientUnaryCall;
  
  ListChannels(argument: _lnrpc_ListChannelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  ListChannels(argument: _lnrpc_ListChannelsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  ListChannels(argument: _lnrpc_ListChannelsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  ListChannels(argument: _lnrpc_ListChannelsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  listChannels(argument: _lnrpc_ListChannelsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListInvoices(argument: _lnrpc_ListInvoiceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  ListInvoices(argument: _lnrpc_ListInvoiceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  ListInvoices(argument: _lnrpc_ListInvoiceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  ListInvoices(argument: _lnrpc_ListInvoiceRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  listInvoices(argument: _lnrpc_ListInvoiceRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListInvoiceResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  ListMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  listMacaroonIDs(argument: _lnrpc_ListMacaroonIDsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListMacaroonIDsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListPayments(argument: _lnrpc_ListPaymentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPayments(argument: _lnrpc_ListPaymentsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPayments(argument: _lnrpc_ListPaymentsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPayments(argument: _lnrpc_ListPaymentsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  listPayments(argument: _lnrpc_ListPaymentsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPaymentsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListPeers(argument: _lnrpc_ListPeersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  ListPeers(argument: _lnrpc_ListPeersRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  ListPeers(argument: _lnrpc_ListPeersRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  ListPeers(argument: _lnrpc_ListPeersRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  listPeers(argument: _lnrpc_ListPeersRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPeersResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListPermissions(argument: _lnrpc_ListPermissionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPermissions(argument: _lnrpc_ListPermissionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPermissions(argument: _lnrpc_ListPermissionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPermissions(argument: _lnrpc_ListPermissionsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  listPermissions(argument: _lnrpc_ListPermissionsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListPermissionsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListUnspent(argument: _lnrpc_ListUnspentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  ListUnspent(argument: _lnrpc_ListUnspentRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  ListUnspent(argument: _lnrpc_ListUnspentRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  ListUnspent(argument: _lnrpc_ListUnspentRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  listUnspent(argument: _lnrpc_ListUnspentRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ListUnspentResponse__Output) => void): grpc.ClientUnaryCall;
  
  LookupInvoice(argument: _lnrpc_PaymentHash, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  LookupInvoice(argument: _lnrpc_PaymentHash, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  LookupInvoice(argument: _lnrpc_PaymentHash, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  LookupInvoice(argument: _lnrpc_PaymentHash, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHash, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHash, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHash, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  lookupInvoice(argument: _lnrpc_PaymentHash, callback: (error?: grpc.ServiceError, result?: _lnrpc_Invoice__Output) => void): grpc.ClientUnaryCall;
  
  NewAddress(argument: _lnrpc_NewAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  NewAddress(argument: _lnrpc_NewAddressRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  NewAddress(argument: _lnrpc_NewAddressRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  NewAddress(argument: _lnrpc_NewAddressRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  newAddress(argument: _lnrpc_NewAddressRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_NewAddressResponse__Output) => void): grpc.ClientUnaryCall;
  
  OpenChannel(argument: _lnrpc_OpenChannelRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate__Output>;
  OpenChannel(argument: _lnrpc_OpenChannelRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate__Output>;
  openChannel(argument: _lnrpc_OpenChannelRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate__Output>;
  openChannel(argument: _lnrpc_OpenChannelRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_OpenStatusUpdate__Output>;
  
  OpenChannelSync(argument: _lnrpc_OpenChannelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  OpenChannelSync(argument: _lnrpc_OpenChannelRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  OpenChannelSync(argument: _lnrpc_OpenChannelRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  OpenChannelSync(argument: _lnrpc_OpenChannelRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  openChannelSync(argument: _lnrpc_OpenChannelRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_ChannelPoint__Output) => void): grpc.ClientUnaryCall;
  
  PendingChannels(argument: _lnrpc_PendingChannelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  PendingChannels(argument: _lnrpc_PendingChannelsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  PendingChannels(argument: _lnrpc_PendingChannelsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  PendingChannels(argument: _lnrpc_PendingChannelsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  pendingChannels(argument: _lnrpc_PendingChannelsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_PendingChannelsResponse__Output) => void): grpc.ClientUnaryCall;
  
  QueryRoutes(argument: _lnrpc_QueryRoutesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  QueryRoutes(argument: _lnrpc_QueryRoutesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  QueryRoutes(argument: _lnrpc_QueryRoutesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  QueryRoutes(argument: _lnrpc_QueryRoutesRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  queryRoutes(argument: _lnrpc_QueryRoutesRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_QueryRoutesResponse__Output) => void): grpc.ClientUnaryCall;
  
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  RestoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  restoreChannelBackups(argument: _lnrpc_RestoreChanBackupRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_RestoreBackupResponse__Output) => void): grpc.ClientUnaryCall;
  
  SendCoins(argument: _lnrpc_SendCoinsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  SendCoins(argument: _lnrpc_SendCoinsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  SendCoins(argument: _lnrpc_SendCoinsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  SendCoins(argument: _lnrpc_SendCoinsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  sendCoins(argument: _lnrpc_SendCoinsRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendCoinsResponse__Output) => void): grpc.ClientUnaryCall;
  
  SendMany(argument: _lnrpc_SendManyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  SendMany(argument: _lnrpc_SendManyRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  SendMany(argument: _lnrpc_SendManyRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  SendMany(argument: _lnrpc_SendManyRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  sendMany(argument: _lnrpc_SendManyRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendManyResponse__Output) => void): grpc.ClientUnaryCall;
  
  SendPayment(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequest, _lnrpc_SendResponse__Output>;
  SendPayment(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequest, _lnrpc_SendResponse__Output>;
  sendPayment(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequest, _lnrpc_SendResponse__Output>;
  sendPayment(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendRequest, _lnrpc_SendResponse__Output>;
  
  SendPaymentSync(argument: _lnrpc_SendRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  SendPaymentSync(argument: _lnrpc_SendRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  SendPaymentSync(argument: _lnrpc_SendRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  SendPaymentSync(argument: _lnrpc_SendRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendPaymentSync(argument: _lnrpc_SendRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  
  SendToRoute(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequest, _lnrpc_SendResponse__Output>;
  SendToRoute(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequest, _lnrpc_SendResponse__Output>;
  sendToRoute(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequest, _lnrpc_SendResponse__Output>;
  sendToRoute(options?: grpc.CallOptions): grpc.ClientDuplexStream<_lnrpc_SendToRouteRequest, _lnrpc_SendResponse__Output>;
  
  SendToRouteSync(argument: _lnrpc_SendToRouteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  SendToRouteSync(argument: _lnrpc_SendToRouteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  SendToRouteSync(argument: _lnrpc_SendToRouteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  SendToRouteSync(argument: _lnrpc_SendToRouteRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  sendToRouteSync(argument: _lnrpc_SendToRouteRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SendResponse__Output) => void): grpc.ClientUnaryCall;
  
  SignMessage(argument: _lnrpc_SignMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  SignMessage(argument: _lnrpc_SignMessageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  SignMessage(argument: _lnrpc_SignMessageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  SignMessage(argument: _lnrpc_SignMessageRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  signMessage(argument: _lnrpc_SignMessageRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_SignMessageResponse__Output) => void): grpc.ClientUnaryCall;
  
  StopDaemon(argument: _lnrpc_StopRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  StopDaemon(argument: _lnrpc_StopRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  StopDaemon(argument: _lnrpc_StopRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  StopDaemon(argument: _lnrpc_StopRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  stopDaemon(argument: _lnrpc_StopRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_StopResponse__Output) => void): grpc.ClientUnaryCall;
  
  SubscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot__Output>;
  SubscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot__Output>;
  subscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot__Output>;
  subscribeChannelBackups(argument: _lnrpc_ChannelBackupSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChanBackupSnapshot__Output>;
  
  SubscribeChannelEvents(argument: _lnrpc_ChannelEventSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate__Output>;
  SubscribeChannelEvents(argument: _lnrpc_ChannelEventSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate__Output>;
  subscribeChannelEvents(argument: _lnrpc_ChannelEventSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate__Output>;
  subscribeChannelEvents(argument: _lnrpc_ChannelEventSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_ChannelEventUpdate__Output>;
  
  SubscribeChannelGraph(argument: _lnrpc_GraphTopologySubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate__Output>;
  SubscribeChannelGraph(argument: _lnrpc_GraphTopologySubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate__Output>;
  subscribeChannelGraph(argument: _lnrpc_GraphTopologySubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate__Output>;
  subscribeChannelGraph(argument: _lnrpc_GraphTopologySubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_GraphTopologyUpdate__Output>;
  
  SubscribeInvoices(argument: _lnrpc_InvoiceSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice__Output>;
  SubscribeInvoices(argument: _lnrpc_InvoiceSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice__Output>;
  subscribeInvoices(argument: _lnrpc_InvoiceSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice__Output>;
  subscribeInvoices(argument: _lnrpc_InvoiceSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Invoice__Output>;
  
  SubscribePeerEvents(argument: _lnrpc_PeerEventSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent__Output>;
  SubscribePeerEvents(argument: _lnrpc_PeerEventSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent__Output>;
  subscribePeerEvents(argument: _lnrpc_PeerEventSubscription, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent__Output>;
  subscribePeerEvents(argument: _lnrpc_PeerEventSubscription, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_PeerEvent__Output>;
  
  SubscribeTransactions(argument: _lnrpc_GetTransactionsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction__Output>;
  SubscribeTransactions(argument: _lnrpc_GetTransactionsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction__Output>;
  subscribeTransactions(argument: _lnrpc_GetTransactionsRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction__Output>;
  subscribeTransactions(argument: _lnrpc_GetTransactionsRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_lnrpc_Transaction__Output>;
  
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  updateChannelPolicy(argument: _lnrpc_PolicyUpdateRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_PolicyUpdateResponse__Output) => void): grpc.ClientUnaryCall;
  
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  VerifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  verifyChanBackup(argument: _lnrpc_ChanBackupSnapshot, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyChanBackupResponse__Output) => void): grpc.ClientUnaryCall;
  
  VerifyMessage(argument: _lnrpc_VerifyMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  VerifyMessage(argument: _lnrpc_VerifyMessageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  VerifyMessage(argument: _lnrpc_VerifyMessageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  VerifyMessage(argument: _lnrpc_VerifyMessageRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  verifyMessage(argument: _lnrpc_VerifyMessageRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_VerifyMessageResponse__Output) => void): grpc.ClientUnaryCall;
  
  WalletBalance(argument: _lnrpc_WalletBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  WalletBalance(argument: _lnrpc_WalletBalanceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  WalletBalance(argument: _lnrpc_WalletBalanceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  WalletBalance(argument: _lnrpc_WalletBalanceRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  walletBalance(argument: _lnrpc_WalletBalanceRequest, callback: (error?: grpc.ServiceError, result?: _lnrpc_WalletBalanceResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface LightningHandlers extends grpc.UntypedServiceImplementation {
  AbandonChannel: grpc.handleUnaryCall<_lnrpc_AbandonChannelRequest__Output, _lnrpc_AbandonChannelResponse>;
  
  AddInvoice: grpc.handleUnaryCall<_lnrpc_Invoice__Output, _lnrpc_AddInvoiceResponse>;
  
  BakeMacaroon: grpc.handleUnaryCall<_lnrpc_BakeMacaroonRequest__Output, _lnrpc_BakeMacaroonResponse>;
  
  ChannelAcceptor: grpc.handleBidiStreamingCall<_lnrpc_ChannelAcceptResponse__Output, _lnrpc_ChannelAcceptRequest>;
  
  ChannelBalance: grpc.handleUnaryCall<_lnrpc_ChannelBalanceRequest__Output, _lnrpc_ChannelBalanceResponse>;
  
  CloseChannel: grpc.handleServerStreamingCall<_lnrpc_CloseChannelRequest__Output, _lnrpc_CloseStatusUpdate>;
  
  ClosedChannels: grpc.handleUnaryCall<_lnrpc_ClosedChannelsRequest__Output, _lnrpc_ClosedChannelsResponse>;
  
  ConnectPeer: grpc.handleUnaryCall<_lnrpc_ConnectPeerRequest__Output, _lnrpc_ConnectPeerResponse>;
  
  DebugLevel: grpc.handleUnaryCall<_lnrpc_DebugLevelRequest__Output, _lnrpc_DebugLevelResponse>;
  
  DecodePayReq: grpc.handleUnaryCall<_lnrpc_PayReqString__Output, _lnrpc_PayReq>;
  
  DeleteAllPayments: grpc.handleUnaryCall<_lnrpc_DeleteAllPaymentsRequest__Output, _lnrpc_DeleteAllPaymentsResponse>;
  
  DeleteMacaroonID: grpc.handleUnaryCall<_lnrpc_DeleteMacaroonIDRequest__Output, _lnrpc_DeleteMacaroonIDResponse>;
  
  DescribeGraph: grpc.handleUnaryCall<_lnrpc_ChannelGraphRequest__Output, _lnrpc_ChannelGraph>;
  
  DisconnectPeer: grpc.handleUnaryCall<_lnrpc_DisconnectPeerRequest__Output, _lnrpc_DisconnectPeerResponse>;
  
  EstimateFee: grpc.handleUnaryCall<_lnrpc_EstimateFeeRequest__Output, _lnrpc_EstimateFeeResponse>;
  
  ExportAllChannelBackups: grpc.handleUnaryCall<_lnrpc_ChanBackupExportRequest__Output, _lnrpc_ChanBackupSnapshot>;
  
  ExportChannelBackup: grpc.handleUnaryCall<_lnrpc_ExportChannelBackupRequest__Output, _lnrpc_ChannelBackup>;
  
  FeeReport: grpc.handleUnaryCall<_lnrpc_FeeReportRequest__Output, _lnrpc_FeeReportResponse>;
  
  ForwardingHistory: grpc.handleUnaryCall<_lnrpc_ForwardingHistoryRequest__Output, _lnrpc_ForwardingHistoryResponse>;
  
  FundingStateStep: grpc.handleUnaryCall<_lnrpc_FundingTransitionMsg__Output, _lnrpc_FundingStateStepResp>;
  
  GetChanInfo: grpc.handleUnaryCall<_lnrpc_ChanInfoRequest__Output, _lnrpc_ChannelEdge>;
  
  GetInfo: grpc.handleUnaryCall<_lnrpc_GetInfoRequest__Output, _lnrpc_GetInfoResponse>;
  
  GetNetworkInfo: grpc.handleUnaryCall<_lnrpc_NetworkInfoRequest__Output, _lnrpc_NetworkInfo>;
  
  GetNodeInfo: grpc.handleUnaryCall<_lnrpc_NodeInfoRequest__Output, _lnrpc_NodeInfo>;
  
  GetNodeMetrics: grpc.handleUnaryCall<_lnrpc_NodeMetricsRequest__Output, _lnrpc_NodeMetricsResponse>;
  
  GetRecoveryInfo: grpc.handleUnaryCall<_lnrpc_GetRecoveryInfoRequest__Output, _lnrpc_GetRecoveryInfoResponse>;
  
  GetTransactions: grpc.handleUnaryCall<_lnrpc_GetTransactionsRequest__Output, _lnrpc_TransactionDetails>;
  
  ListChannels: grpc.handleUnaryCall<_lnrpc_ListChannelsRequest__Output, _lnrpc_ListChannelsResponse>;
  
  ListInvoices: grpc.handleUnaryCall<_lnrpc_ListInvoiceRequest__Output, _lnrpc_ListInvoiceResponse>;
  
  ListMacaroonIDs: grpc.handleUnaryCall<_lnrpc_ListMacaroonIDsRequest__Output, _lnrpc_ListMacaroonIDsResponse>;
  
  ListPayments: grpc.handleUnaryCall<_lnrpc_ListPaymentsRequest__Output, _lnrpc_ListPaymentsResponse>;
  
  ListPeers: grpc.handleUnaryCall<_lnrpc_ListPeersRequest__Output, _lnrpc_ListPeersResponse>;
  
  ListPermissions: grpc.handleUnaryCall<_lnrpc_ListPermissionsRequest__Output, _lnrpc_ListPermissionsResponse>;
  
  ListUnspent: grpc.handleUnaryCall<_lnrpc_ListUnspentRequest__Output, _lnrpc_ListUnspentResponse>;
  
  LookupInvoice: grpc.handleUnaryCall<_lnrpc_PaymentHash__Output, _lnrpc_Invoice>;
  
  NewAddress: grpc.handleUnaryCall<_lnrpc_NewAddressRequest__Output, _lnrpc_NewAddressResponse>;
  
  OpenChannel: grpc.handleServerStreamingCall<_lnrpc_OpenChannelRequest__Output, _lnrpc_OpenStatusUpdate>;
  
  OpenChannelSync: grpc.handleUnaryCall<_lnrpc_OpenChannelRequest__Output, _lnrpc_ChannelPoint>;
  
  PendingChannels: grpc.handleUnaryCall<_lnrpc_PendingChannelsRequest__Output, _lnrpc_PendingChannelsResponse>;
  
  QueryRoutes: grpc.handleUnaryCall<_lnrpc_QueryRoutesRequest__Output, _lnrpc_QueryRoutesResponse>;
  
  RestoreChannelBackups: grpc.handleUnaryCall<_lnrpc_RestoreChanBackupRequest__Output, _lnrpc_RestoreBackupResponse>;
  
  SendCoins: grpc.handleUnaryCall<_lnrpc_SendCoinsRequest__Output, _lnrpc_SendCoinsResponse>;
  
  SendMany: grpc.handleUnaryCall<_lnrpc_SendManyRequest__Output, _lnrpc_SendManyResponse>;
  
  SendPayment: grpc.handleBidiStreamingCall<_lnrpc_SendRequest__Output, _lnrpc_SendResponse>;
  
  SendPaymentSync: grpc.handleUnaryCall<_lnrpc_SendRequest__Output, _lnrpc_SendResponse>;
  
  SendToRoute: grpc.handleBidiStreamingCall<_lnrpc_SendToRouteRequest__Output, _lnrpc_SendResponse>;
  
  SendToRouteSync: grpc.handleUnaryCall<_lnrpc_SendToRouteRequest__Output, _lnrpc_SendResponse>;
  
  SignMessage: grpc.handleUnaryCall<_lnrpc_SignMessageRequest__Output, _lnrpc_SignMessageResponse>;
  
  StopDaemon: grpc.handleUnaryCall<_lnrpc_StopRequest__Output, _lnrpc_StopResponse>;
  
  SubscribeChannelBackups: grpc.handleServerStreamingCall<_lnrpc_ChannelBackupSubscription__Output, _lnrpc_ChanBackupSnapshot>;
  
  SubscribeChannelEvents: grpc.handleServerStreamingCall<_lnrpc_ChannelEventSubscription__Output, _lnrpc_ChannelEventUpdate>;
  
  SubscribeChannelGraph: grpc.handleServerStreamingCall<_lnrpc_GraphTopologySubscription__Output, _lnrpc_GraphTopologyUpdate>;
  
  SubscribeInvoices: grpc.handleServerStreamingCall<_lnrpc_InvoiceSubscription__Output, _lnrpc_Invoice>;
  
  SubscribePeerEvents: grpc.handleServerStreamingCall<_lnrpc_PeerEventSubscription__Output, _lnrpc_PeerEvent>;
  
  SubscribeTransactions: grpc.handleServerStreamingCall<_lnrpc_GetTransactionsRequest__Output, _lnrpc_Transaction>;
  
  UpdateChannelPolicy: grpc.handleUnaryCall<_lnrpc_PolicyUpdateRequest__Output, _lnrpc_PolicyUpdateResponse>;
  
  VerifyChanBackup: grpc.handleUnaryCall<_lnrpc_ChanBackupSnapshot__Output, _lnrpc_VerifyChanBackupResponse>;
  
  VerifyMessage: grpc.handleUnaryCall<_lnrpc_VerifyMessageRequest__Output, _lnrpc_VerifyMessageResponse>;
  
  WalletBalance: grpc.handleUnaryCall<_lnrpc_WalletBalanceRequest__Output, _lnrpc_WalletBalanceResponse>;
  
}

export interface LightningDefinition extends grpc.ServiceDefinition {
  AbandonChannel: MethodDefinition<_lnrpc_AbandonChannelRequest, _lnrpc_AbandonChannelResponse, _lnrpc_AbandonChannelRequest__Output, _lnrpc_AbandonChannelResponse__Output>
  AddInvoice: MethodDefinition<_lnrpc_Invoice, _lnrpc_AddInvoiceResponse, _lnrpc_Invoice__Output, _lnrpc_AddInvoiceResponse__Output>
  BakeMacaroon: MethodDefinition<_lnrpc_BakeMacaroonRequest, _lnrpc_BakeMacaroonResponse, _lnrpc_BakeMacaroonRequest__Output, _lnrpc_BakeMacaroonResponse__Output>
  ChannelAcceptor: MethodDefinition<_lnrpc_ChannelAcceptResponse, _lnrpc_ChannelAcceptRequest, _lnrpc_ChannelAcceptResponse__Output, _lnrpc_ChannelAcceptRequest__Output>
  ChannelBalance: MethodDefinition<_lnrpc_ChannelBalanceRequest, _lnrpc_ChannelBalanceResponse, _lnrpc_ChannelBalanceRequest__Output, _lnrpc_ChannelBalanceResponse__Output>
  CloseChannel: MethodDefinition<_lnrpc_CloseChannelRequest, _lnrpc_CloseStatusUpdate, _lnrpc_CloseChannelRequest__Output, _lnrpc_CloseStatusUpdate__Output>
  ClosedChannels: MethodDefinition<_lnrpc_ClosedChannelsRequest, _lnrpc_ClosedChannelsResponse, _lnrpc_ClosedChannelsRequest__Output, _lnrpc_ClosedChannelsResponse__Output>
  ConnectPeer: MethodDefinition<_lnrpc_ConnectPeerRequest, _lnrpc_ConnectPeerResponse, _lnrpc_ConnectPeerRequest__Output, _lnrpc_ConnectPeerResponse__Output>
  DebugLevel: MethodDefinition<_lnrpc_DebugLevelRequest, _lnrpc_DebugLevelResponse, _lnrpc_DebugLevelRequest__Output, _lnrpc_DebugLevelResponse__Output>
  DecodePayReq: MethodDefinition<_lnrpc_PayReqString, _lnrpc_PayReq, _lnrpc_PayReqString__Output, _lnrpc_PayReq__Output>
  DeleteAllPayments: MethodDefinition<_lnrpc_DeleteAllPaymentsRequest, _lnrpc_DeleteAllPaymentsResponse, _lnrpc_DeleteAllPaymentsRequest__Output, _lnrpc_DeleteAllPaymentsResponse__Output>
  DeleteMacaroonID: MethodDefinition<_lnrpc_DeleteMacaroonIDRequest, _lnrpc_DeleteMacaroonIDResponse, _lnrpc_DeleteMacaroonIDRequest__Output, _lnrpc_DeleteMacaroonIDResponse__Output>
  DescribeGraph: MethodDefinition<_lnrpc_ChannelGraphRequest, _lnrpc_ChannelGraph, _lnrpc_ChannelGraphRequest__Output, _lnrpc_ChannelGraph__Output>
  DisconnectPeer: MethodDefinition<_lnrpc_DisconnectPeerRequest, _lnrpc_DisconnectPeerResponse, _lnrpc_DisconnectPeerRequest__Output, _lnrpc_DisconnectPeerResponse__Output>
  EstimateFee: MethodDefinition<_lnrpc_EstimateFeeRequest, _lnrpc_EstimateFeeResponse, _lnrpc_EstimateFeeRequest__Output, _lnrpc_EstimateFeeResponse__Output>
  ExportAllChannelBackups: MethodDefinition<_lnrpc_ChanBackupExportRequest, _lnrpc_ChanBackupSnapshot, _lnrpc_ChanBackupExportRequest__Output, _lnrpc_ChanBackupSnapshot__Output>
  ExportChannelBackup: MethodDefinition<_lnrpc_ExportChannelBackupRequest, _lnrpc_ChannelBackup, _lnrpc_ExportChannelBackupRequest__Output, _lnrpc_ChannelBackup__Output>
  FeeReport: MethodDefinition<_lnrpc_FeeReportRequest, _lnrpc_FeeReportResponse, _lnrpc_FeeReportRequest__Output, _lnrpc_FeeReportResponse__Output>
  ForwardingHistory: MethodDefinition<_lnrpc_ForwardingHistoryRequest, _lnrpc_ForwardingHistoryResponse, _lnrpc_ForwardingHistoryRequest__Output, _lnrpc_ForwardingHistoryResponse__Output>
  FundingStateStep: MethodDefinition<_lnrpc_FundingTransitionMsg, _lnrpc_FundingStateStepResp, _lnrpc_FundingTransitionMsg__Output, _lnrpc_FundingStateStepResp__Output>
  GetChanInfo: MethodDefinition<_lnrpc_ChanInfoRequest, _lnrpc_ChannelEdge, _lnrpc_ChanInfoRequest__Output, _lnrpc_ChannelEdge__Output>
  GetInfo: MethodDefinition<_lnrpc_GetInfoRequest, _lnrpc_GetInfoResponse, _lnrpc_GetInfoRequest__Output, _lnrpc_GetInfoResponse__Output>
  GetNetworkInfo: MethodDefinition<_lnrpc_NetworkInfoRequest, _lnrpc_NetworkInfo, _lnrpc_NetworkInfoRequest__Output, _lnrpc_NetworkInfo__Output>
  GetNodeInfo: MethodDefinition<_lnrpc_NodeInfoRequest, _lnrpc_NodeInfo, _lnrpc_NodeInfoRequest__Output, _lnrpc_NodeInfo__Output>
  GetNodeMetrics: MethodDefinition<_lnrpc_NodeMetricsRequest, _lnrpc_NodeMetricsResponse, _lnrpc_NodeMetricsRequest__Output, _lnrpc_NodeMetricsResponse__Output>
  GetRecoveryInfo: MethodDefinition<_lnrpc_GetRecoveryInfoRequest, _lnrpc_GetRecoveryInfoResponse, _lnrpc_GetRecoveryInfoRequest__Output, _lnrpc_GetRecoveryInfoResponse__Output>
  GetTransactions: MethodDefinition<_lnrpc_GetTransactionsRequest, _lnrpc_TransactionDetails, _lnrpc_GetTransactionsRequest__Output, _lnrpc_TransactionDetails__Output>
  ListChannels: MethodDefinition<_lnrpc_ListChannelsRequest, _lnrpc_ListChannelsResponse, _lnrpc_ListChannelsRequest__Output, _lnrpc_ListChannelsResponse__Output>
  ListInvoices: MethodDefinition<_lnrpc_ListInvoiceRequest, _lnrpc_ListInvoiceResponse, _lnrpc_ListInvoiceRequest__Output, _lnrpc_ListInvoiceResponse__Output>
  ListMacaroonIDs: MethodDefinition<_lnrpc_ListMacaroonIDsRequest, _lnrpc_ListMacaroonIDsResponse, _lnrpc_ListMacaroonIDsRequest__Output, _lnrpc_ListMacaroonIDsResponse__Output>
  ListPayments: MethodDefinition<_lnrpc_ListPaymentsRequest, _lnrpc_ListPaymentsResponse, _lnrpc_ListPaymentsRequest__Output, _lnrpc_ListPaymentsResponse__Output>
  ListPeers: MethodDefinition<_lnrpc_ListPeersRequest, _lnrpc_ListPeersResponse, _lnrpc_ListPeersRequest__Output, _lnrpc_ListPeersResponse__Output>
  ListPermissions: MethodDefinition<_lnrpc_ListPermissionsRequest, _lnrpc_ListPermissionsResponse, _lnrpc_ListPermissionsRequest__Output, _lnrpc_ListPermissionsResponse__Output>
  ListUnspent: MethodDefinition<_lnrpc_ListUnspentRequest, _lnrpc_ListUnspentResponse, _lnrpc_ListUnspentRequest__Output, _lnrpc_ListUnspentResponse__Output>
  LookupInvoice: MethodDefinition<_lnrpc_PaymentHash, _lnrpc_Invoice, _lnrpc_PaymentHash__Output, _lnrpc_Invoice__Output>
  NewAddress: MethodDefinition<_lnrpc_NewAddressRequest, _lnrpc_NewAddressResponse, _lnrpc_NewAddressRequest__Output, _lnrpc_NewAddressResponse__Output>
  OpenChannel: MethodDefinition<_lnrpc_OpenChannelRequest, _lnrpc_OpenStatusUpdate, _lnrpc_OpenChannelRequest__Output, _lnrpc_OpenStatusUpdate__Output>
  OpenChannelSync: MethodDefinition<_lnrpc_OpenChannelRequest, _lnrpc_ChannelPoint, _lnrpc_OpenChannelRequest__Output, _lnrpc_ChannelPoint__Output>
  PendingChannels: MethodDefinition<_lnrpc_PendingChannelsRequest, _lnrpc_PendingChannelsResponse, _lnrpc_PendingChannelsRequest__Output, _lnrpc_PendingChannelsResponse__Output>
  QueryRoutes: MethodDefinition<_lnrpc_QueryRoutesRequest, _lnrpc_QueryRoutesResponse, _lnrpc_QueryRoutesRequest__Output, _lnrpc_QueryRoutesResponse__Output>
  RestoreChannelBackups: MethodDefinition<_lnrpc_RestoreChanBackupRequest, _lnrpc_RestoreBackupResponse, _lnrpc_RestoreChanBackupRequest__Output, _lnrpc_RestoreBackupResponse__Output>
  SendCoins: MethodDefinition<_lnrpc_SendCoinsRequest, _lnrpc_SendCoinsResponse, _lnrpc_SendCoinsRequest__Output, _lnrpc_SendCoinsResponse__Output>
  SendMany: MethodDefinition<_lnrpc_SendManyRequest, _lnrpc_SendManyResponse, _lnrpc_SendManyRequest__Output, _lnrpc_SendManyResponse__Output>
  SendPayment: MethodDefinition<_lnrpc_SendRequest, _lnrpc_SendResponse, _lnrpc_SendRequest__Output, _lnrpc_SendResponse__Output>
  SendPaymentSync: MethodDefinition<_lnrpc_SendRequest, _lnrpc_SendResponse, _lnrpc_SendRequest__Output, _lnrpc_SendResponse__Output>
  SendToRoute: MethodDefinition<_lnrpc_SendToRouteRequest, _lnrpc_SendResponse, _lnrpc_SendToRouteRequest__Output, _lnrpc_SendResponse__Output>
  SendToRouteSync: MethodDefinition<_lnrpc_SendToRouteRequest, _lnrpc_SendResponse, _lnrpc_SendToRouteRequest__Output, _lnrpc_SendResponse__Output>
  SignMessage: MethodDefinition<_lnrpc_SignMessageRequest, _lnrpc_SignMessageResponse, _lnrpc_SignMessageRequest__Output, _lnrpc_SignMessageResponse__Output>
  StopDaemon: MethodDefinition<_lnrpc_StopRequest, _lnrpc_StopResponse, _lnrpc_StopRequest__Output, _lnrpc_StopResponse__Output>
  SubscribeChannelBackups: MethodDefinition<_lnrpc_ChannelBackupSubscription, _lnrpc_ChanBackupSnapshot, _lnrpc_ChannelBackupSubscription__Output, _lnrpc_ChanBackupSnapshot__Output>
  SubscribeChannelEvents: MethodDefinition<_lnrpc_ChannelEventSubscription, _lnrpc_ChannelEventUpdate, _lnrpc_ChannelEventSubscription__Output, _lnrpc_ChannelEventUpdate__Output>
  SubscribeChannelGraph: MethodDefinition<_lnrpc_GraphTopologySubscription, _lnrpc_GraphTopologyUpdate, _lnrpc_GraphTopologySubscription__Output, _lnrpc_GraphTopologyUpdate__Output>
  SubscribeInvoices: MethodDefinition<_lnrpc_InvoiceSubscription, _lnrpc_Invoice, _lnrpc_InvoiceSubscription__Output, _lnrpc_Invoice__Output>
  SubscribePeerEvents: MethodDefinition<_lnrpc_PeerEventSubscription, _lnrpc_PeerEvent, _lnrpc_PeerEventSubscription__Output, _lnrpc_PeerEvent__Output>
  SubscribeTransactions: MethodDefinition<_lnrpc_GetTransactionsRequest, _lnrpc_Transaction, _lnrpc_GetTransactionsRequest__Output, _lnrpc_Transaction__Output>
  UpdateChannelPolicy: MethodDefinition<_lnrpc_PolicyUpdateRequest, _lnrpc_PolicyUpdateResponse, _lnrpc_PolicyUpdateRequest__Output, _lnrpc_PolicyUpdateResponse__Output>
  VerifyChanBackup: MethodDefinition<_lnrpc_ChanBackupSnapshot, _lnrpc_VerifyChanBackupResponse, _lnrpc_ChanBackupSnapshot__Output, _lnrpc_VerifyChanBackupResponse__Output>
  VerifyMessage: MethodDefinition<_lnrpc_VerifyMessageRequest, _lnrpc_VerifyMessageResponse, _lnrpc_VerifyMessageRequest__Output, _lnrpc_VerifyMessageResponse__Output>
  WalletBalance: MethodDefinition<_lnrpc_WalletBalanceRequest, _lnrpc_WalletBalanceResponse, _lnrpc_WalletBalanceRequest__Output, _lnrpc_WalletBalanceResponse__Output>
}
