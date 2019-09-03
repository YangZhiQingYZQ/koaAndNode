/*
 * @Author: YZQ
 * @Description: 权限管理核心代码，使用token进行校验
 * @Date: 2019-09-02 17:42:49
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 20:23:46
 */
const { sign } = require("jsonwebtoken"), //从JWT中获取sign方法
  secret = "demo", // 设置密钥
  jwt = require("koa-jwt")(secret), // 用密码构造JWT
  Router = requrie("koa-router"),
  user = new Router(), //主路由
  detail = new Router(); // 嵌套路由
detail.get("/info", async ctx => {
  ctx.body = { username: ctx.state.user.username };
});
const admin = async (ctx, next) => {
  if (ctx.state.user.username == "admin") {
    next();
  } else {
    ctx.body = {
      code: -1,
      message: "Authentication Error"
    };
  }
};
user
  .get("/api/login", async (ctx, next) => {})

  .post("/api/login", async (ctx, next) => {
    const user = ctx.request.body; //从body中获取用户输入的消息
    if (user && user.username) {
      // 判断信息是否符合要求
      let { username } = user; //去除username
      // 生成Token，secret作为密钥需要开发者设置，expiresIn为失效时间，不要设置太久
      const token = sign({ username }, secret, { expiresIn: "1h" });
      ctx.body = {
        // 返回结构体（Token）
        message: "Get Token Success",
        code: 1,
        token
      };
    } else {
      ctx.body = {
        // 如果输入不完整，返回异常
        message: "Params Erro",
        code: -1
      };
    }
  })
  .get("/api/userInfo", jwt, async ctx => {
    // 获取用户信息，需要校验
    ctx.body = { username: ctx.state.user.usernaem };
  })
  .get("/api/adminInfo", jwt, admin, async ctx => {
    //管理员接口，检查是否为管理员
    ctx.body = { username: ctx.state.user.username };
  })
  .use("/api/user", jwt, detail.routers(), detail.allowedMethods());

app.user(router.routers().use(router.alloweMethods()));

app.listen(3000);
