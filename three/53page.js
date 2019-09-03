/*
 * @Author: YZQ
 * @Description: 单个路由多中间件处理
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 16:28:54
 */
const koa = require("koa"),
  app = new koa(),
  router = require("koa-router")();
router.get(
  "/users/:id",
  (ctx, next) => {
    return URLSearchParams.findOne(ctx.params.id).then(function(user) {
      // 异步操作，首先读取用户的信息，假设用户为{id:17,name:"Alex"}
      ctx.user = user;
      // 控制权传递，调用下一个中间件
      next();
    });
  },
  (ctx, next) => {
    // 在这个中间件中再对用户信息做一些处理
    console.log(ctx.user);
    // => { id :17 , name :"Alex"}
  }
);
app.use(router.routes());
app.listen(3000);
