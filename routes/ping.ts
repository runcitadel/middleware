import { Router } from "express";
import * as pjson from "../package.json";
const router = Router();

router.get("/", function (req, res) {
    res.json({ version: "middleware-" + pjson.version });
});

export default router;
