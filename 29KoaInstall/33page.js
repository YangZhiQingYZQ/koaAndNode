/*
 * @Author: YZQ
 * @Description:处理post请求
 * @Date: 2019-08-30 16:41:32
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-30 17:55:03
 */

const koa = require("koa"); // 获取koa构造函数
const app = new koa(); // 进行app的实例化
// 处理请求
app.use(async (ctx)=>{
    const {request,response} = ctx;
    console.log()
    if(request.method == "GET"){
        request.path === "/" ? response.body = "Hello World" : (response.type = "html") && (response.body = "<a href = '/'>Go To Index</a>");
    }
})
// 服务启动应在最后执行
app.listen(3000, () => {
  // 启动服务，并监听3000端口
  console.log("server is running at http://localhost:3000");
});
