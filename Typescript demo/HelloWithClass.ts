class GreeterWithClass {
    private name: string

    constructor(name: string){
        this.name = name
    }

    sayHello (){
        return 'Hello from ' + this.name
    }
}

let greeterWithClass = new GreeterWithClass('Rosen')

let greeting = greeterWithClass.sayHello()
console.log(greeting)