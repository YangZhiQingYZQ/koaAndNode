/*
 * @Author: YZQ
 * @Description: model层
 * @Date: 2019-09-20 15:01:00
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 15:05:36
 */
module.exports = {
  register: async (name, pwd) => {
    let data;
    if (name == "ikcamp" && pwd == "123456") {
      data = {
        status: 0,
        data: {
          title: "个人中心",
          content: "欢迎进入个人中心"
        }
      };
    } else {
      data = {
        status: -1,
        data: {
          title: "登录失败",
          content: "请输入正确的账号信息"
        }
      };
    }
    return data;
  }
};
