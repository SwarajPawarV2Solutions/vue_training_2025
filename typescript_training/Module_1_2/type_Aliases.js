var timeInSecond = 10;
var time = 10;
var u1 = { name: 'Max', age: 30 }; // this works!
//This allows you to avoid unnecessary repetition and manage types centrally.
// For example, you can simplify this code:
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
// we can also write as as below
/*
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}

*/ 
