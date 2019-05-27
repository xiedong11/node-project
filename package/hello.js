function hello() {
    var name;
    this.setName = function (name) {
        this.name = name;
    };
    this.sayHello = function () {
        console.log('hello' + name);
    };
}

module.exports = hello;