import Router from "@koa/router";
const router = new Router({
  prefix: "/v1/bitcoind/info",
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
  ctx.body = await bitcoinLogic.getBlockCount();
  await next();
});

router.get("/connections", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getConnectionsCount();
  await next();
});

//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get("/status", async (ctx, next) => {
  ctx.body = await bitcoinLogic.getStatus();
  await next();
});

router.get("/sync", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getSyncStatus();
  await next();
});

router.get("/version", auth.jwt, async (ctx, next) => {
  ctx.body = JSON.stringify(await bitcoinLogic.getVersion());
  await next();
});

router.get("/statsDump", auth.jwt, async (ctx, next) => {
  const statusDump = await bitcoinLogic.nodeStatusDump();
  ctx.body = {
    blockchain_info: statusDump.blockchainInfo,
    network_info: statusDump.networkInfo,
    mempool: statusDump.mempoolInfo,
    mining_info: statusDump.miningInfo,
  };
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

// /v1/bitcoind/info/block/<hash>
router.get("/block/:id", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getBlock(ctx.params.id);
  await next();
});

router.get("/blocks", auth.jwt, async (ctx, next) => {
  const fromHeight = parseInt(<string>ctx.request.query.from);
  const toHeight = parseInt(<string>ctx.request.query.to);
  ctx.body = { blocks: await bitcoinLogic.getBlocks(fromHeight, toHeight) };
  await next();
});

router.get("/txid/:id", auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getTransaction(ctx.params.id);
  await next();
});

export default router;
