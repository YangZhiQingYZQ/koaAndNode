const http = require("http"), //HTTP服务器和客户端模块
    path = require("path"), //该模块提供了用于处理文件与目录的路径的工具函数
    url = require("url"), //该模块用于URL处理与解析
    fs = require("fs"), //文件系统模块
    hostname = "127.0.0.1", //ip
    port = 8088, //端口
    server = http.createServer((req, res) => {
        let pathname = url.parse(req.url).pathname,
            extname = path.extname(pathname);
        if (pathname == '/') {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(fs.readFileSync(path.join(__dirname, pathname, 'index.html')));
        } else if (extname == '.jpg' || extname == '.png') { //访问图片对应格式图片内容
            res.writeHead(200, {
                'Content-Type': 'image/' + extname.substr(1)
            });
            res.end(fs.readFileSync(path.join(__dirname, pathname)));
        } else { //对于不满足要求的请求，返回状态吗4040
            res.statusCode = 404;
            res.end();
        }
    });
    server.listen(port,hostname,()=>{
        console.log(`Server runing at http://${hostname}:${port}/` )
    })