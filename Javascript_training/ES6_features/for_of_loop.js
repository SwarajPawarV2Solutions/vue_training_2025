// The For/Of Loop

// The for/of loop allows you to iterate over iterable objects like arrays, strings, Maps, and Sets but in a short syntax as compared to other loops.

// 1. Iterating Over an Array

const a = ["apple", "banana", "cherry"];
for (const fruit of a) {
  console.log(fruit);
}

// Output :

// apple
// banana
// cherry

// 2. Iterating Over a String

const s = "hello";
for (const char of s) {
  console.log(char);
}

// Output :

// h
// e
// l
// l
// o
