//  Hosting

// Hoisting refers to the process where by the interpreter appears to move the declarations to th top of the code before execution.

// variables can thus be referenced before they are declared in javascript.

/// Important note -   Javascript only hosts declaration not initializations. The variable will be undefined untill the line where its initialized is reached.

// Following two lines will run successfully due to hoisting. 

// Using Var

console.log(a); // Undefined

greet()

function greet(){
    console.log('Hello');
    
}

var a; // declaration hoisted to the top but initialization is not.
console.log(a); // 3


//Using Let

console.log(b); // ReferenceError: Cannot access 'b' before initialization

greet()

function greet1(){
    console.log('Hello1');
    
}

let b = 3; // 
console.log(b); // 3

