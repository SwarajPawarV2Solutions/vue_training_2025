abstract class car{
    brand: string;
    price: number;

    constructor(brand: string,price: number) {
        this.brand = brand;
        this.price = price;
    }
}

class car1 extends car{
    colour: string;
    constructor(brand:string,price:number,colour:string){
        super(brand,price);
        this.colour = colour;
      

    }
}

const car2 = new car1("Mercedes",500000,"red");
console.log(car2);

