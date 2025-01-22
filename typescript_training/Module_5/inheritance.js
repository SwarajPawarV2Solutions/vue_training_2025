/*

Inheritance

Inheritance is a fundamental concept in object-oriented programming (OOP). It allows one class to inherit properties and methods from another class. The class that inherits is called the child class, and the class whose properties and methods are inherited is called the parent class. Inheritance enables code reusability, allowing a class to leverage the functionality of an existing class without rewriting it.


Inheritance in TypeScript


JavaScript uses prototypal inheritance, not classical inheritance like Java or C++. Typescript uses class-based inheritance which is simply the syntactic sugar of prototypal inheritance. TypeScript supports only single inheritance and multilevel inheritance. In TypeScript, a class inherits another class using extends keyword.

*/
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var Animal = /** @class */ (function () {
  function Animal() {}
  Animal.prototype.sound = function () {
    console.log("Animal makes a sound");
  };
  return Animal;
})();
var Dog = /** @class */ (function (_super) {
  __extends(Dog, _super);
  function Dog() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Dog.prototype.display = function () {
    console.log("This is a Dog");
  };
  return Dog;
})(Animal);
var Cat = /** @class */ (function (_super) {
  __extends(Cat, _super);
  function Cat() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Cat.prototype.display = function () {
    console.log("This is a Cat");
  };
  return Cat;
})(Animal);
var dog = new Dog();
dog.sound(); // Inherited from Animal class
dog.display(); // Specific to Dog class
var cat = new Cat();
cat.sound(); // Inherited from Animal class
cat.display(); // Specific to Cat class
/*
Output

Animal makes a sound
This is a Dog
Animal makes a sound
This is a Cat


*/
/*
                                            Explanation:


Parent Class (Animal): The Animal class defines a method sound() that simply logs a generic message, "Animal makes a sound". This method is common for all animals, so it can be inherited by any child class.

Child Classes (Dog and Cat): Both Dog and Cat are child classes of Animal. They inherit the sound() method from the Animal class, meaning both Dog and Cat can call the sound() method even though they haven't defined it themselves.

Each child class also defines its own method display(). For example, the Dog class has a display() method that logs "This is a Dog", while the Cat class has a similar method that logs "This is a Cat".
Reusability: The key here is that the Dog and Cat classes reuse the sound() method from the parent class Animal, demonstrating inheritance and code reuse in object-oriented programming.

In this way, we can extend the Animal class for other animals like Bird, Lion, etc., all inheriting the common behavior (sound()), while still having the flexibility to add their own specific behaviors (like display()).


*/
