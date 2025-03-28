// Accessor (getter/setter) decorator
function AccessorDecorator(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Accessor Decorator!');
    console.log(target); // The prototype of the class (or the constructor for static methods)
    console.log(propertyName); // The name of the property (e.g., 'fullName')
    console.log(descriptor); // The PropertyDescriptor, which includes 'get' and 'set' methods
  }
  
  // Parameter decorator
  function ParameterDecorator(target: any, methodName: string | Symbol, parameterIndex: number) {
    console.log('Parameter Decorator!');
    console.log(target); // The prototype of the class
    console.log(methodName); // The name of the method
    console.log(parameterIndex); // The index of the parameter being decorated
  }
  
  // Method decorator (Log3)
  function Log3(target: any, methodName: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method Decorator!');
    console.log(target); // The prototype of the class
    console.log(methodName); // The name of the method
    console.log(descriptor); // The PropertyDescriptor for the method
  }
  
  // Employee class with decorators applied
  class Employee {
    firstName: string;
    lastName: string;
  
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter for fullName with Accessor Decorator
    @AccessorDecorator
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter for fullName with Accessor Decorator
    @AccessorDecorator
    set fullName(value: string) {
      const nameParts = value.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  
    // Method with Method Decorator and Parameter Decorators
    @Log3
    displayDetails(@ParameterDecorator age: number, @ParameterDecorator position: string) {
      console.log(`Employee Details: Age - ${age}, Position - ${position}`);
    }
  }
  
  // Create an Employee instance
  const emp = new Employee('John', 'Doe');
  
  // Access fullName using getter (logs Accessor Decorator)
  console.log(emp.fullName);
  
  // Set fullName using setter (logs Accessor Decorator)
  emp.fullName = 'Jane Smith';
  console.log(emp.fullName);
  
  // Call displayDetails method (logs Method and Parameter Decorators)
  emp.displayDetails(30, 'Developer');
  