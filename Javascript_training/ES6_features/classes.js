//  Classes 

//  ES6 introduced classes in JavaScript. Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it.


class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

const dog = new Animal();
dog.speak();


// Output  :
// The animal makes a sound

// 1. class Animal {}: Defines a simple class named Animal.
// 2. speak(): A method inside the class that logs a message to the console.
// 3. new Animal(): Creates an object dog from the Animal class.
// 4. dog.speak(): Calls the speak method on the dog object.


