interface Greetable {
  name: string;
 // Readonly 
   readonly id:number;

  greet(phrase: string): void;
}

class Person2 implements Greetable{
  name: string;
  age1: 30;
  id:number

  constructor(n: string,id: number){
    this.name = n;
    this.id = id;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
    
}
}

let user2: Greetable;


user2 = {
   name: 'Swaraj',
   id: 1,
   greet(phrase: string) {
       console.log(phrase + ' ' + this.name);
       
   }
}


user2 = new Person1('Swaraj',1)

user2.greet('Hi there - I am ');
user2.name = 'Champ'
console.log(user2);
//user1.id = 5  // this will give error  Cannot assign to 'id' because it is a read-only property.



