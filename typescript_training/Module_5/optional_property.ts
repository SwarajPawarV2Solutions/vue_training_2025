// An optional property in TypeScript is a property in an object or class that is not required to be defined when creating an instance of that object or class. It allows the property to be omitted without causing a type error.


// 1. Using optional property on interface

interface Person2 {
    name: string;
    age? : number; // optional property
}

const person0: Person2 = {name: "swaraj"} // valid, age is optional
const person1: Person2 = {name: "swaraj",age: 25} // valid, age is Provided


// 2. Making Properties Optional in a Type

type Product = {
    id: number;
    name: string;
    price?: number;  // 'price' is optional
  }
  
  const product1: Product = { id: 1, name: "Laptop" };  // valid
  const product2: Product = { id: 2, name: "Phone", price: 699 };  // valid


  // 3. Optional Properties with Functions

  function greet(name: string, age?: number): string {
    return age ? `Hello, my name is ${name} and I'm ${age} years old.` : `Hello, my name is ${name}.`;
  }
  
  console.log(greet("Alice"));        // "Hello, my name is Alice."
  console.log(greet("Bob", 25));     // "Hello, my name is Bob and I'm 25 years old."
  
  

//   4. Optional Properties in Classes

class Car {
    make: string;
    model: string;
    year?: number;  // Optional property
  
    constructor(make: string, model: string, year?: number) {
      this.make = make;
      this.model = model;
      if (year) {
        this.year = year;
      }
    }
  }
  
  const car1 = new Car("Toyota", "Camry");
  const car2 = new Car("Honda", "Civic", 2020);
  