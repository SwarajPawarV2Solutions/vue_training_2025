function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// @Logger('LOGGING - PERSON')
var Person = /** @class */ (function () {
    function Person() {
        this.name = "swaraj";
        console.log('Creating Person object...');
    }
    return Person;
}());
var p1 = new Person();
