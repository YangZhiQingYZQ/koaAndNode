/*
 * @Author: YZQ
 * @Description: 基本模板
 * @Date: 2019-09-02 13:13:06
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 14:08:57
 */
const koa = require("koa"),
  app = new koa(),
  views = require("koa-views"),
  path = requrie("path"),
  bodyParser = require("koa-bodyparser"),
  static = require("koa-static"),
  Router = require("koa-router"),
  router = new Router();
app.use(
  //加载模板引擎
  views(_dirname + "/views", {
    map: { html: "ejs" }
  })
)
.use(static(path.join(__dirname,'/static'))) 
router.get("/",async (ctx,next)=>{
  await ctx.render('index');
})
router.post('/',(ctx,next)=>{
  let postData = ctx.request.body;\
  ctx.body=postData;
})
app.use(bodyParser())
.use(router.routes())
.use(router.allowedMethods());
app.listen(3000);
