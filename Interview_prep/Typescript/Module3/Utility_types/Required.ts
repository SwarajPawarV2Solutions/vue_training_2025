//  Required<T>

// Makes all properties of type T required (opposite of Partial).

interface User2 {
    name: string;
    age?: number;
  }
  
  const user2: Required<User2> = {
    name: "Bob",
    age: 25, // Both properties are now required
  };
  