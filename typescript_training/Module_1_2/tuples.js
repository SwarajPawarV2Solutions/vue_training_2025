/*
Tuples


A tuple is a typed array with a pre-defined length and types for each index.

Tuples are great because they allow each element in the array to be a known type of value.

To define a tuple, specify the type of each element in the array:


*/
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
/*
    Readonly Tuple

A good practice is to make your tuple readonly.

Tuples only have strongly defined types for the initial values:

*/
// define our readonly tuple
var ourReadonlyTuple = [5, true, 'The Real Coding God'];
// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');
