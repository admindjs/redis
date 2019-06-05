var url = require('url');
var data = require('./controller/index.js');
var fs = require('fs');
var querystring = require('querystring');
//下载的解析路径第三方插件 所用的请求都是可以解析的
var formidable = require('formidable');
module.exports = {
    server: function (server) {
        server.on('request', function (request, response) {
            //解析路径
            var url_obj = url.parse(request.url, true);
            //获取id
            var id = url_obj.query.id;
            //获取文件名字
            var path = url_obj.pathname;
            if (request.method == 'GET') {
                if (url_obj.pathname == '/') {
                    var controllerIndex = require('./controller/index.js');
                    controllerIndex.index(request, response);
                    //显示全部的
                } else if (path == '/getdata') {
                    data.ajaxdata(request, response, id);
                    //显示详情的
                } else if (path == '/getuser') {
                    data.detail(request, response, id);
                } else if (path == '/del') {

                    data.del(request, response, id);
                } else if (path == '/upd') {

                    data.upd(request, response, id);
                } else if (path == '/add') {
                    data.add(request, response, id);
                }else if (path == '/add') {
                    // data.add(request, response, id);
                }else{
                    fs.readFile('.' + path, function (err, data) {
                        // console.log(url_obj);
                        response.end(data);
                    })
                }
                // console.log(3241);
            } else if (request.method == 'POST') {
                if (path == '/new') {
                    var fd = new formidable.IncomingForm();
                    fd.uploadDir = "./public/tmp/";
                    fd.parse(request,function(err,formd,files){
                        console.log(files);
                        var imgpath = './public/img/'+files.img.name; // 设置文件移动路径 
                        fs.rename(files.img.path,imgpath,function(err){
                            if(!err){

                                    formd.img = imgpath;
                                    data.new(request, response, formd, id);
                            }
                        });
                    })








                    // var alldata = "";
                    // request.on("data", function (code) {
                    //     alldata += code;
                    // });
                    // request.on("end", function () {
                    //     // console.log(alldata)
                    //     alldata = querystring.parse(alldata);
                    //     data.new(request, response, alldata, id);
                    // })

                } else if (path == '/adds') {
                    var fd = new formidable.IncomingForm();
                    fd.uploadDir = "./public/tmp/";
                    fd.parse(request,function(err,formd,files){
                        var imgpath = './public/img/'+files.img.name; // 设置文件移动路径 
                        fs.rename(files.img.path,imgpath,function(err){
                            if(!err){
                                formd.img = imgpath;
                                data.adds(request,response,formd)
                            }
                        });
                    })
                }
            } else {
                response.end();
            }
        })
    }
}