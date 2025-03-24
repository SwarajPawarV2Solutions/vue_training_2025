  // Index properties

//   Index properties (or index signatures) in TypeScript are useful in situations where you want to define objects that can have an arbitrary number of properties with dynamic names, but you want to enforce that all these properties follow a specific type for their values. They allow you to create objects that behave like dictionaries, maps, or hash tables, where the keys are dynamically generated or unknown at compile time, but the values are of a consistent type.

// Example 1 

interface ErrorContainer{ // Email: 'Not a valid email', username: 'Must start with capital letters' 
   [key: string]: string;
}

const errorBag1: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character'
}

// 2. Handling Dynamic Properties
// When working with objects where you may need to handle properties dynamically (e.g., adding properties at runtime), index signatures give you the flexibility to do so while maintaining type safety.

// Example:
// When building a user profile system where each user can have custom attributes:

interface UserProfile {
    name: string;
    age: number;
    [key: string]: string | number;  // Allows dynamic properties like "location", "bio", etc.
  }
  
  const user1: UserProfile = {
    name: "John Doe",
    age: 30,
    location: "New York",
    bio: "Software Developer"
  };
  
  console.log(user.location);  // Output: "New York"
  