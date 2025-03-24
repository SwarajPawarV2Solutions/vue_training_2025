

// In TypeScript, function return types and parameters are important to ensure that the function works with the correct types.


// Function Return Type:

// The return type is specified after the : symbol, following the parameters.
// It tells TypeScript what type the function will return.


// Function Parameters:

// The types of function parameters are defined inside the parentheses () after the function name.
// You can specify the type of each parameter explicitly.


// syntax

// function functionName(parameter1: type, parameter2: type): returnType {
//     // function body
//     return value;
// }


function add(a: number, b: number): number {
    return a + b;
}

const result = add(3, 5); // result is of type 'number', value 8
console.log(result); // Output: 8

// a: number and b: number are function parameters of type number.
// : number after the parameters indicates the return type of the function (which is number in this case).



// 