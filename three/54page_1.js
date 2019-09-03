/*
 * @Author: YZQ
 * @Description: 路由前缀，prefix用于给一组路由统一添加前缀
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 17:02:11
 */
const koa = require("koa"),
  app = new koa(),
  Router = require("koa-router"),
  router = new Router({
    prefix: "/users"
  });
//   匹配路由"/users"
router.get("/", (ctx, next) => {
  //...........
});
// 匹配路由"/users/:id"
router.get("/:id", ctx => {
  //..................
});

app.use(router.routes());
app.listen(3000);
