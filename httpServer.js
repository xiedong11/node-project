const http = require('http');
const fs = require('fs')

var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})

    response.end("hello world")
});
x = 10;
var x = 10;


server.listen(3000)

// 终端打印如下信息
console.log('Server running ');


var events = require('events')

var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log('连接成功');
    eventEmitter.emit('data_received')
}

eventEmitter.on('connection',connectHandler);

eventEmitter.on('data_received',function () {
    console.log('数据接收成功');
})

eventEmitter.emit('connection');

//导入模块
var hello =require('./package/hello')
hello = new hello();
hello.setName('小明')
hello.sayHello()


function execute(fun, valre) {
    fun(valre);
}

execute(function (word) {
    console.log(word)
},'hell;')

