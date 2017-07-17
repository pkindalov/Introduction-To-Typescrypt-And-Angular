function Greeter (name) {
  this.name = name
}
Greeter.prototype.sayHello = function () {
  return 'Hello ' + this.name
}

var greeter = new Greeter('Pesho')
let greeting = greeter.sayHello()

console.log(greeting)
