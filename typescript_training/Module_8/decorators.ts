// Decorators are used in Meta-Programming 

// In TypeScript, decorators are special functions that can be attached to classes, methods, properties, or parameters. They provide a way to modify the behavior of the element they are attached to. Decorators are an experimental feature in TypeScript (and JavaScript, via a stage 2 proposal), and they allow you to add metadata or logic to the components they decorate.

// Definition:

// A decorator is a function that is prefixed with the @ symbol and is used to modify or augment the behavior of a class, method, property, or parameter. Decorators are called at runtime.


// Types of Decorators:

// 1) Class decorators - Applied to a class.
// 2) Method decorators - Applied to a method within a class.
// 3) Property decorators - Applied to a property of a class.
// 4) Parameter decorators - Applied to the parameters of a method.


// 1. Class Decorator Example
function LogClass(target: Function) {
    console.log('Class created');
    console.log(target);
    
  }

  function Hello(target: Function){
    console.log("Hello");
    
  }
 
@Hello
//  @LogClass
  class Example {
    constructor() {
      console.log("Example instance created.");
    }
  }

  const e1 = new Example()
