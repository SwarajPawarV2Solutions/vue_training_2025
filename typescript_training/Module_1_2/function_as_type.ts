function addition(n1: number, n2: number){
    return n1 + n2
}

function printresult1(num: number){
  console.log('Result: ' + num);
}



let combineValues: (a: number, b: number) => number; // we are setting type as a function so it will not accept string , number and boolean.

combineValues = addition;

console.log(combineValues(30,20));

