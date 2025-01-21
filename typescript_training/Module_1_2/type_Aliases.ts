/* 

                                               Type Aliases



Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.


Aliasing doesn’t actually create a new type - it creates a new name to refer to that type. Aliasing a primitive is not terribly useful, though it can be used as a form of documentation.

Just like interfaces, type aliases can also be generic - we can just add type parameters and use them on the right side of the alias declaration:

type Container<T> = { value: T };

*/
type Second = number;
 
let timeInSecond: number = 10;
let time: Second = 10;




/*

                                            Type Aliases and Object type


Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

*/
// For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
//This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// we can also write as as below

/*
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}                                   

*/