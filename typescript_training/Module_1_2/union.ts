/*
                Union

Union types are used when a value can be more than a single type.

Such as when a property would be string or number.

Using the | we are saying our parameter is a string or number:

*/

function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`)
  }
  printStatusCode(404);
  printStatusCode('404');


 // Another Function

  function combine(input1: number | string, input2: number | string) {
    let result: number | string;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      result = input1 + input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  }
  
  const combinedAges = combine(30, 26);
  console.log(combinedAges);
  
  const combinedNames = combine('Max', 'Anna');
  console.log(combinedNames);
