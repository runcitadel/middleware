import constants from "../utils/const.js";
import * as diskService from "../services/disk.js";

export function readJWTPublicKeyFile(): Promise<string> {
  return diskService.readUtf8File(constants.JWT_PUBLIC_KEY_FILE);
}
