/*
 * @Author: YZQ
 * @Description: 主文件
 * @Date: 2019-09-20 11:29:14
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:40:15
 */
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router = require('./router');
app.use(bodyParser());
router(app);
app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});
