
// Function Overloading in typescript

// Function overloading in TypeScript allows you to define multiple function signatures for a single function. This means you can define the same function name but with different parameter types or return types, depending on the arguments passed to the function. TypeScript uses the overload signatures to perform type-checking and provide autocompletion, but the function body is defined only once.

// Overloading helps to handle different argument combinations or return types in a clean and concise manner without having to create multiple functions with different names.

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;


function add(a: string | number , b: string | number): string | number  {
    if (typeof a === "string" || typeof b === "string") {
        // using union type
        // If stattement is type Gaurd here because it allows us to utlilze flexibility union type gives us and still ensures our code runs correctly at runtime
        return a.toString() + b.toString();
    }

    return a + b;
}
const result = add("car", "bike"); // result is string
console.log(result.split("")); // Will work, because result is a string

const result1 = add(1, "bike"); // result1 is string
console.log(result1.split("")); // Will work, because result1 is a string

const result2 = add(1, 2); // result2 is number
console.log(result2); // Will output the number 3

