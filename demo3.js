var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.listen(8340);
server.on('request',function(request,response){
    fs.readFile('./demo2.html','utf8',function(err,data){
        console.log(data);
        response.setHeader('Content-type','text/html;charset=utf-8');
        response.end(data);
    })
})