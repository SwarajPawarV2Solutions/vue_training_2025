// Higher Order Function

// higher Order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words,A Higher-order functions is a function that receives function as an argument or returns the function as output.

// Higher Order function that Receives a particular functions.
// callback is a function that passed to another function

let arr = [1,2,3,4,5]

// map

// Mp will Loop through every element of your array ansd will perform specific operations that you have provided

// Map method will always return you a new array with your results

const num = [1,2,3,4,5]
const squaredNum = num.map(function(n){
    return n*n
})

console.log(squaredNum)



const transactions = [1000,3000,4000,2000,-898,3800, -4500];
const inrToDollar = 80;

let transactionsInDollar = transactions.map(function(amount){
   return (amount/inrToDollar).toFixed(0)
   // .toFixed is used because we dont want decimal point
})

console.log(transactionsInDollar);




// forEach()

// It does not return a areay. It returns jus values values single handedly

// we cant return values in forEach

let transactionsInDollar1 = transactions.forEach(function(amount){
    console.log( (amount/inrToDollar).toFixed(0));
    
    // .toFixed is used because we dont want decimal point
 })

