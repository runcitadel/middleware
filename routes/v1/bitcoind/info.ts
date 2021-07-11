import { Router } from "express";
const router = Router();
import * as bitcoind from "../../../logic/bitcoind.js";
import * as auth from "../../../middlewares/auth.js";
import { safeHandler } from "@runcitadel/utils";

import type { Request, Response } from "express";

router.get(
  "/mempool",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getMempoolInfo().then((mempool) => res.json(mempool))
  )
);

router.get(
  "/blockcount",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getBlockCount().then((blockCount) => res.json(blockCount))
  )
);

router.get(
  "/connections",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getConnectionsCount().then((connections) => res.json(connections))
  )
);

//requires no authentication as it is used to fetch loading status
//which could be fetched at login/signup page
router.get(
  "/status",
  safeHandler((req: Request, res: Response) =>
    bitcoind.getStatus().then((status) => res.json(status))
  )
);

router.get(
  "/sync",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getSyncStatus().then((status) => res.json(status))
  )
);

router.get(
  "/version",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getVersion().then((version) => res.json(version))
  )
);

router.get(
  "/statsDump",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.nodeStatusDump().then((statusdump) => res.json(statusdump))
  )
);

router.get(
  "/stats",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind
      .nodeStatusSummary()
      .then((statussumarry) => res.json(statussumarry))
  )
);

router.get(
  "/block",
  auth.jwt,
  safeHandler((req: Request, res: Response) => {
    if (req.query.hash !== undefined && req.query.hash !== null) {
      bitcoind
        .getBlock(<string>req.query.hash)
        .then((blockhash) => res.json(blockhash));
    } else if (req.query.height !== undefined && req.query.height !== null) {
      bitcoind
        .getBlockHash(parseInt(<string>req.query.height))
        .then((blockhash) => res.json(blockhash));
    }
  })
);

// /v1/bitcoind/info/block/<hash>
router.get(
  "/block/:id",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getBlock(req.params.id).then((blockhash) => res.json(blockhash))
  )
);

router.get(
  "/blocks",
  auth.jwt,
  safeHandler((req: Request, res: Response) => {
    const fromHeight = parseInt(<string>req.query.from);
    const toHeight = parseInt(<string>req.query.to);
    bitcoind.getBlocks(fromHeight, toHeight).then((blocks) => res.json(blocks));
  })
);

router.get(
  "/txid/:id",
  auth.jwt,
  safeHandler((req: Request, res: Response) =>
    bitcoind.getTransaction(req.params.id).then((txhash) => res.json(txhash))
  )
);

export default router;
