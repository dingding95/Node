/**
 * Created by dllo on 17/4/21.
 */
//引入核心模块 http
var http=require('http');
var url=require('url');
var queryStr=require('querystring')
var fs = require('fs');



//创建服务
var server=http.createServer(function (request,response) {
    //request 请求

    //本函数为回调函数
    //回调时机:当客户端/浏览器发送请求

    //1.URL统一资源定位符
    //http//localhost:3000/path?username=name&pass=123456
    //组成:protocol://hostname:port/path?query
    //2.通过request可以获得请求的url
    //3.解析使用url.parse模块的方法,得到JSON对象
    var obj=url.parse(request.url)
    //4.取得pathname和query
    //5.通过querysting解析query,的到查询的对象
    var query=queryStr.parse(obj.query)
    console.log(query)
    console.log(obj)



    //response 响应
    // response.writeHead(200,{'Content-Type':'text/plain'})
    // response.end('Hello Node.js')

    //读取文本文件，赋值响应体
    // fs.readFile('./1.txt','utf-8',function (error,data) {
    //
    //         response.writeHead(200,{'Content-Type':'text/plain'});
    //         response.end(data);
    //
    // });


    fs.readFile('./1.png','binary',function (error,data) {

        response.writeHead(200,{'Content-Type':'image/jpeg'});
        response.write(data,'binary');
        response.end();
    });

    //根据内容来决定，Content-Type的类型
    // 图片 - image/jpeg
    // 文字 - text/plain
    // html - text/html




});
//服务监听端口3000
// server.listen(3000);













