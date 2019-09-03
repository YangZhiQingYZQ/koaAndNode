/*
 * @Author: YZQ
 * @Description: 
 * @Date: 2019-09-02 12:31:00
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-02 12:35:23
 */
const koa = require("koa"),
  app = new koa(),
  compose = require("koa-compose"); // 将多个中间件组合成单一的中间件，用于重用或导出
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
const all = compose([one,two,three]);
app.use(all);
app.listen(3000);