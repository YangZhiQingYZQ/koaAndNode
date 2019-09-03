/*
 * @Author: YZQ
 * @Description:向页面输入request对象属性
 * @Date: 2019-08-30 16:41:32
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-30 17:12:08
 */

const koa = require("koa"); // 获取koa构造函数
const app = new koa(); // 进行app的实例化
// 处理请求
app.use(async (ctx)=>{
    ctx.response.body = {
        url:ctx.request.url, // 获取请求url
        query:ctx.request.query, // 获取解析的查询字符串
        querystring:ctx.request.querystring //获取原始查询字符串
    }
})

// 服务启动应在最后执行
app.listen(3000, () => {
  // 启动服务，并监听3000端口
  console.log("server is running at http://localhost:3000");
});
