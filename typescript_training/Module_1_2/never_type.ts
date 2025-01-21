//In TypeScript, the Never type is a function that never returns a value but throws an exception or error and terminates the program. It is often used to indicate that a function will not return a value or that a variable will never have a value. Here's a brief overview of never:

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
}

generateError('An error occurred!', 500);