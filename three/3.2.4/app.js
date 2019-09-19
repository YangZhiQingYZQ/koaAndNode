/*
 * @Author: YZQ
 * @Description: 使用jsonwebtoken实现用户权限管理
 * @Date: 2019-09-16 11:24:47
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-16 14:12:54
 */
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require('koa-bodyparser');
const { sign } = require("jsonwebtoken"); // 从JWT中获取sign方法
const { secret } = require("./config"); // 设置密钥
const jwt = require("koa-jwt")({ secret }); // 用密码构造JWT
const app = new Koa();
const router = new Router();
const admin = require('./middleware/admin')();
app.use(bodyParser());

router.post("/api/login", async (ctx, next) => {
    console.log("进入")
    console.log(ctx.request.body)
  const user = ctx.request.body;
  if (user && user.username) {
    //判断信息是否符合需求
    let { username } = user; //取出username
    // 生成Token，secret作为密钥需要开发者设置，expiresIn为失效时间，不要设置太久
    const token = sign({ username }, secret, { expiresIn: "1h" });
    ctx.body = {
      message: "get Token Success",
      code: 1,
      token
    };
  } else {
    // 如果输入不完整，返回异常
    ctx.body = {
      message: "Param Error",
      code: -1
    };
  }
})
.get("/api/userInfo",jwt,async ctx=>{
    console.log(ctx)
    ctx.body = {
        username  : ctx.state.user.username
    }
})
.get('/api/adminInfo',jwt,admin,async ctx =>{
    ctx.body= {
        username : ctx.state.user.username
    }
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000,_=>{
    console.log("app listening 3000.....")
})