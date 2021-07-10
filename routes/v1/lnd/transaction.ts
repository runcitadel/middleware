import {Router} from 'express';
const router = Router();

import * as auth from '../../../middlewares/auth.js';
import {safeHandler} from '../../../utils/safeHandler.js';

import * as validator from '../../../utils/validator.js';
import * as lightningLogic from '../../../logic/lightning.js';

router.get('/', auth.jwt, safeHandler((req, res) =>
  lightningLogic.getOnChainTransactions()
    .then(transactions => res.json(transactions))
));

router.post('/', auth.jwt, safeHandler((req, res, next) => {

  const addr = req.body.addr;
  const amt = req.body.amt;
  const satPerByte = req.body.satPerByte;
  const sendAll = req.body.sendAll === true;

  try {
    // TODO: addr
    validator.isPositiveInteger(amt);
    validator.isBoolean(sendAll);
    if (satPerByte) {
      validator.isPositiveInteger(satPerByte);
    }
  } catch (error) {
    return next(error);
  }

  return lightningLogic.sendCoins(addr, amt, satPerByte, sendAll)
    .then(transaction => res.json(transaction));
}));

router.get('/estimateFee', auth.jwt, safeHandler(async(req, res, next) => {

  const address = <string>req.query.address;
  const amt = <string>req.query.amt; // Denominated in Satoshi
  const confTarget = <string>req.query.confTarget;
  const sweep = req.query.sweep === 'true';

  try {
    validator.isAlphanumeric(address);
    validator.isPositiveIntegerOrZero(confTarget);

    if (!sweep) {
      validator.isPositiveInteger(amt);
    }
  } catch (error) {
    return next(error);
  }

  return await lightningLogic.estimateFee(address, parseInt(amt, 10), parseInt(confTarget, 10), sweep)
    .then(response => res.json(response));
}));

export default router;
