/*
 * @Author: YZQ
 * @Description: 实现简单路由自定义404页面(路由组件)
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 14:36:16
 */
// 定义路由组件
class Router {
  constructor() {
    //缓存路由规则
    this._routers = [];
  }
  get(url, handler) {
    this._routers.push({
      url: url,
      method: "GET",
      handler
    });
  }
  routes() {
    // 返回路由处理中间件给Koa使用
    return async (ctx, next) => {
      const { method, url } = ctx, //获取当前请求的URL和method
        matcheRouter = this._routers.find(
          r => r.method === method && r.url === url
        );
      if (matcheRouter && matcheRouter.handler) {
        await matcheRouter.handler(ctx, next);
      } else {
        await next();
      }
    };
  }
}

const koa = require("koa"),
  app = new koa(),
  router = new Router();

router.get("/404", (ctx, next) => {
    ctx.body = "Page not found";
    ctx.status = 404;
});

app.use(router.routes());
app.listen(3000);
