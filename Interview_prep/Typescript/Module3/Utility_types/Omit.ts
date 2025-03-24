//  Omit<T, K>

/*

  Omit<T, K> constructs a new type by excluding properties specified in K from type T. This is the opposite of Pick<T, K>.

*/

interface User {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
  }
  
  // Using Omit<T, K> to exclude the `age` and `isActive` properties from the type `User`
  type UserWithoutAge = Omit<User, 'age' | 'isActive'>;
  
  const user: UserWithoutAge = {
    name: 'Alice',
    email: 'alice@example.com',
  };
  