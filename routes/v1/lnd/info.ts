import Router from "@koa/router";
const router = new Router({
    prefix: "/v1/lnd/info"
});

import * as auth from "../../../middlewares/auth.js";
import { errorHandler, typeHelper } from "@runcitadel/utils";

router.use(errorHandler);

import * as lightningLogic from "../../../logic/lightning.js";

router.get(
    "/uris",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.getPublicUris();
        await next();
    }
);

//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get(
    "/status",
    async (ctx, next) => {
        ctx.body = await lightningLogic.getStatus();
        await next();
    }
);

router.get(
    "/sync",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.getSyncStatus();
        await next();
    }
);

router.get(
    "/version",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = { version: await lightningLogic.getVersion() };
        await next();
    }
);

router.get(
    "/alias",
    auth.jwt,
    async (ctx, next) => {
        const pubkey = ctx.request.query.pubkey as string;

        typeHelper.isAlphanumeric(pubkey, ctx);
        const alias = await lightningLogic.getNodeAlias(pubkey);
        ctx.body = {alias};
        await next();
    }
);

export default router;
