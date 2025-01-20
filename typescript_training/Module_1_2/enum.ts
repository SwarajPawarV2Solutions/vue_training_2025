enum Role {Admin, Read_Only, Author};

const person2 = {
    name: 'Swaraj',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.Admin
};

if (person2.role === Role.Admin){
    console.log('is admin');
    
}
