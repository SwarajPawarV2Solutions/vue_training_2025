/*

In TypeScript, there are two supported methods getter and setter to access and set the class members. In this very short article, I’m going to show you Typescript Accessor which includes the getters/setters method.

Actually, getters and setters are nothing but a way for you to provide access to the properties of an object. Unlike other OOP languages like Java, C++, etc. where you can only access variables via the getter or setter method, things work differently in Typescript where you can access variables directly (Given in the below example). This is called TypeScript Accessor.

Methods of the Typescript accessor property:

1. getter: This method comes when you want to access any property of an object. A getter is also called an accessor.
2. setter: This method comes when you want to change any property of an object. A setter is also known as a mutator.

*/
// Example 1 : 
// class Student {
// 	private _name: string = "swaraj Pawar";
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
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        // Getter to access the value of _name
        get: function () {
            return this._name;
        },
        // Setter to modify the value of _name
        set: function (value) {
            if (value.length > 0) {
                this._name = value;
            }
            else {
                console.log("Name cannot be empty");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
// Usage
var person1 = new Person("John");
// Using the getter to access the value
console.log(person1.name); // Output: John
// Using the setter to modify the value
person1.name = "Alice";
console.log(person1.name); // Output: Alice
// Attempting to set an empty name
// person1.name = "";      // Output: Name cannot be empty
