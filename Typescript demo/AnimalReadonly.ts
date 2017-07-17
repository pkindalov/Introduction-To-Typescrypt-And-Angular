class AnimalReadonly{
    private name: string

    constructor(name: string){
        this.name = name;
    }

    sayHello() {
        return 'Hello from ' + this.name;
    }
}

class Cat extends AnimalReadonly{
    constructor(name: string){
        super(name);
    }

    sayHello(){
        return super.sayHello() + ' the cat'; 
    }
}

let cat = new Cat('Pesho')
let hello = cat.sayHello();

console.log(hello)