/*
 * @Author: YZQ
 * @Description: 
 * @Date: 2019-09-16 11:25:09
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-16 11:25:09
 */
module.exports = ()=>{
  return async (ctx,next)=>{
    if(ctx.state.user.username === 'asmin'){
      next();
    }else{
      ctx.body = {
        code : -1,
        message:"Authentication Error"
      }
    }
  }
}