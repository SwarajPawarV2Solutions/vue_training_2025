
// Type Casting in TypeScript


// Type casting in TypeScript refers to the process of explicitly changing a variable from one type to another. It is a way to tell TypeScript how to interpret a value of a particular type when the type inference might be incorrect or when you know the value will be treated differently at runtime.

// 1) Using the as Keyword
// The as keyword is used for type casting. It is a more modern approach and preferred in TypeScript.
// syntax
// let variableName = value as Type;

// 2)Using Angle Brackets (<>)
// This method is older and works similarly but is not recommended in JSX files (e.g., when using React).
// syntax
// let variableName = <Type>value;


// TypeScript allows two ways of performing type casting:

// Example of type casting using `as` keyword
let someValue: unknown = "Hello, TypeScript!";
let stringLength: number = (someValue as string).length;

console.log(stringLength);  // Output: 18

// Example of type casting using angle brackets
let someValue2: unknown = 42;
let stringifiedValue: string = <string>someValue2; // This will cause a runtime error

// Explanation:

// 1) In the first example, someValue is of type unknown. By using as string, we tell TypeScript to treat someValue as a string, and then we can safely use the .length property.
// 2) In the second example, trying to cast a number (someValue2) into a string will work syntactically, but it's incorrect and can lead to runtime errors, so we need to be cautious with the type casting.


// Key Points:
// 1) Type casting does not perform any transformation of the actual value. It simply tells TypeScript to treat a value as a different type.
// 2) It’s especially useful when working with external libraries or unknown data types.
