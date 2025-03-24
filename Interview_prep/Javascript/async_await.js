
// A simple async function
async function greet() {
    return "Hello, world!";
  }

console.log(1);

console.log(2);

async function main() {
  const message = await greet();  // Wait for the result of greet
  console.log(message);  // Output: "Hello, world!"
}
  setTimeout(()=> {
    main();
  },5000)

console.log(3);
console.log(4);


