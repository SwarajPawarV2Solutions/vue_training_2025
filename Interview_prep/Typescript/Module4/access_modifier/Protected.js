"use strict";
// Protected Access Modifier
// The protected access modifier allows class members to be accessible within the class in which they are defined and in any subclass (derived class). However, protected members are not accessible from outside the class or its subclasses.
// Usage: Use protected when you want to allow access to a member within the class and any subclass but prevent access from outside the class hierarchy.
class Person2 {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
}
class Employee extends Person2 {
    sayHello() {
        return `Employee says: ${this.greet()}`; // Can access protected method in subclass
    }
}
const employee = new Employee("Bob");
console.log(employee.sayHello()); // Accessible in subclass
// console.log(employee.name);  // Error: 'name' is protected
// console.log(employee.greet());  // Error: 'greet' is protected
