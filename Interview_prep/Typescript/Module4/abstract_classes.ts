// Abstract classes

// In TypeScript, abstract classes are classes that cannot be instantiated directly. They are designed to be extended by other classes. Abstract classes can contain both abstract methods (which are methods without implementation) and regular methods (which can have implementation). The abstract methods must be implemented by the derived classes.


// Key Points about Abstract Classes:

// 1.  Abstract Methods: These are methods declared in an abstract class without a body. Any class extending the abstract class must implement these methods.

// 2.  Regular Methods: An abstract class can also contain regular methods with full implementation, which can be inherited by the derived classes.

// 3. Cannot be Instantiated: You cannot create an instance of an abstract class directly.

// 4. Can have Constructors: Abstract classes can have constructors, and subclasses can call the constructor using the super() keyword.



// When to Use an Abstract Class:

// Common Base for Subclasses: When you want to create a base class with common functionality but also require subclasses to implement some specific functionality.

// Enforcing a contract: Abstract classes ensure that any subclass adheres to a specific structure by forcing them to implement abstract methods.

// Abstract Class Animal
abstract class Animal {
    name: string;

    // Abstract method (no implementation)
    abstract speak1(): void;

    // Regular method (with implementation)
    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    // Constructor
    constructor(name: string) {
        this.name = name;
    }
}

// Concrete class Dog extends the abstract class Animal
class Dogesh extends Animal {
    // Implementing the abstract method
    speak1(): void {
        console.log(`${this.name} barks!`);
    }
}

// Concrete class Cat extends the abstract class Animal
class Catesh extends Animal {
    // Implementing the abstract method
    speak1(): void {
        console.log(`${this.name} meows!`);
    }
}

// Creating instances of the concrete classes
const dogesh = new Dogesh("Buddy");
dogesh.speak1();  // Outputs: Buddy barks!
dogesh.eat();    // Outputs: Buddy is eating.

const cat1 = new Catesh("Whiskers");
cat1.speak1();  // Outputs: Whiskers meows!
cat1.eat();    // Outputs: Whiskers is eating.

