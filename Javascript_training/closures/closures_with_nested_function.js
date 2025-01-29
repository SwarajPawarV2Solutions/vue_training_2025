// A function defined in another functions will always have access to its outer scope i.e its lexical scope and will always provide you with the results

function greet() {
  let name = "swaraj";

  function displayName() {
    console.log("Hi " + name);

    let age = 26;

    function displayAge() {
      console.log("My age is " + age + " " + name);
    }

    return displayAge;
  }

  return displayName;
}

let g1 = greet();
console.log(g1);

g1(); // displayName

g2 = g1();
console.log(g2);

g2(); // displayAge
