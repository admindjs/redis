var fs = require('fs');
fs.readFile('./demo22.php','utf8',function(err,data){
    console.log(data);
    data +='我为自己代言';
    fs.writeFile('./demo22.php',data,function(err){
        console.log(err);
    })
  

})
