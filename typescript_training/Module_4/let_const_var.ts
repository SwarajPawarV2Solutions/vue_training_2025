/* 
1. var

The var keyword declares a variable that is function-scoped or globally scoped, meaning it is accessible throughout the function it is declared in, or globally if not inside a function.

Hoisting: Variables declared with var are hoisted to the top of their enclosing function or global scope, which means they can be referenced before they are declared, but they will have the value undefined until the line where they are initialized.

Example:
*/
function exampleVar() {
  // console.log(a); // Output: undefined (due to hoisting)
  var a = 10;
  console.log(a); // Output: 10
}
exampleVar();

/* 
 2. let

The let keyword declares a variable that is block-scoped, meaning it is only accessible within the nearest enclosing block (e.g., inside {} braces).

No Hoisting: Unlike var, variables declared with let are not accessible before their declaration in the code.

Example:
 */

function exampleLet() {
  // console.log(b); // Error: Cannot access 'b' before initialization
  let b = 20;
  console.log(b); // Output: 20
}
exampleLet();

/* 
3. const

The const keyword declares a block-scoped variable that cannot be reassigned after its initial assignment. However, if the variable holds an object or array, the contents can still be modified.

No Hoisting: Like let, const variables are not accessible before their declaration.
  
Example
*/

function exampleConst() {
    const c = 30;
    console.log(c); // Output: 30

    // c = 40; // Error: Assignment to constant variable

    const obj = { name: 'Alice' };
    obj.name = 'Bob'; // This is allowed
    console.log(obj); // Output: { name: 'Bob' }
}
exampleConst();



/*
Conclusion :

1. Use var for function-scoped variables (though it's generally recommended to avoid var due to its confusing behavior).

2. Use let when you need a variable that can be reassigned within a specific block.

3. Use const for constants or when you want to ensure that a variable's reference doesn't change after assignment.
*/
