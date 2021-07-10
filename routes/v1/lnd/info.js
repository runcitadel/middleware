import { Router } from 'express';
const router = Router();
import * as auth from '../../../middlewares/auth.js';
import { safeHandler } from '../../../utils/safeHandler.js';
import * as validator from '../../../utils/validator.js';
import * as lightningLogic from '../../../logic/lightning.js';
router.get('/uris', auth.jwt, safeHandler((req, res) => lightningLogic.getPublicUris()
    .then(uris => res.json(uris))));
//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get('/status', safeHandler((req, res) => lightningLogic.getStatus()
    .then(status => res.json(status))));
router.get('/sync', auth.jwt, safeHandler((req, res) => lightningLogic.getSyncStatus()
    .then(status => res.json(status))));
router.get('/version', auth.jwt, safeHandler((req, res) => lightningLogic.getVersion()
    .then(version => res.json(version))));
router.get('/alias', auth.jwt, safeHandler((req, res, next) => {
    const pubkey = req.query.pubkey;
    try {
        validator.isAlphanumeric(pubkey);
    }
    catch (error) {
        return next(error);
    }
    return lightningLogic.getNodeAlias(pubkey)
        .then(alias => res.json(alias));
}));
export default router;
