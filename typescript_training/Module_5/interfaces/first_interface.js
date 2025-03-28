var user1;
user1 = {
    name: 'Swaraj',
    age: 25,
    greet: function (phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user1.greet('Hi there - I am');
