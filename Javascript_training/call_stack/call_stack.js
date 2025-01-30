
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

// [3] spme code here



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