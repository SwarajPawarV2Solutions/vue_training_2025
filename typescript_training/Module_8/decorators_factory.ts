
// Factory Decorators in TypeScript

// A factory decorator in TypeScript is a type of decorator that returns a decorator function. It is a higher-order function that allows you to pass parameters to customize the decorator's behavior.

// In other words, a factory decorator is a function that generates a decorator based on some configuration or parameters, which can then be used to decorate classes, methods, properties, or parameters.

// Definition:

// A factory decorator is a function that returns another decorator function, which can be applied to a class, method, property, or parameter. This allows for more flexible and reusable decorators.


// function Logger(){
//     return function (constructor:Function){
//         console.log("logging....");
//         console.log(constructor);
//     }
// }

function Logger(logString: string){
    return function (constructor:Function){  // this is factory decorator (returning function)
        console.log(logString);
        console.log(constructor);
    }
}

@Logger('LOGGING - PERSON')
class Person{
    name = "swaraj";

    constructor() {
        console.log('Creating Person object...');  
    }
}
const p1 = new Person();