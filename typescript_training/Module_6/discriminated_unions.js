// Discriminated Unions
// function moveAnimal(animal: Animal) {
//     if('flyingSpeed' in animal){
//         console.log('Moving with speed: ' + animal.flyingSpeed)
//     }
// }
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 10 });
