var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.listen(4564);
server.on('request',function(request,response){
    response.setHeader('Content-type','text/html;charset=utf-8');
    // response.setHeader('Content-type','text/html;charset=utf-8');
    fs.readFile('./demo2.php','utf8',function(res,data){
        console.log(data);
        response.end(data);
    })
})
