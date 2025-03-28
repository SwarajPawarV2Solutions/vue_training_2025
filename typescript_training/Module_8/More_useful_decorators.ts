function Logger(logString: string){
    return function (constructor:Function){  // this is factory decorator (returning function)
        console.log(logString);
        console.log(constructor);
    }
}

// @Logger('LOGGING - PERSON')
class Person{
    name = "swaraj";

    constructor() {
        console.log('Creating Person object...');  
    }
}
const p1 = new Person();