// Discriminated Unions

// Discriminated Unions in TypeScript are a powerful pattern that combines union types and literal types to create a type that can represent multiple possible structures, but where each structure has a unique "discriminating" property (often called a tag). This allows TypeScript to narrow down the possible types based on that property, making type-checking more precise.


// Definition:
// A discriminated union is a union of multiple types where each type in the union has a common property (known as a discriminator or tag) that holds a unique value. This tag allows TypeScript to determine the exact type within the union based on its value, enabling better type safety and more intelligent type narrowing in conditional logic.


interface Bird {
    type: 'bird' // literal type // This is discriminated union
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
//     if('flyingSpeed' in animal){
//         console.log('Moving with speed: ' + animal.flyingSpeed)
//     }
// }

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
            case 'horse':
                speed = animal.runningSpeed;
                break;

    }

    console.log('Moving at speed ' + speed);
  
}

moveAnimal({type: 'bird',flyingSpeed: 10});

moveAnimal({type: 'horse',runningSpeed: 10});