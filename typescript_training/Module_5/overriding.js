/* Overriding

In TypeScript, overriding refers to the ability of a subclass to provide a specific implementation for a method that is already defined in its superclass. This allows a subclass to customize or extend the behavior of a method inherited from its parent class.
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
var Car = /** @class */ (function () {
  function Car() {}
  // Base class method
  Car.prototype.startEngine = function () {
    console.log("The car's engine is starting...");
  };
  return Car;
})();
var ElectricCar = /** @class */ (function (_super) {
  __extends(ElectricCar, _super);
  function ElectricCar() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  // Overriding the startEngine method in the ElectricCar subclass
  ElectricCar.prototype.startEngine = function () {
    console.log("The electric car's engine is starting silently...");
  };
  return ElectricCar;
})(Car);
var SportsCar = /** @class */ (function (_super) {
  __extends(SportsCar, _super);
  function SportsCar() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  // Overriding the startEngine method in the SportsCar subclass
  SportsCar.prototype.startEngine = function () {
    console.log("The sports car's engine roars to life!");
  };
  return SportsCar;
})(Car);
// Creating instances
var car = new Car();
var electricCar = new ElectricCar();
var sportsCar = new SportsCar();
car.startEngine(); // Output: The car's engine is starting...
electricCar.startEngine(); // Output: The electric car's engine is starting silently...
sportsCar.startEngine(); // Output: The sports car's engine roars to life!
