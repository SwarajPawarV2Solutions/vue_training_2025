// creating class
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    return Animal;
}());
var lion = new Animal('Lion');
console.log(lion);
//  class Department
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
// creating object of Department
var dept = new Department('IT');
console.log(dept);
