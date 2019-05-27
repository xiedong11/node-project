/*
    exports 导出对象
            作用：讲模块中需要共享的其他模块的数据暴露（导出）到引用处
            语法：
                exports.属性值=值
                exports.方法名=函数

            注意事项：
               1.)exports等同于module.exports
               2.)exports是module.exports的对象引用，不能修改其指向，只能加属性和方法
 */

var obj  =require('./test-exports')

obj.show();