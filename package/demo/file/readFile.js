var fs = require('fs')

var filePath = 'package/demo/file/file.text';


// 一，文件读取


//同步读取文件
var data;
try {
    data = fs.readFileSync(filePath, 'utf-8');
    console.log(data);
} catch (e) {
    console.log(e.toString());
}


//异步读取文件
var readFileAsync;
readFileAsync = fs.readFile(filePath, 'utf-8', function (err, data) {

    if (err) {
        return console.error('读取文件出错: ' + err.message);
    }
    console.log(data);
})


//通过文件流方式读取
var readFileByStream = fs.createReadStream(filePath, 'utf-8');
readFileByStream
    .on('data', function (chunk) {
        console.log('start read file --' + chunk);
    })
    .on('error', function (error) {
        console.log('error----' + error.message);
    })
    .on('close', function () {
        console.log('已经关闭');
    })
    .on('end', function () {  // 没有数据了
        console.log('没有数据了');
    })



//2。文件写入

//同步写入
try{
    fs.writeFileSync(filePath,"写入的文字",'utf-8')   //每次写入会覆盖掉原来的内容
    console.log('write success');
}catch (e) {
    console.log(e.message);
}

//异步写入
fs.writeFile(filePath,'js sajkls','utf-8',function (err) {
    if (err) throw  err
    console.log('write success');
})


//通过文件流写入
var writeStream = fs.createWriteStream(filePath,'utf-8');
writeStream
    .on('close',function () {
        console.log('already close');
    })

writeStream.write('sadfadsfasdfafsd')
writeStream.write('12312')
writeStream.end('end') // 写入流被关闭后就不能再此对流进行写入操作
// writeStream.end('555 ')



// 文件是否存在
//
// fs.exists()已经是deprecated状态，现在可以通过下面代码判断文件是否存在。
fs.access(filePath, function(err){
    if(err) throw err;
    console.log('fileForRead.txt存在');
});

fs.access('./fileForRead2.txt', function(err){
    if(err) return console.error(err.message);
    console.log('fileForRead2.txt存在');
});


// 创建目录
//
// 异步版本（如果目录已存在，会报错）
fs.mkdir('directory', function(err){
    if(err) return console.error(err.message);
    console.log('目录创建成功');
});


// 同步版本
fs.mkdirSync('./hello');
