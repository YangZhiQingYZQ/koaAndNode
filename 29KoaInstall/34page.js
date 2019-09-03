/*
 * @Author: YZQ
 * @Description: 
 * @Date: 2019-09-02 11:37:54
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 11:45:42
 */
const koa = require("koa");
const app = new koa();
app.use(async ctx => {
  const { request, response } = ctx;
  response.status = 200; // 设置请求的状态码为200；
  switch (true) { // 判断客户端期望的数据类型
    case request.accepts("json"):
      response.type = "json"; //设置响应的数据类型
      response.body = { data: "Hello World" }; // 设置返回内容
    case request.accepts("html"):
      response.type = "html";
      response.body = "<p>Hello World</p>";
    default:
      response.type = "text";
      response.body = "Hello World";
  }
});
app.listen(3000);