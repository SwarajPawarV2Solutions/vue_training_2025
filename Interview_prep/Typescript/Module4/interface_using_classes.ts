

// Step 1: Define an Interface
interface Animal {
    name: string;
    age: number;
    speak(): void;
}

// Step 2: Implement the Interface in a Class
class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method defined in the interface
    speak(): void {
        console.log(`${this.name} barks!`);
    }
}

class Cat implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method defined in the interface
    speak(): void {
        console.log(`${this.name} meows!`);
    }
}

// Step 3: Create instances and call methods
const dog = new Dog("Buddy", 3);
dog.speak(); // Outputs: Buddy barks!

const cat = new Cat("Whiskers", 2);
cat.speak(); // Outputs: Whiskers meows!


// abstract class Animals {
//  abstract walk():void
// }

// class Horse extends Animals{
//  walk(){
//    console.log("walks on 4 legs")
//  }
// }

// class Chicken extends Animals{
//     walk(){
//       console.log("walks on 2 legs")
//     }
// }
   
// const horse = new Horse();
// horse.walk()

// const chicken = new Chicken();
// chicken.walk()


