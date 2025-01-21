function addition1(n1, n2) {
    return n1 + n2;
}
function printresult2(num) {
    console.log('Result: ' + num);
}
// call back function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues1; // we are setting type as a function so it will not accept string , number and boolean.
combineValues1 = addition1;
console.log(combineValues1(30, 20));
addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
});
