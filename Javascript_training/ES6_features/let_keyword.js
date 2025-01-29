// The let Keyword

// The let variables are mutable i.e. their values can be changed. It works similar to the var keyword with some key differences like scoping which makes it a better option when compared to var.


let n = 10;
2
{
3
    let n = 2; // Block-scoped variable
4
    console.log(n);
5
}
6
console.log(n);  // 2 
                 // 10


// It prevents variable leakage outside of the intended scope.

