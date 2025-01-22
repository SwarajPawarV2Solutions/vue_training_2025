/* Overriding

In TypeScript, overriding refers to the ability of a subclass to provide a specific implementation for a method that is already defined in its superclass. This allows a subclass to customize or extend the behavior of a method inherited from its parent class.
*/

class Car {
  // Base class method
  startEngine(): void {
    console.log("The car's engine is starting...");
  }
}

class ElectricCar extends Car {
  // Overriding the startEngine method in the ElectricCar subclass
  startEngine(): void {
    console.log("The electric car's engine is starting silently...");
  }
}

class SportsCar extends Car {
  // Overriding the startEngine method in the SportsCar subclass
  startEngine(): void {
    console.log("The sports car's engine roars to life!");
  }
}

// Creating instances
const car = new Car();
const electricCar = new ElectricCar();
const sportsCar = new SportsCar();

car.startEngine(); // Output: The car's engine is starting...
electricCar.startEngine(); // Output: The electric car's engine is starting silently...
sportsCar.startEngine(); // Output: The sports car's engine roars to life!
