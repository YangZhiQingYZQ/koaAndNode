/*
 * @Author: YZQ
 * @Description: 路由模块，根据路径处理相应的逻辑，相当于view层级
 * @Date: 2019-09-20 11:29:50
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:40:45
 */
const router = require("koa-router")(),
  HomeController = require("./controller/home.js");
module.exports = app => {
  router.get("/", HomeController.index);
  router.get("/home", HomeController.home);
  router.get("/home/:id/:name", HomeController.homeParams);
  router.get("/user", HomeController.login);
  router.get("/user/register", HomeController.register);
  app.use(router.routes()).use(router.allowedMethods());
};
