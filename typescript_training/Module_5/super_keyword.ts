/*

                                                  Super Keyword:

TypeScript uses the super keyword to call the properties and methods of the parent class. The primary use of the super keyword is:

To call a constructor of a parent class
To call the method of the parent class

*/

class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName(): string {
    return `I am ${this.firstName} ${this.lastName}.`;
  }
}
class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // Invoking the constructor of the Person class
    super(firstName, lastName);
  }
  displayInfo(): void {
    console.log(super.getName());
    console.log(`My Job title is ${this.jobTitle}`);
  }
}
let employee = new Employee("Swaraj", "Pawar", "Developer");

employee.displayInfo();

/* 
 Output

 I am Swaraj Pawar.
 my Job title is Developer

*/

/*

 Explanation: Here, the Employee class calls the constructor of the Person class using super( ) to initialize firstName and lastName. It also calls the getName( ) using super in its own method.

*/
