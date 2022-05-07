import process from 'node:process';
import {ILiquidClient} from './liquid/abstract.js';
import ElementsdClient from './liquid/elementsd.js';

const ELEMENTS_RPC_PORT: number = Number.parseInt(
  process.env.ELEMENTS_RPC_PORT ?? '8332',
);
const ELEMENTS_HOST = process.env.ELEMENTS_HOST ?? '127.0.0.1';
const ELEMENTS_RPC_USER = process.env.ELEMENTS_RPC_USER ?? '';
const ELEMENTS_RPC_PASSWORD = process.env.ELEMENTS_RPC_PASSWORD ?? '';

export default function getClient(): ILiquidClient {
  switch (process.env.LIQUID_IMPL) {
    case 'elementsd':
    case undefined:
      return new ElementsdClient(
        ELEMENTS_RPC_USER,
        ELEMENTS_RPC_PASSWORD,
        ELEMENTS_HOST,
        ELEMENTS_RPC_PORT,
      );
    default:
      throw new Error(
        `Unknown Liquid implementation: ${process.env.LIQUID_IMPL}`,
      );
  }
}
