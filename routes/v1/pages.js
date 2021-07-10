import { Router } from 'express';
const router = Router();
import * as pagesLogic from '../../logic/pages.js';
import * as auth from '../../middlewares/auth.js';
import { safeHandler } from '../../utils/safeHandler.js';
router.get('/lnd', auth.jwt, safeHandler((req, res) => pagesLogic.lndDetails()
    .then(address => res.json(address))));
export default router;
