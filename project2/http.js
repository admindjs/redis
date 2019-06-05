var http = require('http');
var server = http.createServer();
server.listen(4356,function(){
    console.log('连接成功了,http://127.0.0.1:4356');
})
var router = require('./router.js');
router.server(server);