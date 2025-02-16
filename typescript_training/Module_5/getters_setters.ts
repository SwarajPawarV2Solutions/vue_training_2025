/* 

In TypeScript, there are two supported methods getter and setter to access and set the class members. In this very short article, I’m going to show you Typescript Accessor which includes the getters/setters method.

Actually, getters and setters are nothing but a way for you to provide access to the properties of an object. Unlike other OOP languages like Java, C++, etc. where you can only access variables via the getter or setter method, things work differently in Typescript where you can access variables directly (Given in the below example). This is called TypeScript Accessor.

Methods of the Typescript accessor property: 

1. getter: This method comes when you want to access any property of an object. A getter is also called an accessor.
2. setter: This method comes when you want to change any property of an object. A setter is also known as a mutator.



Private properties: 

Getters and setters are typically used with private properties to encapsulate the internal state of a class. This ensures that you can control how the property is accessed or modified (for example, applying validation, transformation, etc.).

*/

// Example 1 : 

// class Student {

// 	private _name: string = "Swaraj Pawar";
// 	private _semester: number;
// 	private _course: string;

// 	// Getter method to return name of
// 	// Student class
// 	public get name() {
// 		return this._name;
// 	}

// }

// // Access any property of the Student class
// let student = new Student();

// // Getter call
// let value = student.name;

// console.log(value);





// Example 2 :

class Person {
    private _name: string;  // Private property

    constructor(name: string) {
        this._name = name;
    }

    // Getter to access the value of _name
    get name(): string {
        return this._name;
    }

    // Setter to modify the value of _name
    set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        } else {
            console.log("Name cannot be empty");
        }
    }
}

// Usage
let person1 = new Person("John");

// Using the getter to access the value
console.log(person1.name);  // Output: John

// Using the setter to modify the value
person1.name = "Alice";
console.log(person1.name);  // Output: Alice

// Attempting to set an empty name
// person1.name = "";      // Output: Name cannot be empty

