/*

  The readonly keyword is one of these features, used to set a property or variable as read-only, meaning that the value cannot be changed once it has been initialized. In other words, this keyword makes a property or variable immutable, ensuring that it remains constant throughout the program and cannot be accidentally altered.

  By using the readonly keyword, a variable or property in TypeScript can only be assigned a value during initialization or within the constructor of the class. This helps to ensure that the value cannot be changed afterwards, reducing the risk of unintentional modifications that may introduce bugs or unexpected behavior in the code. In other words, readonly provides a way to guarantee that certain values remain constant and unalterable throughout the program.



  Example 1:
  
  In this example, we have defined a name property as readonly. This means that the name property can only be set in the constructor and cannot be modified after that. However, the age property is not readonly, which means that it can be modified at any time.

*/

class Person { 
	readonly name: string; 
	age: number; 

	constructor(name: string, age: number) { 
		this.name = name; 
		this.age = age; 
	} 
} 

const person = new Person('Alice', 30); 

// person.name = 'Bob';  

//         |
//         v

// Error: Cannot assign to 'name' because 
// it is a read-only property
