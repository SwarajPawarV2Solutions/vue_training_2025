// Arrow Functions

// Arrow functions provide a concise syntax for writing function expressions and automatically bind this to the surrounding context.

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Implicit return for single-expression functions.
// Do not have their own ‘this’ context.
