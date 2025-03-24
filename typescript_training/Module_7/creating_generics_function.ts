
// Generics

// const names1: Array<string> = ['Mercedes']; // string[]
// names[0].split('');


// const promise = new Promise<string>((resolve , reject) => {
//     setTimeout(() => {
//        resolve('Task is completed')
//     }, 2000);
// });

function merge<T, U>(objA: T , objB: U) {
    return Object.assign(objA, objB);
  }
  
  console.log(merge({ name: 'max' }, { age: 30 }));
  