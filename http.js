var http = require('http');
var server = http.createServer();
server.listen(8340);
server.on('request',function(request,response){
    console.log(request);
    response.setHeader('Content-type','text/html;charset=utf-8');
    // response.write("<h1>只有放弃,才能靠近你!</h1>");
    response.end("<h1>只有放弃,才能靠近你!</h1>");
    
})