/*
 * @Author: YZQ
 * @Description: 实现简单路由自定义404页面
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 14:25:47
 */
const koa = require("koa"),
  app = new koa();

app.use(async (ctx, next) => {
  // 使用中间件实现
  const { url, method } = ctx; // 获取请求的URL和method
  if (url === "/404" && method == "GET") {
    // 匹配URL和method
    ctx.body = "Page Not Found"; //输出响应
    ctx.status = 404;
  } else {
    ctx.body = "Default Content";
  }
  await next();
});
app.listen(3000);
