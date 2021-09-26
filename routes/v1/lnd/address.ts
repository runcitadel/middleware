import Router from "@koa/router";
const router = new Router({
    prefix: "/v1/lnd/address"
});

import * as auth from "../../../middlewares/auth.js";

import * as lightningLogic from "../../../logic/lightning.js";
import { errorHandler } from "@runcitadel/utils";

router.use(errorHandler);

router.get(
    "/",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.generateAddress();
        await next();
    }
);

export default router;
