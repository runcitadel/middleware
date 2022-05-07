import Router from '@koa/router';
import {errorHandler} from '@runcitadel/utils';
import LiquidLogic from '../../../logic/liquid.js';
import * as auth from '../../../middlewares/auth.js';
import constants from '../../../utils/const.js';

const router = new Router({
  prefix: '/v1/liquid/info',
});

const liquidLogic = new LiquidLogic();

router.use(errorHandler);

router.get('/isInstalled', auth.jwt, async (ctx, next) => {
  ctx.body = {
    installed: constants.IS_LIQUID_INSTALLED,
  };
  await next();
});
router.get('/mempool', auth.jwt, async (ctx, next) => {
  ctx.body = await liquidLogic.getMempoolInfo();
  await next();
});

router.get('/blockcount', auth.jwt, async (ctx, next) => {
  ctx.body = {
    count: await liquidLogic.getBlockCount(),
  };
  await next();
});

router.get('/connections', auth.jwt, async (ctx, next) => {
  ctx.body = {
    count: await liquidLogic.getConnectionsCount(),
  };
  await next();
});

router.get('/status', auth.jwt, async (ctx, next) => {
  ctx.body = await liquidLogic.getStatus();
  await next();
});

router.get('/sync', auth.jwt, async (ctx, next) => {
  ctx.body = await liquidLogic.getSyncStatus();
  await next();
});

router.get('/version', auth.jwt, async (ctx, next) => {
  ctx.body = {
    version: await liquidLogic.getVersion(),
  };
  await next();
});

router.get('/statsDump', auth.jwt, async (ctx, next) => {
  ctx.body = await liquidLogic.nodeStatusDump();
  await next();
});

router.get('/stats', auth.jwt, async (ctx, next) => {
  ctx.body = await liquidLogic.nodeStatusSummary();
  await next();
});

router.get('/block', auth.jwt, async (ctx, next) => {
  if (ctx.request.query.hash !== undefined && ctx.request.query.hash !== null) {
    ctx.body = await liquidLogic.getBlock(ctx.request.query.hash as string);
  } else if (
    ctx.request.query.height !== undefined &&
    ctx.request.query.height !== null
  ) {
    ctx.body = {
      hash: await liquidLogic.getBlockHash(
        Number.parseInt(ctx.request.query.height as string),
      ),
    };
  }

  await next();
});

router.get('/blocks', auth.jwt, async (ctx, next) => {
  const fromHeight = Number.parseInt(ctx.request.query.from as string);
  const toHeight = Number.parseInt(ctx.request.query.to as string);
  ctx.body = await liquidLogic.getBlocks(fromHeight, toHeight);
  await next();
});

router.get('/txid/:id', auth.jwt, async (ctx, next) => {
  ctx.body = await liquidLogic.getTransaction(ctx.params.id);
  await next();
});

export default router;
