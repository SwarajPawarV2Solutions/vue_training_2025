var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 25;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
