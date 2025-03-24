function Person(_name,_age){
  this.name  = _name
  this.age = _age
}

Person.prototype.getNameAndAge = function(){
    console.log(`Hi i am ${this.name} and my age is ${this.age}`);
    
  }

let person1 = new Person("swaraj",25)
let person2 = new Person("Bhushan",26)

console.log(person1)
console.log(person2)
console.log(person1.getNameAndAge())