let myObj = {

}

console.log(myObj)

let person1 = {
    name: 'Swaraj',
    age: 25
}

console.log(person1);
console.log(person1.hasOwnProperty('gender'))

// constructor function

function person(_name,_age){
    this.name = _name
    this.age = _age
}

let person2 = new person('Steve', 30)
console.log(person2);
