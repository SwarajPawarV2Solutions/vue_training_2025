// Destructuring Assignment

// Destructing in JavaScript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts

// 1. Object Destructuring

const obj = { name: "Swaraj", age: 25 };
const { name, age } = obj;
console.log(name, age);

// Output  : Swaraj 25

// 2. Array Destructuring

const a = ["red", "blue", "green","black"];
const [first, second,...others] = a;
console.log(first, second);
console.log(others);


// output : red blue
