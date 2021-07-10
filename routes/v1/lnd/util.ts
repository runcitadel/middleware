import {Router} from 'express';
const router = Router();

import * as auth from '../../../middlewares/auth.js';
import {safeHandler} from '../../../utils/safeHandler.js';
import * as applicationLogic from '../../../logic/application.js';

import type { Request, Response } from 'express';

router.get('/download-channel-backup', auth.jwt, safeHandler((req: Request, res: Response) =>
  applicationLogic.lndChannnelBackup()
    .then(backupFile => res.download(backupFile, 'channel.backup'))
));


export default router;
