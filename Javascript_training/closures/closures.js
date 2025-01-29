// closures

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
