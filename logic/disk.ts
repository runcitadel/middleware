import {join} from 'node:path';
import type Buffer from 'node:buffer';
import * as fs from '@runcitadel/fs';
import constants from '../utils/const.js';

export async function readJWTPublicKeyFile(): Promise<string> {
  return fs.readUtf8File(constants.JWT_PUBLIC_KEY_FILE);
}

export async function readLndRestHiddenService(): Promise<string> {
  return readHiddenService('lnd-rest');
}

export async function readLndGrpcHiddenService(): Promise<string> {
  return readHiddenService('lnd-grpc');
}

export async function readLndCert(): Promise<string> {
  return fs.readUtf8File(constants.LND_CERT_FILE);
}

export async function readHiddenService(id: string): Promise<string> {
  if (!/^[\w-]+$/.test(id)) {
    throw new Error('Invalid hidden service ID');
  }

  const hiddenServiceFile = join(
    constants.TOR_HIDDEN_SERVICE_DIR,
    id,
    'hostname',
  );
  return fs.readUtf8File(hiddenServiceFile).then((contents) => contents.trim());
}

export async function readLndAdminMacaroon(): Promise<Buffer> {
  return fs.readFile(constants.LND_ADMIN_MACAROON_FILE);
}
