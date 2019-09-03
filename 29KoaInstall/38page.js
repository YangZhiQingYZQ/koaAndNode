/*
 * @Author: YZQ
 * @Description: 使用中间件获取响应时间
 * @Date: 2019-09-02 12:43:58
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 12:54:20
 */
const koa = require("koa"),
  app = new koa();
app.use(async (ctx, next) => {
  let stime = new Date().getTime(),
    etime,
    { response } = ctx;
  await next();
  etime = new Date().getTime();
  response.type = "text/html";
  response.body = `<h1>Hello World</h1><p>请求地址:${ctx.path},响应时间：${etime-stime}ms</p>`;
  console.log(`请求地址:${ctx.path},响应时间：${etime-stime}ms`)
});
app.use(async (ctx,next)=>{
    console.log('中间件 doSoming');
    await next();
    console.log("中间件执行over")
})
app.listen(3000,()=>{
    console.log("server is running a http://localhost:3000");
})
