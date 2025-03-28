
const fly = {
    fly(){
        return `${this.name} flies!!!`
    },

    land(){
        return `${this.name}, the ${this.species}, returns to earth`
    }
}

const swim = {
    swim(){
        return `${this.name} swims underwater!!!`
    },
};

class Animal {
    
    constructor(name , species){
        this.name = name;
        this.species = species
    }
    greet(){
        return `${this.name} says hi`
    }
}

const dog= new Animal("brunow","Pitbull")
Object.assign(dog,fly);
Object.assign(dog,swim);