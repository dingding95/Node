/**
 * Created by dllo on 17/4/20.
 */

var http = require('http');
var url=require('url');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function (request,response) {
    var pathname = url.parse(request.url).pathname;
    var ImgName = path.basename(pathname);

    fs.exists(ImgName, function(exists) {

        if(exists){
            fs.readFile(ImgName,'binary',function (error,data) {
                response.writeHead(200,{'Content-Type':'image/jpeg'});
                response.write(data,'binary');
                response.end();
            })
        }else{
            response.writeHead(404,{'Content-Type':'text/plain'});
            response.end('404 not found');
        }
    });
});
server.listen(3000);

