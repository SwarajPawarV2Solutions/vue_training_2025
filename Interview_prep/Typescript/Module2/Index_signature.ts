
// Index Signature

// In TypeScript, index signatures allow you to define object types with dynamic keys, where the keys can be of a specific type, and the corresponding values can be of another type. This is particularly useful when you want to work with objects that have properties that are not known at compile-time but follow a specific pattern.

/*
Syntax

type MyObject = {
    [key: KeyType]: ValueType;
};

Where-

MyObject is the name of the object type you are defining.
KeyType is the type of key that can be used to access properties in the object.
ValueType is the type of the values associated with the keys.
*/

// Example 1 - Using Index Signatures with Specific Keys

// Let's say we have an object where we expect a set of predefined keys, but we still want to allow additional dynamic keys (that are strings), and each key has values of type string or number.

interface Person {
    name: string;
    age: number;
    [key: string]: string | number; // Index signature for additional properties
  }
  
  const person: Person = {
    name: "Alice",
    age: 25,
    hobby: "Reading",         // dynamic key
    height: 170,              // dynamic key
    weight: 60                // dynamic key
  };
  
  console.log(person.name);   // "Alice"
  console.log(person.age);    // 25
  console.log(person.hobby);  // "Reading"
  console.log(person.height); // 170
  console.log(person.weight); // 60
  

// name: string and age: number are explicitly defined keys.

// [key: string]: string | number; is the index signature that allows any other string keys to exist with values that are either of type string or number.

// This way, the object can have both known keys (name, age) and dynamic keys (e.g., hobby, height, weight) that follow the type restrictions of either string or number.



// Example 2 : Enforcing Specific Keys with Index Signature

// If you'd like to define a set of keys that are explicitly allowed in addition to the index signature, here's an approach:

interface ExtendedPerson {
    name: string;
    age: number;
    address: string;
    [key: string]: string | number; // Allow extra dynamic properties
  }
  
  const person1: ExtendedPerson = {
    name: "John",
    age: 30,
    address: "123 Street",
    phone: "123-456-7890",  // dynamic key
    height: 175,            // dynamic key
  };
  
  console.log(person1.name);   // "John"
  console.log(person1.address); // "123 Street"
  console.log(person1.phone);  // "123-456-7890"
  console.log(person1.height); // 175
  

//   Explanation:

//   name, age, address are predefined keys.

//   The index signature [key: string]: string | number; allows for any extra keys (like phone, height), ensuring that all values are either a string or number.

//   This pattern can be useful when you have a core structure (with defined keys) but also expect extra dynamic fields.