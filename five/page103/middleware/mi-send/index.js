/*
 * @Author: YZQ
 * @Description: 将数据转为json的中间件
 * @Date: 2019-09-20 17:05:08
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 17:06:38
 */
module.exports = ()=>{
    function render(json){
        this.set("Content-Type","application/json");
        this.body = JSON.stringify(json);
    }
    return async (ctx,next)=>{
        ctx.send = render.bind(ctx);
        await next();
    }
}