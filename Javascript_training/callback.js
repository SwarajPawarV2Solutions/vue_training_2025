// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, sum);

// we cann also pass complete function in it.

// calculator (1,2, (a,b) => {
//     console.log(a + b);
// });
