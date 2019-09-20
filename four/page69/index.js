/*
 * @Author: YZQ
 * @Description: 搜索猫眼电影列表
 * @Date: 2019-09-19 21:21:36
 * @LastEditors: YZQ
 * @LastEditTime: 2019-09-20 11:06:29
 */
const Koa = require('koa');
const Router = require('koa-router');
const Http = require('http'); // 提供HTTP操作的底层功能
const Querystring = require('querystring') // querystring用于解析与格式化URL查询字符串

const app = new Koa();
const router = new Router();

const Service = {
    search: async (kw = '') => {
        return new Promise((resolve, reject) => {
            Http.request({
                hostname: 'm.maoyan.com', // 要求要访问的目标服务器域名
                path: '/ajax/search?' + Querystring.stringify({ // 序列化对象
                    kw,
                    cityId: 10 // 10表示上海
                })
            }, (res) => {

                res.setEncoding('utf8');

                let data = [];

                res.on('data', (chunk) => { // 监听接受响应的数据
                    data.push(chunk)
                }).on('end', () => { // 监听数据响应事件
                    resolve(data.join(''));
                });

            }).end();
        });
    }
}

const Render = (data = {}, kw = '') => {

  let arr = [
      '<style>',
      '*{margin:0;padding:0;font-size: 12px;}',
      'body{padding:10px}',
      'button{padding: 0 10px;line-height: 20px;margin-left: 10px;}',
      'input{line-height: 20px; width: 200px;padding: 0 5px;}',
      'h3{font-size: 14px;}',
      'i{font-size: 14px;font-style: inherit;color: #f80;}',
      'p{color:#666;}',
      '.item{padding:10px 0 10px 0;border-bottom:1px solid #d2d2d2;display:flex;}',
      '.info{margin-left:10px}',
      '</style>',
      '<form><input name="kw" value="' + kw + '"/><button>搜索</button></form>'
  ];

  data.movies && data.movies.list.forEach(item => {
      arr.push('<div class="item">')
      arr.push('<img src="' + item.img.replace('w.h', '64.90') + '"/>')
      arr.push('<div class="info">')
      arr.push('<h3>' + item.nm.replace(new RegExp(kw, 'g'), '<i>' + kw + '</i>') + '（' + item.enm + '）' + item.ver + '</h3>')
      arr.push('<p>' + item.cat + '</p>')
      arr.push('<p>' + item.star + '</p>')
      arr.push('<p>' + item.pubDesc + '</p>')
      arr.push('<p>' + item.sc + '分</p>')
      arr.push('</div>')
      arr.push('</div>')
  });

  return arr.join('')
}

router.get('/', async (ctx, next) => {
    let { kw } = ctx.query;
    let data = await Service.search(kw);
    ctx.body = Render(JSON.parse(data), kw);
});

app.use(router.routes()).listen(8080, () => {
    console.log('Server is running at http://localhost:8080')
})