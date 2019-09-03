/*
 * @Author: YZQ
 * @Description: 使用koa-router中间件，处理请求
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 13:29:04
 */
const koa = require("koa"),
  app = new koa(),
  bodyParser = require("koa-bodyparser"),
  Router = require("koa-router"),
  router = new Router(); //初始化koa-router插件
router.get("/", (ctx, next) => {
  ctx.type = "html";
  let html = `
          <h1>登录</h1>
          <form method = "POST" action = "/">
              <p>用户名</p>
              <input name = "userName"><br/>
              <p>密码</p>
              <input name = "password"><br/>
              <button type = "submit">sumit</button>
          </form>`;
  ctx.body = html;
});
router.post("/", (ctx, next) => {
  const postData = ctx.request.body;
  ctx.body = postData;
});
app
  .use(bodyParser()) //加载koa-bodyparser中间件
  .use(router.routes()) // 加载koa-router中间件
  .use(router.allowedMethods()); // 对异常状态码的处理
app.listen(3000);
