/*
 * @Author: YZQ
 * @Description: koa-json插件开发
 * @Date: 2019-09-20 12:53:18
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 16:49:31
 */
const Koa = require("koa"),
  app = new Koa(),
  router = require("./router"),
  middleware = require("./middleware");
middleware(app);
router(app);
app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
});
