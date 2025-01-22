// The spread operator in Typescript, denoted by three dots (`...`), is a powerful tool, that allows you to spread the elements of an array or objects into another array or objects. This operator makes it easy to copy arrays, combine arrays, or create shallow copies of iterable.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var oldArray = [1, 2, 3];
var newArray = __spreadArray([], oldArray, true);
console.log(newArray);
// Output :- [1, 2, 3]
