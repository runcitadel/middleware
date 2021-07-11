import express from "express";
const router = express.Router();
import * as lightningLogic from "../../../logic/lightning.js";
import * as auth from "../../../middlewares/auth.js";
import constants from "../../../utils/const.js";
import { safeHandler, validator } from "@runcitadel/utils";

import type { Request, Response } from "express";

router.get(
    "/btc",
    auth.jwt,
    safeHandler((req: Request, res: Response) =>
        lightningLogic.getWalletBalance().then((balance) => res.json(balance))
    )
);

// Dummy endpoint
router.post(
    "/changePassword",
    auth.jwt,
    safeHandler(async (req, res, next) => {
        const currentPassword = req.body.currentPassword;
        const newPassword = req.body.newPassword;

        try {
            validator.isString(currentPassword);
            validator.isMinPasswordLength(currentPassword);
      validator.isString(newPassword);
            validator.isMinPasswordLength(newPassword);
        } catch (error) {
            return next(error);
        }

        return res.status(constants.STATUS_CODES.OK).json();
    })
);

// Should not include auth because the user isn't registered yet. Once the user initializes a wallet, that wallet is
// locked and cannot be updated unless a full system reset is initiated.
router.post(
    "/init",
    safeHandler((req: Request, res: Response) => {
        const seed: string[] = req.body.seed;

        if (seed.length !== 24) {
      // eslint-disable-line no-magic-numbers
            throw new Error("Invalid seed length");
        }

        // TODO validate password requirements

        return lightningLogic
      .initializeWallet(seed)
            .then((response) => res.json(response));
    })
);

router.get(
    "/lightning",
    auth.jwt,
    safeHandler((req: Request, res: Response) =>
        lightningLogic.getChannelBalance().then((balance) => res.json(balance))
    )
);

// Should not include auth because the user isn't registered yet. The user can get a seed phrase as many times as they
// would like until the wallet has been initialized.
router.get(
    "/seed",
    safeHandler((req: Request, res: Response) =>
        lightningLogic.generateSeed().then((seed) => res.json(seed))
    )
);

export default router;
