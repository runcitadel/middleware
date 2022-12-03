import Router from '@koa/router';

import {errorHandler} from '@runcitadel/utils';
import * as auth from '../../../middlewares/auth.js';
import * as lightningLogic from '../../../logic/lightning.js';

const router = new Router({
  prefix: '/v1/lnd/lndconnect',
});

router.use(errorHandler);

router.get('/', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.getLndConnectUrls();
  await next();
});

export default router;
