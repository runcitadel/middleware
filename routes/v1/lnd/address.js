import { Router } from 'express';
const router = Router();
import * as auth from '../../../middlewares/auth.js';
import { safeHandler } from '../../../utils/safeHandler.js';
import * as lightningLogic from '../../../logic/lightning.js';
router.get('/', auth.jwt, safeHandler((req, res) => lightningLogic.generateAddress()
    .then(address => res.json(address))));
export default router;
