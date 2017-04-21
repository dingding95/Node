/**
 * Created by dllo on 17/4/21.
 */


var http = require('http');
var url = require('url');
var fs = require('fs');
var path =require('path');
const querystring = require('querystring');


var server =  http.createServer(function (request,response) {
    if(request.url !=='/favicon.ico'){

        var urlObj = url.parse(request.url);
        // console.log('urlObj: '+urlObj);

        var pathName = urlObj.pathname;// /index.html
        // console.log('pathName: '+pathName);

        var indexPath = path.join(__dirname,pathName);// /Users/dllo/Desktop/Node/Node/Node04/index.html
        // console.log('indexPath: '+indexPath);

        fs.exists(indexPath,function (isExists) {
            if(isExists){
                fs.readFile(indexPath,'utf-8',function (error,data) {

                    response.end(data);

                });
            }else {

                if(pathName === '/login'){
                    var dataStr = '';
                    request.on('data',function (smallData) {

                        dataStr += smallData;

                    });
                    request.on('end',function () {

                        // console.log('dataStr： '+dataStr);
                        var info = querystring.parse(dataStr);
                        console.log(info);

                        if(info.username == '123' && info.password == '123'){
                            response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
                            response.end('登陆成功');
                        }else {
                            response.writeHead(200, {'Content-Type': 'text/plain;charset=UTF-8'});
                            response.end('登陆失败');
                        }
                    });

                }else {
                    response.writeHead(404);
                    response.end('404 not found');
                }
            }
        });

    }else{
        response.end();
    }
});

server.listen(3000,function () {
    console.log('Server is running http://localhost:3000');

})