/*
 * @Author: YZQ
 * @Description: 向页面输入Hellow World
 * @Date: 2019-08-30 16:41:32
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-30 17:11:43
 */

const koa = require("koa"); // 获取koa构造函数
const app = new koa(); // 进行app的实例化

// 处理请求
app.use(async (ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hellow World</h1>'
})

// 服务启动应在最后执行
app.listen(3000, () => {
  // 启动服务，并监听3000端口
  console.log("server is running at http://localhost:3000");
});
