/*
 * @Author: YZQ
 * @Description: 嵌套路由
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 16:38:01
 */
const koa = require("koa"),
  app = new koa(),
  forums = require("koa-router")(),
  posts = require("koa-router")();
posts.get("/", (ctx, next) => {
  //...
});
posts.get("/:pid", (ctx, next) => {
  //...
});
forums.use("/forums/:fid/posts", posts.routes(), posts.alloweMethods());
// 获取互联网板块列表的接口
//  "/forums/:fid/posts" => "/forums/123/posts"
// 获取互联网板块下谋篇文章的接口
// "/forum/:fid/posts/:pid" => "/forums/123/posts/123"
app.use(forums.routes());
app.listen(3000);
