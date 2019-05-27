/*
require 函数
            作用：在当前模块中加载另外一个模块

            模块分类 ：
                 1.)自定义模块
                    我们自己编写的文件就是一个自定义模块
                    require（‘’）

                    注意：
                        子模块没有暴露数据时，返回空对象


                 2.)第三方模块
                   第三方程序员或者公司开发的模块，先安装再使用
                   安装可以使用npm包管理器工具。

                 3.)引入系统模块
                   node.js系统提供的模块，直接引入即可使用，不需要安装，也不需要自己写
                           fs  http  url  path....
                      require('模块名')


 */
// 引入自定义模块
var obj = require('./test-require')  //自定义模块引入必须加‘./’，因为在node.js中查找模块默认在node_modules目录中去查找
console.log(obj);

//引入三方模块
var jq = require('jquery')   //引入三方模块  require('模块名')
console.log(jq)

//引入系统模块
var fs = require('fs')
console.log(fs);
fs.readFile('./test-require.js',function (err,data) {
    console.log(data);
})
