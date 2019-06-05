var mysql = require('mysql');
var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node'
});
// connect.
connect.connect();
module.exports = {
    //json形式的对象
    //定义一个保存至的对象
     wh : '',
    where: function (where) {
            this.wh = where;
            return this;
    },
    select: function (callback) {
        if(this.wh != ''){
            var sql = "select * from users where "+this.wh;
            
            this.wh = '';
        }else{
            var sql = "select * from users";
        }
        // console.log(sql);
        connect.query(sql,function(err,data){
            callback(data);
        })
    },
    delete:function(callback){
        if(this.wh != ''){
            var sql = "delete  from users where "+this.wh;
            this.wh = '';
        }else{
            // var sql = "delete from users";
        }
        // console.log(sql);
        connect.query(sql,function(err,data){
            callback(data);
        })
    },
    update:function(data,callback){

        var set = '';
        for(v in data){
          
            set += v +"='"+ data[v]+"',";
        }
        var sets = set.slice(0,set.length-1);
        // console.log(sets);

        if(this.wh != ''){
            var sql = "update `users` set "+ sets+    " where "+this.wh;
            this.wh = '';
        }else{
            // var sql = "delete from users";
        }
        console.log(sql);
        connect.query(sql,function(err,data){
            callback(data);
        })
    },
    values:function(data,callback){

        var set = '';
        for(v in data){
            key += v+',';
            set +=  "'"+data[v]+"'"+",";
        }
        var keys = setkey.slice(0,key.length-1);
        var sets = set.slice(0,set.length-1);
        console.log(sets);

        
            var sql = "insert into users ("+keys+") values(null,"+sets+")";
      
        
        console.log(sql);
        connect.query(sql,function(err,data){
            callback(data);
        })
    }
}
