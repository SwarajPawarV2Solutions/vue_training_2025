// Hoisting is a phenompna in javascript that allows you to move your declerations above or on top. so we can initialize our varaible or call our function before declaring or defining. This is called as Hoisting.

/*

1. Variables declared with var: Only the declaration is hoisted, not the initialization.
2. Variables declared with let and const: They are also hoisted, but they are not accessible until they are initialized (they are in a "temporal dead zone").
3. Function declarations: The entire function (declaration + body) is hoisted, so you can call the function before its   definition in the code.
4. Function expressions: Only the variable declaration is hoisted, not the function expression.

*/

// Benifits of hoisting

// 1) Hoisting can help avoid errors related to undeclared variables.
// 2) It can make code more readable and maintainable.

// Example 1 :  Hoisting with var (variable declarations)

console.log(a); // undefined
var a = 5;
console.log(a); // 5

// Explaination

/*
  1. The declaration var a; is hoisted to the top of the code, but the initialization (a = 5;) stays in its place.
  2. So, the first console.log(a) outputs undefined, since the variable a is declared but not initialized at that point.
  3. After the initialization, the second console.log(a) outputs 5.
*/

// Example 2 :  Hoisting with let (variable declarations)

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// Explaination

/*

1. let (and const) variables are hoisted, but they are not initialized until the code execution reaches their declaration.
2. This creates a "temporal dead zone" from the start of the block until the variable is initialized. Attempting to access the variable before the declaration results in a ReferenceError.
*/

// Example 3 :  Hoisting with function declarations

hello(); // "Hello, world!"
function hello() {
  console.log("Hello, world!");
}

// Explanation:

/*
1. Function declarations are hoisted completely, so you can call the function before it's defined in the code.
2. In this case, hello() can be called before its actual definition in the script because the entire function is hoisted to the top.
*/

// Example 4 : Hoisting with function expressions

foo(); // TypeError: foo is not a function
var foo = function () {
  console.log("This is a function expression");
};

// Explanation:

/*
1. Only the var foo; declaration is hoisted, not the function expression assigned to foo.
2. When we try to call foo() before the function expression is assigned, JavaScript sees foo as undefined, resulting in a TypeError because undefined is not callable.
*/

// Example 5: Hoisting in a more complex scenario

console.log(x); // undefined
console.log(y); // ReferenceError: Cannot access 'y' before initialization
console.log(z); // ReferenceError: z is not defined

var x = 1;
let y = 2;
const z = 3;

// Explanation:

/*
1. var x is hoisted, but initialized to undefined, so console.log(x) outputs undefined.
2. let y and const z are hoisted as well, but due to the "temporal dead zone", they cannot be accessed before their   declaration, so trying to access them results in a ReferenceError.
3. z is not declared with var, so trying to access it results in a ReferenceError: z is not defined.
*/

// Conclusion:

// 1. var declarations are hoisted and initialized with undefined.
// 2. let and const declarations are hoisted but are in a "temporal dead zone" until they are assigned.
// 3. Function declarations are fully hoisted (including the body), but function expressions are not hoisted in the same way (only the variable declaration is hoisted, not the function definition).

console.log(a);
greet();
add(2, 4);

var a = "hi";

function greet() {
  console.log("Hello from scaler");
}

// Function Expressions

var add = function (a, b) {
  console.log(a + b);
};
