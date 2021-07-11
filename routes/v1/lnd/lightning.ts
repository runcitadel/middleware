import { Router } from "express";
const router = Router();

import * as auth from "../../../middlewares/auth.js";
import { safeHandler, validator } from "@runcitadel/utils";
import * as lightningLogic from "../../../logic/lightning.js";

router.post(
    "/addInvoice",
    safeHandler(async (req, res, next) => {
        const amt = req.body.amt; // Denominated in Satoshi
        const memo = req.body.memo || "";

        try {
            validator.isPositiveIntegerOrZero(amt);
      validator.isValidMemoLength(memo);
        } catch (error) {
      return next(error);
        }

        return await lightningLogic
      .addInvoice(amt, memo)
            .then((invoice) => res.json(invoice));
    })
);

router.get(
    "/forwardingEvents",
    auth.jwt,
    safeHandler((req, res, next) => {
        const startTime = <string>req.query.startTime;
        const endTime = <string>req.query.endTime;
        const indexOffset = <string>req.query.indexOffset;

        try {
            if (startTime) {
                validator.isPositiveIntegerOrZero(startTime);
            }
            if (endTime) {
                validator.isPositiveIntegerOrZero(endTime);
      }
            if (indexOffset) {
        validator.isPositiveIntegerOrZero(indexOffset);
            }
        } catch (error) {
            return next(error);
        }

        return lightningLogic
      .getForwardingEvents(startTime, endTime, parseInt(indexOffset))
            .then((events) => res.json(events));
    })
);

router.get(
    "/invoice",
    auth.jwt,
    safeHandler((req, res, next) => {
        const paymentRequest = <string>req.query.paymentRequest;

        try {
            validator.isAlphanumeric(paymentRequest);
        } catch (error) {
            return next(error);
        }

        return lightningLogic
      .decodePaymentRequest(paymentRequest)
            .then((invoice) => res.json(invoice));
    })
);

router.get(
    "/invoices",
    auth.jwt,
    safeHandler((req, res) =>
        lightningLogic.getInvoices().then((invoices) => res.json(invoices))
    )
);

router.post(
    "/payInvoice",
    auth.jwt,
    safeHandler(async (req, res, next) => {
        const paymentRequest = req.body.paymentRequest;
        const amt = req.body.amt;

        try {
            validator.isAlphanumeric(paymentRequest);

            if (amt) {
                validator.isPositiveIntegerOrZero(amt);
      }
        } catch (error) {
            return next(error);
        }

        return await lightningLogic
      .payInvoice(paymentRequest, amt)
            .then((invoice) => res.json(invoice));
    })
);

router.get(
    "/payments",
    auth.jwt,
    safeHandler((req, res) =>
        lightningLogic.getPayments().then((payments) => res.json(payments))
    )
);

export default router;
