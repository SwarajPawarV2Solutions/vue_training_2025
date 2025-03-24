// filter Method

// Filter return a new Array it will return all those elements that matches the specific conditions.

// If the condition is true it will return the element for that conditionn and if it is false it will discard that element.

// filter method is used we want to check some of the conditions

let numbers = [1, 2, 20 , 35, 12, 17 ,46]
let evenNum = numbers.filter(function(n){
   return n%2 == 0
})

console.log(evenNum);



const transactions = [1000,3000,4000,2000,-898,3800, -4500];

let deposited = transactions.filter(function(n){
    return n >= 0
})

console.log(deposited)
