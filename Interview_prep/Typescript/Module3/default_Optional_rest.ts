// 1. Default Parameters

// You can also set default values for parameters. If the caller does not provide a value, the default will be used.

function multiply(x: number, y: number = 2): number {
  return x * y;
}

console.log(multiply(5)); // Output: 10 (y is defaulted to 2)
console.log(multiply(5, 3)); // Output: 15 (y is 3)

// y: number = 2 sets y to 2 by default if no value is provided.

// 2. Optional Parameters

// In TypeScript, you can make a parameter optional by appending a ? to the parameter name.

function greet1(name: string, age?: number): string {
  if (age) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}.`;
  }
}

console.log(greet1("Alice")); // Output: Hello, Alice.
console.log(greet1("Bob", 30)); // Output: Hello, Bob. You are 30 years old.


// 3. Rest Parameters

/*
   Rest parameters in TypeScript allow a function to accept an indefinite number of arguments as a single array. They enable you to handle situations where you don't know in advance how many arguments will be passed to the function.

A rest parameter is indicated by placing ... (three dots) before the parameter name in the function definition. This collects all the remaining arguments passed to the function into an array, making it easier to work with variable-length argument lists.
*/

// Syntax

/* To define a function that accepts a variable number of arguments, you use the ... (spread) syntax before the parameter name. This is called a rest parameter.

 function functionName(...paramName: type[]): returnType {
      function body
 }

   ...paramName: The ... syntax collects all remaining arguments into an array.
   type[]: Specifies that paramName is an array of the specified type.

 */

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50


// Rest Parameters with Optional and Default Parameters


function createMessage(message: string, ...names: string[]): string {
    if (names.length === 0) {
        return `${message}, No one was specified.`;
    }
    return `${message}, ${names.join(", ")}`;
}

console.log(createMessage("Hello")); // Output: Hello, No one was specified.
console.log(createMessage("Hello", "Alice", "Bob")); // Output: Hello, Alice, Bob

