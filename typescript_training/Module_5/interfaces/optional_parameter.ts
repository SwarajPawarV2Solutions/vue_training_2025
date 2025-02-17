// Optional Properties in Interfaces:

// When defining an interface, you can specify that a property is optional by adding a ? after the property name. This means the property is not required when creating an object of that interface type.

interface Car {
    name : string;
    brand: string;
    cc? : number;
}

interface Price extends Car {
    car_colour: string;
    car_price: number
}


let obj1 : Price;
obj1 = {
 name: 'Mercedes benz S class',
 brand: 'Mercedes Benz',
 car_colour:'Black',
 car_price: 100000000
}
console.log(obj1);

class Customer implements Price{
    name : string;
    brand: string;
    cc? : number;
    car_colour: string;
    car_price: number

}
