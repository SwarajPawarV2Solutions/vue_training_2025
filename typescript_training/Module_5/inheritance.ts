/*

Inheritance

Inheritance is a fundamental concept in object-oriented programming (OOP). It allows one class to inherit properties and methods from another class. The class that inherits is called the child class, and the class whose properties and methods are inherited is called the parent class. Inheritance enables code reusability, allowing a class to leverage the functionality of an existing class without rewriting it.


Inheritance in TypeScript


JavaScript uses prototypal inheritance, not classical inheritance like Java or C++. Typescript uses class-based inheritance which is simply the syntactic sugar of prototypal inheritance. TypeScript supports only single inheritance and multilevel inheritance. In TypeScript, a class inherits another class using extends keyword.

*/

class Animal {
  sound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  display(): void {
    console.log("This is a Dog");
  }
}

class Cat extends Animal {
  display(): void {
    console.log("This is a Cat");
  }
}

let dog = new Dog();
dog.sound(); // Inherited from Animal class
dog.display(); // Specific to Dog class

let cat = new Cat();
cat.sound(); // Inherited from Animal class
cat.display(); // Specific to Cat class

/*
Output

Animal makes a sound
This is a Dog
Animal makes a sound
This is a Cat


*/

/* 
                                            Explanation:


Parent Class (Animal): The Animal class defines a method sound() that simply logs a generic message, "Animal makes a sound". This method is common for all animals, so it can be inherited by any child class.

Child Classes (Dog and Cat): Both Dog and Cat are child classes of Animal. They inherit the sound() method from the Animal class, meaning both Dog and Cat can call the sound() method even though they haven't defined it themselves.

Each child class also defines its own method display(). For example, the Dog class has a display() method that logs "This is a Dog", while the Cat class has a similar method that logs "This is a Cat".
Reusability: The key here is that the Dog and Cat classes reuse the sound() method from the parent class Animal, demonstrating inheritance and code reuse in object-oriented programming.

In this way, we can extend the Animal class for other animals like Bird, Lion, etc., all inheriting the common behavior (sound()), while still having the flexibility to add their own specific behaviors (like display()).


*/


class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// it.employees[2] = 'Anna';

it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.addReport('Something went wrong...');

accounting.printReports();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();