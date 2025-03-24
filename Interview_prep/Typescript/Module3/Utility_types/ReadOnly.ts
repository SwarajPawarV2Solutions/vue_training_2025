// Readonly<T>

// Readonly<T> constructs a type where all properties of T are made readonly, meaning they cannot be reassigned after the object is created. This is useful when you want to ensure that an object’s properties cannot be changed.

interface User1 {
    name: string;
    age: number;
  }
  
  // Using Readonly<T> to make all properties readonly
  const user1: Readonly<User1> = {
    name: 'Bob',
    age: 25,
  };
  
 // user1.age = 30; // Error: Cannot assign to 'age' because it is a read-only property.
  