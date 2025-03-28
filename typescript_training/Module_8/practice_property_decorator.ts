function Capitalize(target: any, PropertyKey: string) {
    let value: string;

    const getter = function() {
        return value.charAt(0).toUpperCase() + value.slice(1).toLocaleLowerCase();
    }

    const setter = function(newVal: string) {
        value = newVal;
    }

    Object.defineProperty(target, PropertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}

class Product1 {
    @Capitalize
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

const p = new Product1('Samsung', 2400);
console.log(p.name);  // Output: 'Samsung' (capitalized first letter)
