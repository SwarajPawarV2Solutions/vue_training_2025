
/*
What are async and await?

In JavaScript, async and await are used for handling asynchronous operations (like API calls, reading files, etc.) in a more readable and easy-to-understand way. Before async/await, we typically used callbacks or promises for async operations, but they could get messy (especially when there were multiple levels of nesting). async and await make it look like you're writing synchronous (normal) code, but it's actually asynchronous.

  ->  async: 

  This is a keyword you add before a function. It tells JavaScript that the function will return a promise, and inside this function, you can use the await keyword.

  ->  await: 

  This is used inside an async function to wait for a promise to resolve. It pauses the execution of the function until the promise is resolved or rejected.

*/

// 1. Simple Example 
// Imagine you are making an API call to get data, and it takes some time to respond.



// A simple async function using await
// async function getUserData() {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();  // wait for the data to be converted into JSON
//     console.log(data);  // Log the data when it’s ready
//   }
  
//   getUserData();

/*
  Explanation :

  1. async tells JavaScript that getUserData() is an asynchronous function that will return a promise.

  2. await tells JavaScript to wait until the fetch() request completes and the response is converted to JSON before moving forward.

  3. Without async/await, you'd need to deal with .then() or callbacks, which can get confusing when there are multiple async operations.

  */


//   Let’s say you have multiple async operations you need to perform in sequence, like getting a user's information and then fetching their posts.

 // 2. More Complex Example

  async function getUserPosts() {
    try {
      let userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
      let userData = await userResponse.json();
  
      console.log('User Data:', userData);
  
      let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`);
      let postsData = await postsResponse.json();
  
      console.log('User Posts:', postsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  getUserPosts();


  /*
  
  Explanation:

  1. We first fetch user data, then use the await to pause the execution until it gets the response.
  2. After getting the user data, we fetch the posts for that user using the user ID.
  3. We use try...catch to handle any errors in case the async operations fail.
  This is much cleaner than using .then() or chaining multiple promises.

  */



  /* 


                                           Why Use Async/Await?



 1. Readability:

Without async/await, code can become very messy, especially when you have multiple .then() or callback functions. async and await make it easier to read and maintain, as it looks like normal, synchronous code.

 2. Error Handling:

With async/await, you can handle errors using try...catch just like in synchronous code, which is easier than chaining .catch() methods with promises.

 3. Simpler Flow:

It provides a more natural flow for handling asynchronous code. Instead of nesting then() or callbacks, you can write a series of steps in a linear fashion.

 4. Avoiding Callback Hell:

Without async/await, you could end up in callback hell (deeply nested callbacks), especially if you have many asynchronous tasks. With async/await, you avoid that problem and keep the structure flat.

 5. Easier debugging:

It is easier to debug as you can use try...catch like you do in synchronous code.


 * async makes a function return a promise.
 * await makes the function wait for the promise to resolve before continuing.
 * This makes asynchronous code look and behave more like synchronous code, which is easier to read, understand, and  maintain.

  
  */




/* 

                                            Applications of Async and Await



 1. API Requests:

When you need to fetch data from an external API (for example, getting user info, weather data, etc.), async/await makes it easy to handle asynchronous responses and errors.

 2. Database Queries:

When interacting with databases (like MongoDB, MySQL), async/await is used to handle queries that take time to respond.

 3. File Operations:

If you're working with Node.js to read/write files asynchronously, async/await simplifies handling the results.

4. Timers and Delays:

Sometimes you may want to delay some actions for a certain period. You can use await with a timer function to make it cleaner.

*/
  
  
  
  