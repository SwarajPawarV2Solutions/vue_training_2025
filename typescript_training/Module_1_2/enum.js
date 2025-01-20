var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_Only"] = 1] = "Read_Only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var person1 = {
    name: 'Swaraj',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};
if (person1.role === Role.Admin) {
    console.log('is admin');
}
