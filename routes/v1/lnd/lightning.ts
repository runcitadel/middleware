import Router from '@koa/router';

import {errorHandler, typeHelper} from '@runcitadel/utils';
import * as auth from '../../../middlewares/auth.js';
import * as lightningLogic from '../../../logic/lightning.js';

const router = new Router({
  prefix: '/v1/lnd/lightning',
});

router.use(errorHandler);

router.post('/addInvoice', async (ctx, next) => {
  const amt = ctx.request.body.amt; // Denominated in Satoshi
  const memo = ctx.request.body.memo || '';

  typeHelper.isPositiveIntegerOrZero(amt, ctx);
  typeHelper.isValidMemoLength(memo, ctx);

  ctx.body = await lightningLogic.addInvoice(amt, memo);
  await next();
});

router.post('/addOffer', async (ctx, next) => {
  // Denominated in Satoshi
  // An offer of 0 sats is for any amount
  const amount = ctx.request.body.amount;
  const description = ctx.request.body.description || '';

  typeHelper.isPositiveIntegerOrZero(amount, ctx);
  typeHelper.isValidMemoLength(description, ctx);

  ctx.body = await lightningLogic.createOffer(
    amount === 0 ? 'any' : amount,
    description,
  );
  await next();
});

router.get('/forwardingEvents', auth.jwt, async (ctx, next) => {
  const startTime = ctx.request.query.startTime as string;
  const endTime = ctx.request.query.endTime as string;
  const indexOffset = ctx.request.query.indexOffset as string;

  if (startTime) {
    typeHelper.isPositiveIntegerOrZero(startTime, ctx);
  }

  if (endTime) {
    typeHelper.isPositiveIntegerOrZero(endTime, ctx);
  }

  if (indexOffset) {
    typeHelper.isPositiveIntegerOrZero(indexOffset, ctx);
  }

  ctx.body = await lightningLogic.getForwardingEvents(
    Number.parseInt(startTime),
    Number.parseInt(endTime),
    Number.parseInt(indexOffset),
  );
  await next();
});

router.get('/invoice', auth.jwt, async (ctx, next) => {
  const paymentRequest = ctx.request.query.paymentRequest as string;

  typeHelper.isAlphanumeric(paymentRequest, ctx);

  ctx.body = await lightningLogic.decodePaymentRequest(paymentRequest);
  await next();
});

router.get('/invoice-info', auth.jwt, async (ctx, next) => {
  const paymentHash = ctx.request.query.paymentHash as string;
  let data;

  try {
    data = await lightningLogic.getInvoice(paymentHash);
  } catch {
    data = {};
  }

  ctx.body = {
    ...data,
    isPaid: await lightningLogic.isSettled(paymentHash),
  };
  await next();
});

router.get('/invoices', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.getInvoices();
  await next();
});

router.post('/payInvoice', auth.jwt, async (ctx, next) => {
  const paymentRequest = ctx.request.body.paymentRequest;
  const amt = ctx.request.body.amt;

  typeHelper.isAlphanumeric(paymentRequest, ctx);

  if (amt) {
    typeHelper.isPositiveIntegerOrZero(amt, ctx);
  }

  const data = await lightningLogic.payInvoice(paymentRequest, amt);
  ctx.body = {
    ...data,
    paymentPreimage: data.paymentPreimage,
    paymentHash: data.paymentHash,
  };
  await next();
});

router.get('/payments', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.getPayments();
  await next();
});

export default router;
