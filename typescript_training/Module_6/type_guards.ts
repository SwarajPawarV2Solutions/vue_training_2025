// Type Guards

// TypeScript is a strongly typed programming language that is built on top of JavaScript. One of its key features is the ability to use type guards. A type guard is a construct in TypeScript that allows you to narrow down the type of a variable or expression to a more specific type. This can be very useful when working with complex data structures and when you need to ensure that your code is type-safe.

// Example 1
type Admin1 = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Now we want a type which shoould be the combination of Admin and Employeee then we use "Intersection type".

type ElevatedEmployee1 = Admin1 & Employee;
const e2: ElevatedEmployee1 = {
  name: "Swaraj",
  privileges: ["hello"],
  startDate: new Date(),
};

//  code for Understanding Type Guard
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;

function add1(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    // using union type
    // If stattement is type Gaurd here because it allows us to utlilze flexibility union type gives us and still ensures our code runs correctly at runtime
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Employee | Admin1; // using union type

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privilags: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e2)



// methods

class Car {
    drive(){
        console.log('Driving...');
    }
}

class Truck {
    drive(){
        console.log('Driving a truck...');
    }
    loadCargo(amount: number) {
     console.log('Loading cargo  .. .' + amount);
    }
}


type Vehicle = Car | Truck;

const v1 = new Car(); 
const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if('loadCargo' in vehicle){

//         vehicle.loadCargo(1000);
//     }
// }

// we can also use instanceoF method
function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){

        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2)