import Router from '@koa/router';
import {errorHandler} from '@runcitadel/utils';
import * as lightningLogic from '../../../logic/lightning.js';
import * as auth from '../../../middlewares/auth.js';

const router = new Router({
  prefix: '/v1/lnd/wallet',
});

router.use(errorHandler);

router.get('/btc', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.getWalletBalance();
  await next();
});

// Dummy endpoint
router.post('/changePassword', auth.jwt, async (ctx, next) => {
  ctx.status = 200;
  await next();
});

// Should not include auth because the user isn't registered yet. Once the user initializes a wallet, that wallet is
// locked and cannot be updated unless a full system reset is initiated.
router.post('/init', async (ctx, next) => {
  const seed: string[] = ctx.request.body.seed;
  if (!Array.isArray(seed)) throw new Error('Invalid seed');

  if (seed.length !== 24) {
    throw new Error('Invalid seed length');
  }

  await lightningLogic.initializeWallet(seed);
  ctx.status = 200;
  ctx.body = {
    success: true,
  };
  await next();
});

router.get('/lightning', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.getChannelBalance();
  await next();
});

// Should not include auth because the user isn't registered yet. The user can get a seed phrase as many times as they
// would like until the wallet has been initialized.
router.get('/seed', async (ctx, next) => {
  ctx.body = await lightningLogic.generateSeed();
  await next();
});

export default router;
