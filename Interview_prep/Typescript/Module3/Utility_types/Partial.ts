//  Partial<T>

/*
 Partial<T> makes all properties in the given type T optional. This utility is helpful when you need to handle situations where not all properties of an object are available (e.g., during updates where only some properties are being set).

                                                           or

  Partial utility type constructs a type with all properties of the provided type T set to optional. It's useful when we want to create a new type where all properties can be present but aren't required.   

   syntax
   Partial<T>
  T- represents the original type whose properties are being made optional.
 */


interface User {
    name: string;
    age: number;
    email: string;
  }
  
  // Using Partial<T> to make all properties optional
  function updateUser(userId: string, userUpdates: Partial<User>) {
    // Function logic here
    console.log(userId, userUpdates);
  }
  
  const updates: Partial<User> = { age: 30 };
  updateUser('123', updates); // This works because `age` is optional in `Partial<User>`

  
  