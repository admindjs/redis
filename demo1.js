var fs = require('fs');
// var string = '我在这';

fs.readFile('detail.php', 'utf8', function (err, data) {
    console.log(err);
    data += '我真的在这';
    fs.writeFile('detail.php', data, function (err) {
        console.log(err);
    });
});