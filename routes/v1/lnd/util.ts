import { Router } from "express";
const router = Router();

import * as auth from "../../../middlewares/auth.js";
import { safeHandler } from "@runcitadel/utils";
import constants from "../../../utils/const.js";

import type { Request, Response } from "express";

router.get(
    "/download-channel-backup",
    auth.jwt,
    safeHandler((req: Request, res: Response) => {
        res.download(constants.CHANNEL_BACKUP_FILE, "channel.backup");
    })
);

export default router;
