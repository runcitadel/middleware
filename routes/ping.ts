import Router from "@koa/router";
const router = new Router();

router.get("/", async function (ctx, next) {
  ctx.body = { version: "Middleware by Citadel" };
  await next();
});

export default router;
