/*
 * @Author: YZQ
 * @Description: 主文件
 * @Date: 2019-09-20 12:53:18
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 15:33:26
 */
const Koa = require("koa"),
    path = require("path"),
    bodyParser = require("koa-bodyparser"),
    nunjucks = require("koa-nunjucks-2"),
    staticFiles = require("koa-static");
const app = new Koa(),
    router = require("./router.js");
app.use(staticFiles(path.resolve(__dirname,"./public"),{ //指定静态资源目录
    maxage:30*24*60*60*1000 // 指定缓存时长
}));
app.use(nunjucks({
    ext:'html',
    path:path.join(__dirname,"views"),
    nunjucksConfig:{
        trimBlocks:true
    }
}));
app.use(bodyParser());
router(app);
app.listen(3000,()=>{
    console.log("server is running at http://localhost:3000");
})