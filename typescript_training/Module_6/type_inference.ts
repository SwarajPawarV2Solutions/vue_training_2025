// Type Inference

// Type inference in TypeScript refers to the compiler's ability to automatically deduce the type of a variable based on the value it is assigned. TypeScript can often infer the type of a variable when you declare it, eliminating the need for explicit type annotations.

let message = "Hello"
console.log(typeof(message)); // string
// message = 20 // This will give error - Type 'number' is not assignable to type 'string'.


let num = 2 
console.log(typeof(num)); // number
// num = "hello" // This will give error -  Type 'string' is not assignable to type 'number'.

let ispresent = true
console.log(typeof(ispresent)); // boolean
// ispresent = 1 // This will give error -  Type 'number' is not assignable to type 'boolean'

