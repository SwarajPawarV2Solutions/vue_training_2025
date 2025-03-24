// // Private Access Modifier

// The private access modifier restricts access to the class member to only the class in which it is defined. Members marked as private cannot be accessed or modified from outside the class, including from derived (subclass) classes.

// Usage: Use private when you want to protect the internal details of a class and prevent external access or modification of its properties or methods.

class Person1 {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    private greet(): string {
        return `Hello, my name is ${this.name}.`;
    }

    public introduce() {
        return this.greet();  // Can access the private method inside the class
    }
}

const person3 = new Person1("Alice");
console.log(person3.introduce());  // Accessible via a public method
// console.log(person.name);  // Error: 'name' is private
// console.log(person.greet());  // Error: 'greet' is private
