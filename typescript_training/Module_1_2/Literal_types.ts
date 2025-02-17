/*
            Literal types

 A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string, but a string is not "Hello World" inside the type system.

There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

*/

function combine1(
    input1: number | string,
    input2: number | string,
    resultConversion:string
    ) {

  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if(resultConversion === 'as-number'){
     return +result;
  } else {
      return result.toString();
  }
}

const combinedAges1 = combine1(30, 26, 'as-number');
console.log(combinedAges1);

const combinedNames1 = combine1('30','20','as-number');
console.log(combinedNames1);
