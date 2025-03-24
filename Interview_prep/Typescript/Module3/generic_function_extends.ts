
// Key Differences:
// <T>: The type is flexible and can be anything. TypeScript infers the type based on the arguments passed to the function.
// <T extends U>: The type T is constrained to a specific type U, meaning T must be compatible with or a subtype of U.

// In TypeScript, generics allow you to define functions, classes, or interfaces that can work with a variety of types. The syntax T extends U is used to constrain the type T to only allow types that are subtypes of U, meaning T must have all the properties and behavior of U, and may add more properties if needed.

// T is a generic type parameter, which means it is a placeholder for a type that will be specified when the function or class is used.
// U is another type, and T is constrained to be assignable to U, meaning that T can either be exactly U or any type that extends or is more specific than U.


// syntax

// function functionName<T extends U>(param: T): T {
//     // Function body
// }


  /*
   Example: Generic Function with T extends U
     
   In this case, U could be a base type (like an interface or class), and T will be a more specific type that extends or implements it.

   Scenario: Working with Shape Types

   Imagine we are working with different shapes, and we want to create a function that operates on objects representing shapes (like circles or squares). We will define a base type Shape with a color property, and T will be a more specific type that extends Shape (like Circle or Square).
  
  */
  
// Base Shape interface
interface Shape {
    color: string;
  }
  
  // More specific types extending Shape
  interface Circle extends Shape {
    radius: number;
  }
  
  interface Square extends Shape {
    sideLength: number;
  }
  
  // Generic function that accepts a type T which extends Shape
  function describeShape<T extends Shape>(shape: T): string {
    return `This shape is ${shape.color}.`;
  }
  
  const circle: Circle = { color: "red", radius: 5 };
  const square: Square = { color: "blue", sideLength: 10 };
  
  console.log(describeShape(circle));  // Output: This shape is red.
  console.log(describeShape(square));  // Output: This shape is blue.

/*
  Explanation:
Base Shape interface:

The Shape interface represents a generic shape that has a color property.
Specific shapes (Circle and Square):

Circle extends Shape and adds a radius property.
Square extends Shape and adds a sideLength property.
Generic function describeShape:

The function describeShape takes a parameter shape of type T, where T extends Shape. This means T can be any type that is a subtype of Shape (e.g., Circle or Square).
The function returns a string describing the shape's color.
Calling the function:

When we call describeShape(circle) and describeShape(square), TypeScript knows that both Circle and Square are valid because they both extend Shape.
Benefits:
This ensures that the function describeShape can work with any type of object that has a color property, while still allowing for more specific shapes with additional properties (like radius or sideLength).
The use of extends in <T extends Shape> enforces that the function only accepts objects that are shapes or more specific types of shapes.
*/