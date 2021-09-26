import Router from "@koa/router";
import { errorHandler, fs } from "@runcitadel/utils";
const router = new Router({
    prefix: "/v1/lnd/util",
});

import * as auth from "../../../middlewares/auth.js";
import constants from "../../../utils/const.js";

router.use(errorHandler);

router.get(
    "/download-channel-backup",
    auth.jwt,
    async (ctx, next) => {
        ctx.set('Content-disposition', 'attachment; filename=channel.backup');
        ctx.set('Content-type', 'application/octet-stream');
        ctx.body = fs.createReadStream(constants.CHANNEL_BACKUP_FILE);
        await next();
    }
);

export default router;
