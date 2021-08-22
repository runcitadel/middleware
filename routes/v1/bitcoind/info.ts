import { Router } from "express";
const router = Router();
import * as bitcoinLogic from "../../../logic/bitcoin.js";
import * as auth from "../../../middlewares/auth.js";
import { safeHandler } from "@runcitadel/utils";

import type { Request, Response } from "express";

router.get(
  "/mempool",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getMempoolInfo().then((mempool) => res.json(mempool))
  )
);

router.get(
  "/blockcount",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getBlockCount().then((blockCount) => res.json({ blockCount }))
  )
);

router.get(
  "/connections",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getConnectionsCount().then((connections) => res.json(connections))
  )
);

//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get(
  "/status",
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getStatus().then((status) => res.json(status))
  )
);

router.get(
  "/sync",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getSyncStatus().then((status) => res.json(status))
  )
);

router.get(
  "/version",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getVersion().then((version) => res.json({version}))
  )
);

router.get(
  "/statsDump",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.nodeStatusDump().then((statusdump) => res.json(statusdump))
  )
);

router.get(
  "/stats",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic
      .nodeStatusSummary()
      .then((statussumarry) => res.json(statussumarry))
  )
);

router.get(
  "/block",
  auth.jwt,
  safeHandler((req: Request, res: Response) => {
    if (req.query.hash !== undefined && req.query.hash !== null) {
      bitcoinLogic
        .getBlock(<string>req.query.hash)
        .then((blockhash) => res.json(blockhash));
    } else if (req.query.height !== undefined && req.query.height !== null) {
      bitcoinLogic
        .getBlockHash(parseInt(<string>req.query.height))
        .then((hash) => res.json({ hash }));
    }
  })
);

// /v1/bitcoind/info/block/<hash>
router.get(
  "/block/:id",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getBlock(req.params.id).then((block) => res.json(block))
  )
);

router.get(
  "/blocks",
  auth.jwt,
  safeHandler((req: Request, res: Response) => {
    const fromHeight = parseInt(<string>req.query.from);
    const toHeight = parseInt(<string>req.query.to);
    bitcoinLogic.getBlocks(fromHeight, toHeight).then((blocks) => res.json({blocks}));
  })
);

router.get(
  "/txid/:id",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoinLogic.getTransaction(req.params.id).then((txhash) => res.json(txhash))
  )
);

export default router;
