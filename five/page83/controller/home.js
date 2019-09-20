/*
 * @Author: YZQ
 * @Description: controller业务逻辑代码，即控制器
 * @Date: 2019-09-20 11:34:24
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:37:57
 */
const HomeService = require("../service/home");
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`;
  },
  home: async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = "<h1>HOME page</h1>";
  },
  homeParams: async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = "<h1>HOME page /:id/:name</h1>";
  },
  login: async (ctx, next) => {
    ctx.response.body = `<form action="/user/register" method="post">
              <input name="name" type="text" placeholder="请输入用户名：ikcamp"/> 
              <br/>
              <input name="password" type="text" placeholder="请输入密码：123456"/>
              <br/> 
              <button>GoGoGo</button>
            </form>`;
  },
  register: async (ctx, next) => {
    let { name, password } = ctx.request.body;
    let data = await HomeService.register(name, password);
    ctx.response.body = data;
  }
};
