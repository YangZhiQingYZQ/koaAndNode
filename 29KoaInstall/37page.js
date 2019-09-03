/*
 * @Author: YZQ
 * @Description:
 * @Date: 2019-09-02 12:22:46
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 12:29:12
 */
const koa = require("koa");
const app = new koa();
const one = async function(ctx, next) {
  console.log("one start");
  await next();
  console.log("one end");
};
const two = async function(ctx, next) {
  console.log("two start");
  await next();
  console.log("two end");
};
const three = async function(ctx, next) {
  console.log("three start");
  await next();
  console.log("three end");
};
app.use(one);
app.use(two);
app.use(three);
app.listen(3000);

/**
 *  以上程序执行结果为：
 * one start
    two start
    three start
    three end
    two end
    one end
    洋葱模型，中间件从上至下执行
    遇到await关键字的中间件，await后的代码中间件从下至上执行
 *  */
