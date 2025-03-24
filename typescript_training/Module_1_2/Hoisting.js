add(10, 40); // Hoisting is done for function declaration
// substract(20,15) -> gives error  Block-scoped variable 'substract' used before its declaration.Hoisting is not done for function expression
// function declaration
function add1(num1, num2) {
    var result = num1 + num2;
    console.log(result);
    return result;
}
// function expressions
var substract1 = function sub(num1, num2) {
    var result = num1 - num2;
    console.log(result);
    return result;
};
add(10, 5);
substract(20, 10);
