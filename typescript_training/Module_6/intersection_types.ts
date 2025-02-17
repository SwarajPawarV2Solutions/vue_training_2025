// Intersection Type

//In TypeScript, an intersection type is used to combine multiple types into one. This allows you to create a new type that has all the properties and methods of the types being intersected.
//You can create an intersection type using the & (ampersand) operator. This means the resulting type will have the combined properties of all the types involved.

// An intersection type is a type that combines multiple other types. It allows an object to conform to more than one type simultaneously.


// Example 1
type Admin = {
    name: string;
    privileges: string[];
};

type Employee1 = {
    name: string;
    startDate: Date;
};

// Now we want a type which shoould be the combination of Admin and Employeee then we use "Intersection type".

type ElevatedEmployee = Admin & Employee1;
const e1:ElevatedEmployee = {
    name: 'Swaraj',
    privileges: ['hello'],
    startDate: new Date()
}


// Example 2

type Person = {
    name: string;
    age: number;
  };
  
  type Employee2 = {
    jobTitle: string;
    department: string;
  };
  
  type EmployeeWithDetails = Person & Employee2;
  
  const emp1: EmployeeWithDetails = {
    name: "John",
    age: 30,
    jobTitle: "Software Developer",
    department: "Engineering"
  };

  console.log(emp1);
  
  


