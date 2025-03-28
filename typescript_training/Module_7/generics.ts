// Generics

const names1: Array<string> = ['Mercedes']; // string[]
names[0].split('');


const promise = new Promise<string>((resolve , reject) => {
    setTimeout(() => {
       resolve('Task is completed')
    }, 2000);
});
