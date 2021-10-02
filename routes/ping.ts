import Router from "@koa/router";
const router = new Router({
  prefix: "/ping",
});

router.get("/", async function (ctx, next) {
  ctx.body = { version: "Middleware by Citadel", features: [], isCitadel: true };
  await next();
});

export default router;
