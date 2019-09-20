/*
 * @Author: YZQ
 * @Description: controller层
 * @Date: 2019-09-20 15:08:49
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 17:14:24
 */
const HomeService = require("../service/home");
module.exports = {
  index: async (ctx, next) => {
    await ctx.render("home/index", { title: "iKcamp欢迎您" });
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
    await ctx.render("home/login", {
      btnName: "来来来,点我，点我"
    });
  },
  register: async (ctx, next) => {
    let params = ctx.request.body,
      { name, password } = params,
      res = await HomeService.register(name, password);
    if (res.status == -1) {
      await ctx.render("home/login", res.data);
    } else {
      ctx.state.title = "个人中心";
      await ctx.render("home/success", res.data);
    }
  }
};
