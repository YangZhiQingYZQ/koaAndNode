/*
 * @Author: YZQ
 * @Description:处理post请求
 * @Date: 2019-08-30 16:41:32
 * @LastEditors: YZQ
 * @LastEditTime: 2019-08-30 17:18:09
 */

const koa = require("koa"); // 获取koa构造函数
const app = new koa(); // 进行app的实例化
// 处理请求
//  POST请求的参数获取方式和GET请求不同。
//  Koa没有封装POST请求参数的方法，需要解析Context中的原生Node.js请求对象req
app.use(async (ctx)=>{
    let postdata = "",
        count = 0;
    ctx.req.on('data',(data)=>{
        postdata += data;
        count++;
        console.log(`第${count}次接收数据，data为：${data}`)
    });
    ctx.req.on('end',()=>{
        console.log(`请求结束，获取postdata数据:${postdata}`);
    })
})

// 服务启动应在最后执行
app.listen(3000, () => {
  // 启动服务，并监听3000端口
  console.log("server is running at http://localhost:3000");
});
