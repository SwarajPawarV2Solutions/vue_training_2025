// Public Access Modifier

// Definition: The public access modifier in TypeScript allows class members (properties and methods) to be accessible from anywhere. This means the member can be accessed both inside and outside the class, as well as in any derived (subclass) class. If no access modifier is specified, TypeScript assumes the member is public by default.

// Usage: When you want to expose class members to the outside world and allow them to be accessed freely, use public.

class Car {
    public brand: string;
    public model: string;
    public year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    public getCarDetails(): string {
        return `Car details: ${this.year} ${this.brand} ${this.model}`;
    }

    public startEngine(): string {
        return `The engine of the ${this.brand} ${this.model} is now running.`;
    }
}

// Creating an instance of the Car class
const myCar = new Car("Tesla", "Model S", 2023);

// Accessing public properties directly
console.log(myCar.brand);  // Output: Tesla
console.log(myCar.model);  // Output: Model S
console.log(myCar.year);   // Output: 2023

// Calling public methods
console.log(myCar.getCarDetails());  // Output: Car details: 2023 Tesla Model S
console.log(myCar.startEngine());  // Output: The engine of the Tesla Model S is now running.
