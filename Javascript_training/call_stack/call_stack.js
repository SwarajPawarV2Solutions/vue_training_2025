
// Call Stack 


// The call stack is a crucial concept in JavaScript’s runtime environment, representing the mechanism by which the JavaScript engine keeps track of function calls in a program. It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.


// Example : 1

function greeting(){

      // [1] Some code here

    sayHi()

    // [2] some code here
}

function sayHi(){
    return 'Hi' ;
}

// Invoke the 'greeting' function
greeting(); 

// [3] some code here


/* 
The call stack will be empty at the very beginning, and the code above would be executed like this:

   1)Ignore all functions, until it reaches the greeting() function invocation.

   2)Add the greeting() function to the call stack list, and we have:
     - greeting
   
   3) Execute all lines of code inside the greeting() function.

   4) Get to the sayHi() function invocation.

   5) Add the sayHi() function to the call stack list, like:
       - sayHi
       - greeting
   
   6) Execute all lines of code inside the sayHi() function, until reaches its end.

   7) Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.

   8) Delete the sayHi() function from our call stack list. Now the call stack looks like:
       - greeting

   9) When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.

  10) Delete the greeting() function from the call stack list. Once again, the call stack become empty.

  In summary, then, we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.
*/


/* 

  1. After invoking greeting () function the greeting function goes into call stack.
  2. Now sayHi() is inside the greeting() function so sayHi will go into call Stacck
  3. Now sayHi() will return 'Hi' and then sayHi() execuution context, variables gets destroyed and it gets removed from call stack but greeting() is  running in call stack.
  4. finally greeting() is also destroyed and sent out of call stack() 

*/





// Example :  2


function f1() {
	console.log('Hi by f1!');
}

function f2() {
	f1();
	console.log('Hi by f2!');
}

f2();

/*
Explaination of Example : 2


Step 1: When the code loads in memory, the global execution context gets pushed in the stack.

Step 2: The f2() function gets called, and the execution context of f2() gets pushed into the stack.

Step 3: The execution of f2() starts and during its execution, the f1() function gets called inside the f2() function. This causes the execution context of f1() to get pushed in the call stack.

Step 4: Now the f1() function starts executing. A new stack frame of the console.log() method will be pushed to the stack.

Step 5: When the console.log() method runs, it will print “Hi by f1” and then it will be popped from the stack. The execution context will go back to the function and now there are no lines of code that remain in the f1() function, and as a result, it will be popped from the call stack.

Step 6: This will similarly happen with the console.log() method that prints the line “Hi by f2” and then finally the function f2() would finish and would be pushed off the stack.


*/