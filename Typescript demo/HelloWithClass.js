var GreeterWithClass = (function () {
    function GreeterWithClass(name) {
        this.name = name;
    }
    GreeterWithClass.prototype.sayHello = function () {
        return 'Hello from ' + this.name;
    };
    return GreeterWithClass;
}());
var greeterWithClass = new GreeterWithClass('Rosen');
var greeting = greeterWithClass.sayHello();
console.log(greeting);
