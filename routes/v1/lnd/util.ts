import Router from '@koa/router';
import {errorHandler} from '@runcitadel/utils';
import * as fs from '@runcitadel/fs';

import * as auth from '../../../middlewares/auth.js';
import constants from '../../../utils/const.js';
import * as lightningLogic from '../../../logic/lightning.js';

const router = new Router({
  prefix: '/v1/lnd/util',
});

router.use(errorHandler);

router.get('/download-channel-backup', auth.jwt, async (ctx, next) => {
  if (fs.existsSync(constants.CHANNEL_BACKUP_FILE)) {
    ctx.body = fs.createReadStream(constants.CHANNEL_BACKUP_FILE);
    ctx.attachment('channel.backup');
  } else {
    ctx.throw(400, 'No channel backup exists');
  }
  await next();
});

router.post('/sign-message', auth.jwt, async (ctx, next) => {
  ctx.body = {
    signature: await lightningLogic.signMessage(ctx.request.body.message),
  };
  await next();
});
router.post('/verify-message', auth.jwt, async (ctx, next) => {
  ctx.body = await lightningLogic.verifyMessage(
    ctx.request.body.message,
    ctx.request.body.signature,
  );
  await next();
});

export default router;
