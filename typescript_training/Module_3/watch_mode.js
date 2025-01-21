"use strict";
/*
                                                      Watch mode


    In TypeScript, watch mode is a feature that allows TypeScript to continuously monitor your project files for changes. When enabled, TypeScript will automatically recompile the project whenever any file in your project is modified. This is especially helpful in large projects where you don't want to manually run the TypeScript compiler (tsc) every time you make a change. It helps improve your development workflow by providing quick feedback during development.

    
    
    What Happens After Running Watch Mode:
    
    
    TypeScript will compile your .ts files into .js files and place them in the dist folder (as per the outDir option).
    As you make changes to any .ts file in the project, TypeScript will automatically detect the changes, recompile the files, and update the output.
    
    For example:
    
    Initially, when you run tsc -w, the TypeScript compiler will output the compiled JavaScript file in the dist folder.
    If you modify the index.ts file (e.g., changing the message), TypeScript will detect the change and immediately recompile the file without needing you to manually run the tsc command again.
    
    
    
    Benefits of Watch Mode:
    
    1. Automatic Recompilation: You don’t need to manually run the TypeScript compiler every time you change a file. It saves time and reduces the chance of forgetting to run tsc.
    
    2. Instant Feedback: As you make changes, you get immediate feedback from the compiler about errors or issues in your TypeScript code.
    
    3. Faster Development: It speeds up the development process by ensuring that your JavaScript files are always up-to-date with your TypeScript files.
    
    

    *  How to Enable Watch Mode

     After tsc filename.ts -w or --watch


*/
let char = 'Hello world';
console.log(char);
let num1 = 40, num2 = 60;
function add123(n1, n2) {
    let result3;
    result3 = num1 + num2;
    console.log(result3);
    return result3;
}
add123(num1, num2);
