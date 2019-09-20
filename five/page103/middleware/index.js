/*
 * @Author: YZQ
 * @Description: 
 * @Date: 2019-09-20 16:51:51
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 17:09:33
 */
const path = require("path"),
    bodyParser = require("koa-bodyparser"),
    nunjucks = require("koa-nunjucks-2"),
    staticFiles = require("koa-static"),
    miSend =require("./mi-send");
module.exports = (app) =>{
    app.use(staticFiles(path.resolve(__dirname,"../public")));
    app.use(nunjucks({
        ext:"html",
        path:path.join(__dirname,"../views")
    }));
    app.use(bodyParser());
    app.use(miSend());
}