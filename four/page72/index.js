/*
 * @Author: YZQ
 * @Description: 使用koa-bodyparser插件解析post请求
 * @Date: 2019-09-20 11:07:39
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:18:13
 */
const Koa = require("koa"),
  router = require("koa-router")(),
  bodyParser = require("koa-bodyparser"),
  app = new Koa();

app.use(bodyParser());
router.get("/", async (ctx, next) => {
  ctx.response.body = "<h1>index page</h1>";
});
router.get("/home", async (ctx, next) => {
  console.log(ctx.request.query);
  console.log(ctx.request.querystring);
  ctx.response.body = "<h3>HOME page</h3>";
});
router.get("/home/:id/:name", async (ctx, next) => {
  console.log(ctx.params);
  ctx.response.body = "<h1>HOME page /:id/:name</h1>";
});
router.get("/404", async (ctx, next) => {
  ctx.response.body = "<h1>404 Not Found</h1>";
});
// 添加返回表单路由
router.get("/user", async (ctx, next) => {
  ctx.response.body = `
    <form action="/user/register" method="post">
      <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
      <br/>
      <input name="password" type="text" placeholder="请输入密码：123456"/>
      <br/> 
      <button>GoGoGo</button>
    </form>
    `;
});
// 处理表单提交post请求
router.post("/user/register", async (ctx, next) => {
  let { name, password } = ctx.request.body;
  name === "ikcamp" && password === "123456"
    ? (ctx.response.body = `Hello, ${name}`)
    : (ctx.response.body = "帐号错误");
});
app.use(router.routes()).listen(3000,()=>{
    console.log("server is running at http://locahost:3000");
})
