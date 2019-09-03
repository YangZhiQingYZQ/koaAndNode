/*
 * @Author: YZQ
 * @Description: 使用koa-bodyparaser中间件，解析post请求
 * @Date: 2019-09-02 13:11:39
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 13:21:15
 */
const koa = require("koa"),
  app = new koa(),
  bodyParse = require("koa-bodyparser");

app.use(bodyParse()); // 加载koa-bodyparser中间件

app.use(async ctx => {
  //当GET请求时，返回表单页面
  if (ctx.url == "/" && ctx.method == "GET") {
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
  } else if (ctx.url == "/" && ctx.method == "POST") {
    // 当POST请求时，中间件koa-bodyparser解析POST表单里得数据
    const postData = ctx.request.body;
    ctx.body = postData;
  }
});
app.listen(3000);
