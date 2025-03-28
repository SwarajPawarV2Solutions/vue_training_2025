/* 
 Event Loop 

  1. Javascript has runtime model based on an event loop, which is responsible for executing the code, collecting and processig events, and executing queued sub-tasks

  2. The event loop pushes the task queue to the call stack.

  3. setTimeout(fun1, 0) can be used to defer a function until all the pending tasks (so far) have been executed

*/

/*

  How the event loop works:


1. Call Stack: When a function is called, it gets added to the call stack and is executed. Once it finishes, it is removed from the stack.

2. Web APIs (or Node.js APIs): These are provided by the environment (like the browser or Node.js) for handling asynchronous operations like setTimeout, fetch, event listeners, etc.

3. Callback Queue: When an asynchronous operation is complete, its callback function is placed in the callback queue. These are functions that are ready to be executed once the call stack is empty.

4. Event Loop: The event loop constantly checks if the call stack is empty. If it is, it moves the first function in the callback queue to the call stack, and the process repeats.

*/

console.log("Start");

setTimeout(function() {
  console.log("Middle");
}, 2000);

console.log("End");

// output

// Start
// End
// Middle



/* 

step-by-step Explaination
 
 1. "Start" is logged immediately because it's in the call stack and gets executed right away.

 2. setTimeout is an asynchronous function. When it’s called, it goes to the Web API to handle the delay (2 seconds in this case) and doesn’t block the next line of code.

 3. "End" is logged immediately after "Start" because setTimeout is non-blocking.

 4. After 2 seconds, the callback function inside setTimeout (which logs "Middle") is placed in the callback queue.

 5. Once the call stack is empty, the event loop moves the "Middle" callback from the queue to the call stack, and it gets executed.


*/

// The event loop in JavaScript is a mechanism that handles asynchronous code execution. It allows JavaScript to perform non-blocking operations by putting tasks (like functions, events, or I/O operations) into a queue and executing them one by one after the current execution stack is empty.

// It works like this:

// Call Stack: Executes synchronous code.
// Web APIs: Handles async tasks (like setTimeout, HTTP requests).
// Callback Queue: Holds completed async tasks.
// Event Loop: Moves tasks from the queue to the stack when it's empty.

