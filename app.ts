import { config } from "dotenv";
config();
import express from "express";
import morgan from "morgan";
import passport from "passport";
import cors from "cors";
import type { Request, Response } from "express";

import bitcoind from "./routes/v1/bitcoind/info.js";
import address from "./routes/v1/lnd/address.js";
import channel from "./routes/v1/lnd/channel.js";
import info from "./routes/v1/lnd/info.js";
import lightning from "./routes/v1/lnd/lightning.js";
import transaction from "./routes/v1/lnd/transaction.js";
import util from "./routes/v1/lnd/util.js";
import wallet from "./routes/v1/lnd/wallet.js";
import pages from "./routes/v1/pages.js";
import ping from "./routes/ping.js";

// Keep requestCorrelationId middleware as the first middleware. Otherwise we risk losing logs.
import requestCorrelationMiddleware from "./middlewares/requestCorrelationId.js";
import { corsOptions } from "./middlewares/cors.js";
import { handleError, camelCaseMiddleware } from "@runcitadel/utils";

import * as logger from "./utils/logger.js";

const app = express();

// Handles CORS
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(requestCorrelationMiddleware);
app.use(camelCaseMiddleware);
app.use(morgan("combined", logger.morganConfiguration));

app.use("/v1/bitcoind/info", bitcoind);
app.use("/v1/lnd/address", address);
app.use("/v1/lnd/channel", channel);
app.use("/v1/lnd/info", info);
app.use("/v1/lnd/lightning", lightning);
app.use("/v1/lnd/transaction", transaction);
app.use("/v1/lnd/wallet", wallet);
app.use("/v1/lnd/util", util);
app.use("/v1/pages", pages);
app.use("/ping", ping);

app.use(handleError);

app.use((req: Request, res: Response) => {
  res.status(404).json(); // eslint-disable-line no-magic-numbers
});

export default app;
