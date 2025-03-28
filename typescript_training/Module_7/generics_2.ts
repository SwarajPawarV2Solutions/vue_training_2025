// function getFirstElement(array: (number) []){
//     return array[0]
// }

// const numbers = [1,2,3]
// const firstNum = getFirstElement(numbers)
// console.log(firstNum);

// const strings = ['A','B']
// const firstString = getFirstElement(strings)



function getFirstElement<T>(array: T[]){
    return array[0]
}

const numbers = [1,2,3]
const firstNum = getFirstElement<number>(numbers)
console.log(firstNum);

const strings = ["c","b"]
const firstString = getFirstElement<string>(strings)
console.log(firstString)