// Complete the js code

function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding a method to the Car prototype
Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Inherit the properties of Car
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype in SportsCar
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding a method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed + ' km/h';
};

// Example usage:
const myCar = new Car("Toyota", "Camry");
console.log(myCar.getMakeModel()); // Output: Toyota Camry

const mySportsCar = new SportsCar("Ferrari", "488", 330);
console.log(mySportsCar.getMakeModel()); // Output: Ferrari 488
console.log(mySportsCar.getTopSpeed());  // Output: 330 km/h



// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
