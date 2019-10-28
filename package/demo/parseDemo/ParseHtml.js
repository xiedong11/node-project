var http = require('http');

http.get('http://sc.chinaz.com/tupian/190613271682.htm', function (res) {
    var data = ''

    res.on('data', function (result) {
        // console.log(result.toString())
        data += result.toString();

    })

    res.on('end', function () {
        // console.log(data)
        //1.获取网页信息成功之后，提取图片url
        var reg = /<img src="(.*?)" border="0" alt="" \/>/img;

        var isOver=''
        while (isOver=reg.exec(data)){
            console.log(isOver)
        }




    })
});