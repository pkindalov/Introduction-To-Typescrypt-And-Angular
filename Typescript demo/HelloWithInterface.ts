interface Person{
    firstName: string,
    lastName: string,
    age: number
}


function sayHello(person: Person){
    return 'Hello ' + person.firstName + ' ' + person.lastName + ' ' + person.age;
}

let greetingWithInterface = sayHello({
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 20
})

console.log(greetingWithInterface)