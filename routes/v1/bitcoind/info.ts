import Router from "@koa/router";
const router = new Router({
  prefix: "/v1/bitcoin/info",
});
import BitcoinLogic from "../../../logic/bitcoin.js";
import * as auth from "../../../middlewares/auth.js";

import { errorHandler } from "@runcitadel/utils";

const bitcoinLogic = new BitcoinLogic();

router.use(errorHandler);

router.get("/mempool", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getMempoolInfo();
  await next();
});

router.get("/blockcount", auth.jwt, async (ctx, next) => {
  ctx.body = {
    count: await bitcoinLogic.getBlockCount(),
  };
  await next();
});

router.get("/connections", auth.jwt, async (ctx, next) => {
  ctx.body = {
    count: await bitcoinLogic.getConnectionsCount(),
  };
  await next();
});

router.get("/status", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getStatus();
  await next();
});

router.get("/sync", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getSyncStatus();
  await next();
});

router.get("/version", auth.jwt, async (ctx, next) => {
  ctx.body = {
    version: await bitcoinLogic.getVersion(),
  };
  await next();
});

router.get("/statsDump", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.nodeStatusDump();
  await next();
});

router.get("/stats", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.nodeStatusSummary();
  await next();
});

router.get("/block", auth.jwt, async (ctx, next) => {
  if (ctx.request.query.hash !== undefined && ctx.request.query.hash !== null) {
    ctx.body = await bitcoinLogic.getBlock(<string>ctx.request.query.hash);
  } else if (
    ctx.request.query.height !== undefined &&
    ctx.request.query.height !== null
  ) {
    ctx.body = {
      hash: await bitcoinLogic.getBlockHash(
        parseInt(<string>ctx.request.query.height)
      ),
    };
  }
  await next();
});

router.get("/blocks", auth.jwt, async (ctx, next) => {
  const fromHeight = parseInt(<string>ctx.request.query.from);
  const toHeight = parseInt(<string>ctx.request.query.to);
  ctx.body = await bitcoinLogic.getBlocks(fromHeight, toHeight);
  await next();
});

router.get("/txid/:id", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getTransaction(ctx.params.id);
  await next();
});

export default router;
