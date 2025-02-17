interface Person1 {
   name: string;
   age: number;

   greet(phrase: string): void;
}

let user1: Person1;

user1 = {
    name: 'Swaraj',
    age: 25,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
        
    }
}

user1.greet('Hi there - I am ');

