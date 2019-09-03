/*
 * @Author: YZQ
 * @Description: URL参数，会被添加到ctx.params中。参数可以是一个正则表达式。
 * 此功能是通过path-to-regexp实现的，原理是把URL字符串转化成正则对象，然后进行正则匹配
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 17:06:08
 */
const koa = require("koa"),
  app = new koa(),
  router = require("koa-router");
router.get("/:category/:title", function(ctx, next) {
  // 响应请求：'programming/how-to-koa
  console.log(ctx.params);
  // 参数解析 => { category:'programming',title:'how-to-koa'}
});
app.use(router.routes());
app.listen(3000);
