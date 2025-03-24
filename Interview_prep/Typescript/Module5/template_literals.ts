// Template Literals in TypeScript (and JavaScript)


// Template literals are a type of string literal in TypeScript (and JavaScript) that allow for embedded expressions and multi-line strings. They are enclosed by backticks (``) instead of regular single or double quotes. Template literals provide a way to create strings with dynamic content by embedding expressions inside ${} placeholders. This makes string construction more readable and efficient, especially when dealing with variables, expressions, or multi-line strings.

// Key Features of Template Literals:

// String Interpolation: You can embed expressions (such as variables or calculations) directly within the string using ${}.

// Multiline Strings: Template literals allow strings to span across multiple lines without needing escape characters like \n.

// Expression Substitution: Anything within ${} is evaluated as an expression, allowing you to include more complex expressions or even function calls.



// 1. Basic String Interpolation:

let name1 = "Alice";
let greeting = `Hello, ${name1}!`;
console.log(greeting);  // Output: Hello, Alice!


// 2. Multiline String

let address = `123 Main St,
Springfield,
USA`;
console.log(address);
// Output:
// 123 Main St,
// Springfield,
// USA


// 3. Expression Inside template Literal

let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);  // Output: The sum of 5 and 10 is 15.


// 4. Function inside template Literal

function multiply(x: number, y: number): number {
    return x * y;
  }
  let message = `The product of 3 and 4 is ${multiply(3, 4)}.`;
  console.log(message);  // Output: The product of 3 and 4 is 12.
  
