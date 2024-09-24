// Complete the js code
// Car constructor function
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method added to Car prototype to return make and model as a string
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
    // Inherit properties from Car
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit Car prototype methods in SportsCar
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype to return top speed
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
}

// Example usage:
const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeModel()); // Output: "Toyota Corolla"

const mySportsCar = new SportsCar('Ferrari', '488', 211);
console.log(mySportsCar.getMakeModel()); // Output: "Ferrari 488"
console.log(mySportsCar.getTopSpeed());  // Output: 211




// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
