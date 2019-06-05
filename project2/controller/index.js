var model = require('./model/select.js');
var template = require('art-template');
var fs = require('fs');
template.defaults.root = './';
module.exports = {
    //x显示页面html
    index: function (request, response) {
        fs.readFile('./view/index.html', 'utf8', function (err, data) {
            response.end(data);
        })
    },
    //基础页面信息
    ajaxdata: function (request, response) {
        model.select(function (data) {
            // console.log(data);
            var data = JSON.stringify(data);
            // console.log(data);
            response.end(data);
        })

    },
    //查看详情
    detail: function (request, response, id) {
        model.where('id=' + id).select(function (data) {
            // var data=JSON.stringify(data);
            console.log(data[0].name);
            var html = template('./view/one.html', { data: data })
            response.end(html);
        })

    },
    //删除一条
    del: function (request, response, id) {
        model.where('id=' + id).delete(function (data) {
            if (data.affectedRows >= 1) {
                // response.end(1);
                var html = "<script>alert('ok');location.href='/'</script>";
                response.setHeader('Content-type', 'text/html,charset=utf8');
                response.end(html);
            }
        })
    },
    //修改
    upd: function (request, response, id) {
        model.where('id=' + id).select(function (data) {
            var html = template('./view/demo.html', { data: data })
            response.end(html);
        })
    },
    //新的数据
    new: function (request, response, object, id) {
        // console.log(object);
        //  console.log(id);
        model.where('id=' + id).update(object, function (data) {
            if (data.affectedRows >= 1) {
                console.log(data);
                // response.end(1);
                var html = "<script>alert('ok');location.href='/'</script>";
                response.setHeader('Content-type', 'text/html,charset=utf8');
                response.end(html);
            }
        })
    },
    //z增加数据显示页面
    add: function (request, response) {
        fs.readFile('./view/add.html', 'utf8', function (err, data) {
            response.end(data);
        })
    },
    //增加数据
    adds: function (request, response, object) {

        model.values(object, function (data) {
            // if (data.affectedRows >= 1) {
                console.log(data);
                // response.end(1);
                var html = "<script>alert('ok');location.href='/'</script>";
                response.setHeader('Content-type', 'text/html,charset=utf8');
                response.end(html);
            // }
        })
    },

}