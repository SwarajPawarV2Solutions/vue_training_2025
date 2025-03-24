//  Pick<T, K>

/* 

Pick<T, K> constructs a new type by selecting a subset of properties from type T based on the keys specified in K. K must be a subset of the keys in T.

*/

interface User {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
  }
  
  // Using Pick<T, K> to create a new type with only the `name` and `email` properties
  type UserContactInfo = Pick<User, 'name' | 'email'>;
  
  const contact: UserContactInfo = {
    name: 'Swaraj',
    email: 'swaraj@gmail.com',
  };
  