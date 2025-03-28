function addition1(n1: number, n2: number){
    return n1 + n2
}

function printresult2(num: number){
  console.log('Result: ' + num);
}


// call back function

function addAndHandle(n1: number, n2: number, cb:(num: number) => void) {   // cb is call back here
    const result = n1 + n2;
    cb(result)
}


let combineValues1: (a: number, b: number) => number; // we are setting type as a function so it will not accept string , number and boolean.

combineValues1 = addition1;

console.log(combineValues1(30,20));



addAndHandle(10,20, (result) => {
    console.log(result);
    return result;
});

