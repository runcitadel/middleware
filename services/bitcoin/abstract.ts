export type MempoolInfo = {
  size: number;
  bytes: number;
  usage: number;
  maxmempol: number;
  mempoolminfee: number;
  minrelaytxfee: number;
};

export interface IBitcoinClient {
  getMempoolInfo(): Promise<MempoolInfo>;
}
