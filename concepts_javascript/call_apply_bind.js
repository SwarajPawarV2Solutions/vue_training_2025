let person1 = {
  firstName: "Swaraj",
  lastName: "Pawar",
  age: 25,
};
let printDetails = function (city) {
  console.log(
    `Hi i am ${this.firstName} ${this.lastName} and I am ${this.age} years old and I am from ${city}`
  );
};

let person2 = {
  firstName: "Champ",
  lastName: "Sj",
  age: 25,
};

// call
printDetails.call(person1, "Mumbai");

// // Apply
printDetails.apply(person2, ["Pune"]);

// Bind

let myFun = printDetails.bind(person1, "Mumbai");
console.log(myFun);

myFun();
