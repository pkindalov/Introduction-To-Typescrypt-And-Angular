function Greeter(name) {
    this.name = name;
}
Greeter.prototype.sayHello = function () {
    return 'Hello ' + this.name;
};
var greeter = new Greeter('Pesho');
var greeting = greeter.sayHello();
console.log(greeting);
