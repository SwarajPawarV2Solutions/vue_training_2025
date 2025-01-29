// The let Keyword

// The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.

// It cannot be redeclared
// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope

let n = 10;

{
  let n = 2; // Block-scoped variable

  console.log(n); // 2
}

console.log(n); // 10

// It prevents variable leakage outside of the intended scope.
