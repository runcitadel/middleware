import Router from '@koa/router';
import {errorHandler} from '@runcitadel/utils';

import * as pagesLogic from '../../logic/pages.js';
import * as auth from '../../middlewares/auth.js';

const router = new Router({
  prefix: '/v1/pages',
});

router.use(errorHandler);

router.get('/lnd', auth.jwt, async (ctx, next) => {
  ctx.body = await pagesLogic.lndDetails();
  await next();
});

export default router;
