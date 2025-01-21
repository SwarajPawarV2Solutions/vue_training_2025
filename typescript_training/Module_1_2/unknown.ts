/*
      What is an unknown type and when to use it in TypeScript ?


      In Typescript, any value can be assigned to unknown, but without a type assertion, unknown can’t be assigned to anything but itself and any. Similarly, no operations on an unknown are allowed without first asserting or restricting it down to a more precise type.  similar to any, we can assign any value to the unknown, just like any other; even so, unlike any, we can’t access any properties on unknown values, nor can we call or construct them. In addition, unknown values can only be assigned to unknown or any.

      Unknown type is used to make our code type-safe. when we use the unknown type we have to write extra code but finally, our code will be type-safe. type safety is nothing but the prevention of type errors.

      */

// Example 1:

// When variables of other value types are assigned to unknown.

// In this example, we assign values of different types to the unknown variable. we can see that it doesn’t raise any error. unknown type lies on the top when it comes to variable types in Typescript.

let val: unknown;
console.log(val);
val = true;
console.log(val);
val = 7;
console.log(val);
val = "geeks for geeks";
console.log(val);
val = [1, 2, 3, 4];
console.log(val);
val = { name: "rachel" };
console.log(val);
val = Math.random();
console.log(val);
val = null;
console.log(val);
val = undefined;
console.log(val);

/* 
            Output:

undefined
true
7
geeks for geeks
[ 1, 2, 3, 4 ]
{ name: 'rachel' }
0.776446663785197
null
undefined
    
    */

/* 

  Example 2: 
  
  unknown is assigned to unknown and other type values

As it’s given in the introduction, an unknown type variable can only be assigned to another unknown type variable or a variable of type any. unknown type is displayed as “undefined”.

*/

let a: unknown;
console.log(a);
let b: unknown = a;
console.log(b);
let c: any = a;
console.log(c);

/* 

     Output

     Undefined
     Undefined
     Undefined

*/

/*
  Example 3:  
 In this example, we tried to assign an unknown type value to a variable of type number, an error is raised.


let unknown: unknown; 
let num: number = unknown; // Error 
console.log(num); 


Output:


error TS2322: Type 'unknown' is not assignable to type 'number'.
let num: number = a; // Error

*/

/*

xample 4: 

In typescript, we can’t perform operations on unknown type values. Object type operations cannot be performed on unknown type values. 

let unknown_val: unknown; 
    unknown_val.split(""); 
    console.log(unknown_val); 



Output:

error TS2339: Property 'split' does not exist on type 'unknown'.

*/

let userInput: unknown;
