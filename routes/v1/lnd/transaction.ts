import Router from '@koa/router';

import {errorHandler, typeHelper} from '@runcitadel/utils';
import * as auth from '../../../middlewares/auth.js';
import * as lightningLogic from '../../../logic/lightning.js';

const router = new Router({
  prefix: '/v1/lnd/transaction',
});

router.use(errorHandler);

router.get('/', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.getOnChainTransactions();
  await next();
});

router.post('/', auth.jwt, async (ctx, next) => {
  const addr = ctx.request.body.addr;
  const amt = ctx.request.body.amt;
  const satPerByte = ctx.request.body.satPerByte;
  const sendAll = ctx.request.body.sendAll === true;

  // TODO: addr
  typeHelper.isPositiveInteger(amt, ctx);
  typeHelper.isBoolean(sendAll, ctx);
  if (satPerByte) {
    typeHelper.isPositiveInteger(satPerByte, ctx);
  }

  ctx.body = await lightningLogic.sendCoins(addr, amt, satPerByte, sendAll);
  await next();
});

router.get('/estimateFee', auth.jwt, async (ctx, next) => {
  const address = ctx.request.query.address as string;
  const amt = ctx.request.query.amt as string; // Denominated in Satoshi
  const confTarget = ctx.request.query.confTarget as string;
  const sweep = ctx.request.query.sweep === 'true';

  typeHelper.isAlphanumeric(address, ctx);
  typeHelper.isPositiveIntegerOrZero(confTarget, ctx);

  if (!sweep) {
    typeHelper.isPositiveInteger(amt, ctx);
  }

  ctx.body = await lightningLogic.estimateFee(
    address,
    Number.parseInt(amt, 10),
    Number.parseInt(confTarget, 10),
    sweep,
  );
  await next();
});

export default router;
