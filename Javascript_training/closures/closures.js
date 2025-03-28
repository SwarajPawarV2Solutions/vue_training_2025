// closures

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

function test() {
  let a = 2;

  function test1() {
    // lexical scope
    console.log(a);
  }

  return test1;
}
let fun = test();
console.log(fun);

fun();

// * lexical scope -  this function always have access to its outer scope
