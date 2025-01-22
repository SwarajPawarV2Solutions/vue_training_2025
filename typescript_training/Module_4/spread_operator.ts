// The spread operator in Typescript, denoted by three dots (`...`), is a powerful tool, that allows you to spread the elements of an array or objects into another array or objects. This operator makes it easy to copy arrays, combine arrays, or create shallow copies of iterable.


let oldArray: number[] = [1, 2, 3];
let newArray: number[] = [...oldArray];
console.log(newArray); 


// Output :- [1, 2, 3]
