import Router from '@koa/router';
import {errorHandler} from '@runcitadel/utils';
import BitcoinLogic from '../../../logic/bitcoin.js';
import * as auth from '../../../middlewares/auth.js';
import constants from '../../../utils/const.js';

const router = new Router({
  prefix: '/v1/bitcoin/info',
});

const bitcoinLogic = new BitcoinLogic();

router.use(errorHandler);

router.get('/isInstalled', auth.jwt, async (ctx, next) => {
  ctx.body = {
    installed: constants.IS_BITCOIN_CORE_INSTALLED,
  };
  await next();
});
router.get('/mempool', auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getMempoolInfo();
  await next();
});

router.get('/blockcount', auth.jwt, async (ctx, next) => {
  ctx.body = {
    count: await bitcoinLogic.getBlockCount(),
  };
  await next();
});

router.get('/connections', auth.jwt, async (ctx, next) => {
  ctx.body = {
    count: await bitcoinLogic.getConnectionsCount(),
  };
  await next();
});

router.get('/status', auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getStatus();
  await next();
});

router.get('/sync', auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getSyncStatus();
  await next();
});

router.get('/version', auth.jwt, async (ctx, next) => {
  ctx.body = {
    version: await bitcoinLogic.getVersion(),
  };
  await next();
});

router.get('/statsDump', auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.nodeStatusDump();
  await next();
});

router.get('/stats', auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.nodeStatusSummary();
  await next();
});

router.get('/block', auth.jwt, async (ctx, next) => {
  if (ctx.request.query.hash !== undefined && ctx.request.query.hash !== null) {
    ctx.body = await bitcoinLogic.getBlock(ctx.request.query.hash as string);
  } else if (
    ctx.request.query.height !== undefined &&
    ctx.request.query.height !== null
  ) {
    ctx.body = {
      hash: await bitcoinLogic.getBlockHash(
        Number.parseInt(ctx.request.query.height as string),
      ),
    };
  }

  await next();
});

router.get('/blocks', auth.jwt, async (ctx, next) => {
  const fromHeight = Number.parseInt(ctx.request.query.from as string);
  const toHeight = Number.parseInt(ctx.request.query.to as string);
  ctx.body = await bitcoinLogic.getBlocks(fromHeight, toHeight);
  await next();
});

router.get('/txid/:id', auth.jwt, async (ctx, next) => {
  ctx.body = await bitcoinLogic.getTransaction(ctx.params.id);
  await next();
});

export default router;
