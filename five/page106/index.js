/*
 * @Author: YZQ
 * @Description: 使用koa-munter中间件实现文件上传
 * @Date: 2019-09-20 17:16:54
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 18:06:18
 */
const Koa = require("koa"),
  fs = require("fs"),
  path = require("path"),
  Router = require("koa-router"),
  multer =require("koa-multer"),
  app = new Koa(),
  router = new Router(),
  upload = multer({
    dest: "uploads" //指定上传文件的存储目录
  }),
  types = upload.single("avatar");

router.get("/upload", async (ctx, next) => {
  ctx.response.body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <form method='post' action='/profile' enctype='multipart/form-data'>
        选择图片：<input name="avatar" id='upfile' type='file'/>
        <input type='submit' value='提交'/>
    </form>
    </body>
</html>`;
});
router.post("/profile", types, async function cb(ctx, next) {
  const { originalname, path: out_path, mimetype } = ctx.req.file;
  let newName = out_path + path.parse(originalname).ext, 
    err = fs.renameSync(out_path, newName), // 同步调用重命名
    result;
    err ? result = JSON.stringify(err) : result = "<h1>upload success</h1>"
    ctx.response.body = result;
});
app.use(router.routes()).listen(3000);