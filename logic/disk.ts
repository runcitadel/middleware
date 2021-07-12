import constants from "../utils/const.js";
import {fs_utils as diskService} from "@runcitadel/utils";

export function readJWTPublicKeyFile(): Promise<string> {
  return diskService.readUtf8File(constants.JWT_PUBLIC_KEY_FILE);
}
