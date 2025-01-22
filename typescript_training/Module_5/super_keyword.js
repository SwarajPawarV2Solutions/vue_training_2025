/*

                                                  Super Keyword:

TypeScript uses the super keyword to call the properties and methods of the parent class. The primary use of the super keyword is:

To call a constructor of a parent class
To call the method of the parent class

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getName = function () {
        return "I am ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        // Invoking the constructor of the Person class
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.displayInfo = function () {
        console.log(_super.prototype.getName.call(this));
        console.log("My Job title is ".concat(this.jobTitle));
    };
    return Employee;
}(Person));
var employee = new Employee("Swaraj", "Pawar", "Developer");
employee.displayInfo();
/*
 Output

 I am Swaraj Pawar.
 my Job title is Developer

*/
/*

 Explanation: Here, the Employee class calls the constructor of the Person class using super( ) to initialize firstName and lastName. It also calls the getName( ) using super in its own method.

*/ 
