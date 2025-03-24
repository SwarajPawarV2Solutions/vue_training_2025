// Enum

// An enum is a special "object" in TypeScript that allows you to define a set of named constants. It is primarily used to represent a collection of related values, such as days of the week, colors, or states in an application.

enum Direction {
    Up,
    Down,
    Left,
    Right
}

let currentDirection: Direction = Direction.Up;

console.log(currentDirection);  // Output: 0 (Index value of Up)

/* 

By default, enums assign numeric values starting from 0 (unless explicitly assigned). In this example:

Direction.Up will be 0
Direction.Down will be 1
Direction.Left will be 2
Direction.Right will be 3



You can also set custom values:


enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

console.log(Direction.Up);  // Output: 1


When to Use enum:

1. When you need a set of related constants.
2. Useful for symbolic values that are more meaningful than raw numbers or strings.
3. Helpful when working with a finite set of options (like states, roles, etc.).

*/

// Example 2

enum Role {Admin, Read_Only, Author};

const person2 = {
    name: 'Swaraj',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};

if (person2.role === Role.Admin){
    console.log('is admin');
    
}


/*
   Choosing Between enum and const enum:

1. Use enum when you need to reference the enum object or when the values need to be dynamically accessed at runtime.
2. Use const enum when performance is a key concern and you don’t need the enum as an object during execution.
*/

