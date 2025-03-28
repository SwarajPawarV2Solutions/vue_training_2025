// synchronous

// synchronous means the code runs in a particular sequesnce of instructions given in the PerformanceNavigationTiming. Each instructions waits for the previous instructions to complete the exexution.

// console.log('one');
// console.log('two');
// console.log('three');

// Asynchronous

// Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and dosen't block the flow.

console.log("one");
console.log("two");

setTimeout(() => {
  console.log("hello");
}, 4000); // timeout

console.log("three");
console.log("four");
