/*
 * @Author: YZQ
 * @Description: 路由
 * @Date: 2019-09-20 12:53:24
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 14:10:37
 */
const router = require("koa-router")(),
  HomeController = require("./controller/home");
module.exports = app => {
  router.get("/", HomeController.index);
  router.get("/home", HomeController.home);
  router.get("/home/:id/:name", HomeController.homeParams);
  router.get("/user", HomeController.login);
  router.post("/user/register", HomeController.register);
  app.use(router.routes()).use(router.allowedMethods());
};
