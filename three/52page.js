/*
 * @Author: YZQ
 * @Description: 使用路由命名特性
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 16:24:07
 */
const koa = require("koa"),
  app = new koa(),
  router = require("koa-router")();
router.get("user", "/users/:id", (ctx, next) => {
  //。。。。
});
// 通过调用路由名称user，生成路由 == "/users/3"
router.url("user", 3);
// 通过调用路由名称user，生成路由 == "/users/3"
router.url("user", { id: 3 });
router.use(function(ctx, next) {
  // 从定向到路由名称为sign-in的页面
  ctx.redirect(ctx.router.url("sign-in"));
});
app.use(router.routes());
app.listen(3000);
