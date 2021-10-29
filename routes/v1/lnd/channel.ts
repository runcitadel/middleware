import Router from "@koa/router";
const router = new Router({
    prefix: "/v1/lnd/channel"
});

import * as auth from "../../../middlewares/auth.js";

router.use(errorHandler);

import { errorHandler, typeHelper } from "@runcitadel/utils";
import * as lightningLogic from "../../../logic/lightning.js";

const DEFAULT_TIME_LOCK_DELTA = 144; // eslint-disable-line no-magic-numbers

router.get(
    "/",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.getChannels();
        await next();
    }
);

router.get(
    "/estimateFee",
    auth.jwt,
    async (ctx, next) => {
        const amt = ctx.request.query.amt as string; // Denominated in Satoshi
        const confTarget = ctx.request.query.confTarget as string;
        const sweep = ctx.request.query.sweep === "true";

        typeHelper.isPositiveIntegerOrZero(confTarget, ctx);
        typeHelper.isPositiveInteger(amt, ctx);

        ctx.body = await lightningLogic
            .estimateChannelOpenFee(
                parseInt(amt, 10),
                parseInt(confTarget, 10),
                sweep);
        await next();
    }
);

router.get(
    "/pending",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.getPendingChannels();
        await next();
    }
);

router.get(
    "/policy",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.getChannelPolicy();
        await next();
    }
);

router.put(
    "/policy",
    auth.jwt,
    async (ctx, next) => {
        const global = ctx.request.body.global || false;
        const chanPoint = ctx.request.body.chanPoint;
        const baseFeeMsat = ctx.request.body.baseFeeMsat;
        const feeRate = ctx.request.body.feeRate;
        const timeLockDelta = ctx.request.body.timeLockDelta || DEFAULT_TIME_LOCK_DELTA;
        let fundingTxid;
        let outputIndex;

        typeHelper.isBoolean(global, ctx);

        if (!global) {
            if(typeof chanPoint !== "string") throw new Error("Channel point isn't a string");
            [fundingTxid, outputIndex] = chanPoint.split(':');

            if (fundingTxid === undefined || outputIndex === undefined) {
                ctx.throw('Invalid channelPoint.');
            }

            typeHelper.isAlphanumeric(fundingTxid, ctx);
            typeHelper.isPositiveIntegerOrZero(outputIndex, ctx);
        }

        typeHelper.isPositiveIntegerOrZero(baseFeeMsat, ctx);
        typeHelper.isDecimal(feeRate + '', ctx);
        typeHelper.isPositiveInteger(timeLockDelta, ctx);

        ctx.body = await lightningLogic
            .updateChannelPolicy(
                global,
                fundingTxid,
                parseInt(outputIndex || "0", 10),
                baseFeeMsat,
                feeRate,
                timeLockDelta);
        await next();
    }
);

router.delete(
    "/close",
    auth.jwt,
    async (ctx, next) => {
        const channelPoint = ctx.request.body.channelPoint;
        const force = ctx.request.body.force;
        if(typeof channelPoint !== "string") throw new Error("Channel point isn't a string");

        const parts = channelPoint.split(":");

        if (parts.length !== 2) ctx.throw('Invalid channel point: ' + channelPoint);

        let fundingTxId = parts[0];
        let index = parseInt(parts[1], 10);

        typeHelper.isBoolean(force, ctx);
        ctx.body = await lightningLogic
            .closeChannel(fundingTxId, index, force);
        await next();
    }
);

router.get(
    "/count",
    auth.jwt,
    async (ctx, next) => {
        ctx.body = await lightningLogic.getChannelCount()
        await next();
    }
);

router.post(
    "/open",
    auth.jwt,
    async (ctx, next) => {
        const pubKey = ctx.request.body.pubKey;
        const ip = ctx.request.body.ip || "127.0.0.1";
        const port = ctx.request.body.port || 9735; // eslint-disable-line no-magic-numbers
        const amt = ctx.request.body.amt;
        const satPerByte = ctx.request.body.satPerByte;
        // TODO: Do something with these
        const name = ctx.request.body.name;
        const purpose = ctx.request.body.purpose;

        // TODO validate ip address as ip4 or ip6 address
        typeHelper.isAlphanumeric(pubKey, ctx);
        typeHelper.isPositiveInteger(port, ctx);
        typeHelper.isPositiveInteger(amt, ctx);
        if (satPerByte) {
            typeHelper.isPositiveInteger(satPerByte, ctx);
        }

        ctx.body = await lightningLogic
            .openChannel(pubKey, ip, port, amt, satPerByte);
        await next();
    }
);

router.post(
    "/openChannel",
    auth.jwt,
    async (ctx, next) => {
        const pubKey = ctx.request.body.pubKey;
        const ip = ctx.request.body.ip || "127.0.0.1";
        const port = ctx.request.body.port || 9735; // eslint-disable-line no-magic-numbers
        const amt = ctx.request.body.amt;
        const satPerByte = ctx.request.body.satPerByte;
        // TODO: Do something with these
        const name = ctx.request.body.name;
        const purpose = ctx.request.body.purpose;

        // TODO validate ip address as ip4 or ip6 address
        typeHelper.isAlphanumeric(pubKey, ctx);
        typeHelper.isPositiveInteger(port, ctx);
        typeHelper.isPositiveInteger(amt, ctx);
        if (satPerByte) {
            typeHelper.isPositiveInteger(satPerByte, ctx);
        }

        ctx.body = {
            fundingTxId: await lightningLogic.openChannel(pubKey, ip, port, amt, satPerByte)
        };
        await next();
    }
);

export default router;
