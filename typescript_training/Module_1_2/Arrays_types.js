var person1 = {
    name: 'Swaraj',
    age: 25,
    hobbies: ['Sports', 'Cooking']
};
var favouriteActivities;
favouriteActivities = ['Sports'];
console.log(person1.name);
for (var _i = 0, _a = person1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
