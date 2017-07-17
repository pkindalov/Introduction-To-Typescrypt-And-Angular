type stringOrArray = string | string[]

function sayHello(name: stringOrArray){
    if( typeof name === 'string'){
        console.log('Hello from ' + name)
    }else {
        console.log('Hello from ' + name.join(' '))
    }
}


sayHello(['Ivan', 'Pesho'])
sayHello(['Rosen'])