// Mapped Types 

// In TypeScript, mapped types allow you to transform the properties of an existing type into a new type by iterating over each property and applying some transformation. 

// { [K in keyof T]: T[K] }


// Here’s a breakdown of how it works:

// keyof T: This gets the keys of type T. It creates a union type of the property names of T.
// [K in keyof T]: This iterates over each key K in T.
// T[K]: For each key K, this accesses the corresponding value type in T.


// Let's say we have the following Person type:

type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

// Now, let's use the mapped type to create a new type where every property is set to string:

type PersonAsString = {
  [K in keyof Person]: string;
};

const person: PersonAsString = {
  name: "John",
  age: "30",
  isActive: "true", // all properties are of type `string`
};
