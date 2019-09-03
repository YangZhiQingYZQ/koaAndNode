/*
 * @Author: YZQ
 * @Description: 使用router的all方法，必须在中间件中使用await next()函数
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 16:16:10
 */
const koa = require("koa"),
  app = new koa(),
  router = require("koa-router")();
router.get("/", async (ctx, next) => {
  // 添加路由
  ctx.response.body = "<h1>index page</h1>";
  await next();
});
router.all("/", async (ctx, next) => {
  console.log(`match all ${ctx.method}`);
  await next();
});
app.use(router.routes());
app.listen(3000);
