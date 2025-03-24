// ReadOnly

// In TypeScript, the readonly modifier is used to make a property immutable (read-only) after it has been initialized. This means that the property can be assigned a value only once, either during declaration or in the constructor of the class. After that, it cannot be modified.

// This is especially useful when you want to create objects whose properties should not be changed after they are set, enhancing the immutability of your objects.

class Employee1 {
    readonly id: number;
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // You cannot modify 'id' or 'name' after construction
    // this.id = 2;  // Error: Cannot assign to 'id' because it is a read-only property.
    // this.name = "John";  // Error: Cannot assign to 'name' because it is a read-only property.
    
    getEmployeeDetails(): string {
        return `Employee ID: ${this.id}, Name: ${this.name}`;
    }
}

const employee1 = new Employee1(1, "Alice");

console.log(employee1.getEmployeeDetails());  // Output: Employee ID: 1, Name: Alice

// Attempting to change readonly properties will result in an error
// employee1.id = 2;  // Error: Cannot assign to 'id' because it is a read-only property.
// employee1.name = "Bob";  // Error: Cannot assign to 'name' because it is a read-only property.
