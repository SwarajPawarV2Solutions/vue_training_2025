// Conditional types

// Conditional types in TypeScript allow you to define types that depend on a condition. They are a powerful way to express types that vary based on a certain condition, such as whether a type extends another type or matches a specific structure.

/*
    The syntax for a conditional type is:

T extends U ? X : Y

Where:

T: The type being checked (also called the "test type").
U: The type that T is compared to (the "constraint type").
X: The type to return if the condition (T extends U) is true.
Y: The type to return if the condition (T extends U) is false.
In essence, a conditional type means:

If T extends U, then the type is X; otherwise, it is Y.


Key Concepts:

* extends keyword: The extends keyword is used in conditional types to check if one type is assignable to another. It’s similar to how it’s used in type constraints or inheritance.
* Type inference: TypeScript can infer the type based on the condition, and you can use this feature to provide more specific types based on whether a condition is true or false.

*/

// 1. Simple Conditional Type
type IsString<T> = T extends string ? "Yes" : "No";

// In this case:

// If T is a string, the type will resolve to "Yes".
// If T is anything else (i.e., not a string), the type will resolve to "No".


type Test1 = IsString<string>;  // "Yes"
type Test2 = IsString<number>;  // "No"
type Test3 = IsString<boolean>; // "No"



// Example 2: Conditional Types with Union Types
// You can use conditional types with union types to select a type based on whether it’s a specific member of the union.


type TypeName<T> = T extends string | number ? "String or Number" : "Other";
// Usage:

type Test4 = TypeName<string>;  // "String or Number"
type Test5 = TypeName<boolean>; // "Other"
type Test6 = TypeName<number>;  // "String or Number"
