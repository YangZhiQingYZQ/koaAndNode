/*
 * @Author: YZQ
 * @Description: 程序主文件
 * @Date: 2019-09-20 11:43:14
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:57:17
 */
const Koa = require("koa"),
path = require("path"),
bodyParser = require("koa-bodyparser"),
nunjucks = require("koa-nunjucks-2"),
app = new Koa(),
router = require('./router');
app.use(nunjucks({
    ext:'html',
    path:path.join(__dirname,"views"),//指定视图目录
    nunjucksConfig:{
        trimBlocks:true //开启转义 防Xss
    }
}))
app.use(bodyParser());
router(app);
app.listen(3000)