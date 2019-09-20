/*
 * @Author: YZQ
 * @Description: Model数据源
 * @Date: 2019-09-20 11:36:49
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:38:55
 */
module.exports = {
    register: async (name, pwd) => {
        let data;
        if (name == 'ikcamp' && pwd == '123456') {
            data = `Hello， ${name}！`;
        } else {
            data = '账号信息错误';
        }
        return data;
    }
}