// Type Assertion

// Type assertion is a way to tell the TypeScript compiler, "Trust me, I know the type of this variable." It does not change the runtime behavior but only tells the TypeScript compiler that you are confident the value has a certain type. There are two main ways to assert a type:

// as syntax
// <Type> syntax (commonly used in JSX)

// using "as" syntax
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length; // We assert that someValue is a string
console.log(strLength); // Output: 18
// In this example, someValue is initially typed as unknown, but we assert that it is actually a string using as string. After that, we can safely access its .length property.

let num1: unknown = 5 
let num2: unknown = 10
let d : string  = (num1 as number).toString();
console.log(d);


// Using <Type> syntax

let someValue1: unknown = "Type assertion with <Type> syntax!";
let strLength1: number = (<string>someValue).length; // We assert that someValue is a string
console.log(strLength1); // Output: 29
//Here, we use the <string> syntax to assert that someValue is of type string. Both as and <Type> syntax will work the same way, but the as syntax is preferred in modern TypeScript, especially when using JSX.



