// Default Parameters

// Allows functions to have default values for parameters.

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet());

// Output :

// Hello, Guest!

function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
