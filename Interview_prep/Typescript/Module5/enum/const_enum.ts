// const Enum

// A const enum is a special type of enum where the compiler inlines the values at compile-time, meaning it does not generate a runtime object. This can improve performance because there is no need to access the enum at runtime, and it helps reduce the output JavaScript size.

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let currentDirection1: Directions = Directions.Up;

console.log(currentDirection1);  // Output: 0

// In this case, the TypeScript compiler will replace Direction.Up with 0 during the compilation process. The resulting JavaScript will not contain the Direction enum object at all.


// var currentDirection = 0;  // No enum object is created.
console.log(currentDirection1);  // Output: 0


/*
   When to Use const enum:

1. When you want to optimize for performance.
2. Useful when you're working with large sets of enums and performance is critical.
3. When you don’t need to reference the enum as an object (i.e., you're just using the values directly).

*/

// Note: If you try to use a const enum at runtime, you will get an error since const enums are completely removed during the compilation.