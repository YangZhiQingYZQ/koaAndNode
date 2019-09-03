/*
 * @Author: YZQ
 * @Description: 采用RESTful规范定义路由请求
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 16:03:39
 */
const koa = require("koa"),
  app = new koa(),
  Route = require("koa-router"),
  router = new Route();
router
  .get("/", async (ctx, next) => {
    ctx.body = "Hello World!";
  })
  .post("/users", async (ctx, next) => {
    // 增加新的用户
  })
  .put("users/:id", async (ctx, next) => {
    // 修改参数id对应的用户数据
  })
  .del("/users/:id", async (ctx, next) => {
    // 删除参数id对应的用户数据
  })
  .all("/users/:id", async (ctx, next) => {
    //。。。。。。
  });
app.use(router.routes());

app.listen(3000);
