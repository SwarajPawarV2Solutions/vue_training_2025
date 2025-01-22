// creating class
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    return Animal;
}());
var lion = new Animal('Lion');
console.log(lion);
