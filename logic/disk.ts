import constants from "../utils/const.js";
import * as fs from "@runcitadel/fs";

export function readJWTPublicKeyFile(): Promise<string> {
  return fs.readUtf8File(constants.JWT_PUBLIC_KEY_FILE);
}
