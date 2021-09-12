import constants from "../utils/const.js";
import {fs} from "@runcitadel/utils";

export function readJWTPublicKeyFile(): Promise<string> {
  return fs.readUtf8File(constants.JWT_PUBLIC_KEY_FILE);
}
