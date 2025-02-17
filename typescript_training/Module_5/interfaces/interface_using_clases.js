var Person1 = /** @class */ (function () {
    function Person1(n, id) {
        this.name = n;
        this.id = id;
    }
    Person1.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person1;
}());
var user1;
user1 = {
    name: 'Swaraj',
    id: 1,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1 = new Person1('Swaraj', 1);
user1.greet('Hi there - I am ');
user1.name = 'Champ';
console.log(user1);
user1.id = 5;
