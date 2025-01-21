function addition(n1, n2) {
    return n1 + n2;
}
function printresult1(num) {
    console.log('Result: ' + num);
}
var combineValues; // we are setting type as a function so it will not accept string , number and boolean.
combineValues = addition;
console.log(combineValues(30, 20));
