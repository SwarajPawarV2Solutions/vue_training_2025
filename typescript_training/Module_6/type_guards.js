// Type Guards
var e2 = {
    name: "Swaraj",
    privileges: ["hello"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        // using union type
        // If stattement is type Gaurd here because it allows us to utlilze flexibility union type gives us and still ensures our code runs correctly at runtime
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privilags: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(e2);
// methods
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo  .. .' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();
//     if('loadCargo' in vehicle){
//         vehicle.loadCargo(1000);
//     }
// }
// we can also use instanceoF method
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
