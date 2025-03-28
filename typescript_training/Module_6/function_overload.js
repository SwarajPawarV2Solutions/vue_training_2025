// Function Overloading in typescript
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        // using union type
        // If stattement is type Gaurd here because it allows us to utlilze flexibility union type gives us and still ensures our code runs correctly at runtime
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = add("car", "bike"); // result is string
console.log(result.split("")); // Will work, because result is a string
var result1 = add(1, "bike"); // result1 is string
console.log(result1.split("")); // Will work, because result1 is a string
var result2 = add(1, 2); // result2 is number
console.log(result2); // Will output the number 3
