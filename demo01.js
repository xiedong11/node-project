var querystring = require('querystring')
var qs = 'name=1&age=12';
console.log(querystring.parse(qs).age);

console.log(querystring.stringify(querystring.parse(qs)));

console.log(__filename)


setTimeout(function () {
    console.log('fdsafdasfds')
}, 2000)

setInterval(function () {
    console.log('循环执行');
},1000)