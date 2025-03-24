// Function Currying

// Currying is just a concept that transform your function that will take multiple arguments into smaller function into single functions that will take single arguments.

// let sum = function(x,y){
//     console.log(x + y)
// }

// sum(2 , 3)

let sumCurried = function(x){
    return function(y){
        console.log(x + y);
        
    }
}

let sumTwoNumbers = sumCurried(2)
sumTwoNumbers(3)

