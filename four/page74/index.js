/*
 * @Author: YZQ
 * @Description: 实现用户注册功能并进行数据解析
 * @Date: 2019-09-20 11:18:37
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:26:46
 */
const path = require("path"),
  koa = require("koa"),
  Router = require("koa-router"),
  serve = require("koa-static"),
  bodyParser = require("koa-bodyparser");

const app = new koa(),
  router = new Router();
// 使用koa-static插件及其内置模块path定位静态资源引用路径
app.use(serve(path.join(__dirname)));
// 使用koa-bodyparse解析用户传输的参数，在ctx.requset.body中可以访问到
app.use(bodyParser());

// ----------------------------设置路由-----------------------------
// 设置登录页面路由
router.get("/", async (ctx, next) => {
  ctx.body =
    '<link rel="stylesheet" href="index.css"/>' +
    '<div class="sign-up">' +
    "<h3>注册</h3>" +
    '<form method="post">' +
    '<input type="text" name="name" placeholder="账号" required>' +
    '<input type="email" name="email" placeholder="邮箱" required>' +
    '<input type="password" name="password" placeholder="密码" required>' +
    '<input type="password" name="confirm_password" placeholder="确认密码" required>' +
    '<input type="submit" value="注 册">' +
    "</form>" +
    "</div>";
});
// 设置注册处理路由
router.post("/",async (ctx,next)=>{
    let {name,email,password,confirm_password} = ctx.request.body;
    let arr = [
        '<link rel="stylesheet" href="index.css"/>',
        '<div class="result">',
        '<h3>注册成功</h3>',
        '<p>账号：' + name + '</p>',
        '<p>邮箱：' + email + '</p>',
        '<p>密码：' + password + '</p>',
        '<p>确认密码：' + confirm_password + '</p>',
        '</div>'
    ]
    ctx.body = arr.join('')
})
//挂载路由及其启动服务
app.use(router.routes()).listen(8080);