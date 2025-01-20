const person1 = {
    name: 'Swaraj',
    age: 25,
    hobbies: ['Sports', 'Cooking']
};

let favouriteActivities: string[];
favouriteActivities = ['Sports']

console.log(person1.name);

for (const hobby of person1.hobbies){
    console.log(hobby.toUpperCase());

}

