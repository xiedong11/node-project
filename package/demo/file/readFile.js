var fs = require('fs')

fs.readFile('package/demo/file/file.text', function (err, data) {
    console.log(data.toString());
});