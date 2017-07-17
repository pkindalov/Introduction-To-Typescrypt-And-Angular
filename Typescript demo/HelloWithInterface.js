function sayHello(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName + ' ' + person.age;
}
var greetingWithInterface = sayHello({
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 20
});
console.log(greetingWithInterface);
