// Generic Functions

/* 
   In TypeScript, generics allow you to create reusable components (such as functions, classes, or interfaces) that work with any data type while maintaining strong typing. A generic function allows you to define a function that works with multiple types, where the types are specified when the function is called, rather than hardcoded into the function itself.
*/

// 1. Generic Function with <T>

/*
  A generic function using <T> is defined to accept a type T that can be replaced by any type when the function is called. TypeScript will automatically infer the type of T based on the argument provided, or you can explicitly provide the type.



  Syntax

  function functionName<T>(arg: T): T {
    // Function body
}
  
   Where:

T is the generic type placeholder.
arg is the argument of type T.
The function returns a value of type T.

*/

// Example 1: Generic Function with <T>

function identity<T>(value: T): T {
    return value;
  }
  
  const result1 = identity(42); // Inferred as number
  const result2 = identity("Hello World"); // Inferred as string
  const result3 = identity({ name: "Alice", age: 30 }); // Inferred as object

// The function identity takes a value of type T and returns the same type T.

// TypeScript infers the type of T based on the argument passed to the function, but you could also explicitly specify the type when calling the function (e.g., identity<number>(42)).
  


// Why Do We Use Generic Types in TypeScript?
// Generics in TypeScript are a powerful feature that enables you to write reusable, flexible, and type-safe code. They allow you to define functions, classes, and interfaces that can work with multiple types without losing the benefits of type checking.

