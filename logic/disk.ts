import * as fs from '@runcitadel/fs';
import constants from '../utils/const.js';

export async function readJWTPublicKeyFile(): Promise<string> {
  return fs.readUtf8File(constants.JWT_PUBLIC_KEY_FILE);
}
