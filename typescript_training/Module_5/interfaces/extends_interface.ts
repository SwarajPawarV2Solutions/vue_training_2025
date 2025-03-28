// In TypeScript, extending an interface means creating a new interface that inherits the properties and methods of one or more existing interfaces. You can use the extends keyword to achieve this. This is particularly useful when you want to create more specific variations of an interface, maintaining the original structure while adding additional properties or methods.

interface Named {
    readonly name: string;
}

// we have split interface because if we want name on some pages or greet method on some pages.

interface Greetable extends Named{
    greet(phrase: string): void
}

class Person implements Greetable {
  name: string;
  age = 25;
  
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
    
}

  constructor(n: string){
    this.name = n;
  }
}



// Example 2 

// Base interface
interface Animal {
  name: string;
  species: string;
}

// Extended interface
interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// Creating an object of type Dog
const myDog: Dog = {
  name: "Rex",
  species: "Canine",
  breed: "German Shepherd",
  bark() {
      console.log("Woof!");
  }
};

console.log(myDog);
myDog.bark();  // Output: Woof!