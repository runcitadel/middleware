import Router from "@koa/router";
import { errorHandler, fs } from "@runcitadel/utils";
const router = new Router({
    prefix: "/v1/lnd/util",
});

import * as auth from "../../../middlewares/auth.js";
import constants from "../../../utils/const.js";
import * as lightningLogic from "../../../logic/lightning.js";

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

router.post(
    "/sign-message",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = { signature: lightningLogic.signMessage(ctx.request.body.message) };
        await next();
    }
);

export default router;
