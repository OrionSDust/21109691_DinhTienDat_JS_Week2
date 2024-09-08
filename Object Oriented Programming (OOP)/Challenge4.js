// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%


// 1. Define the Parent Class 'CarCl'
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // Method to increase speed
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this; // Enable method chaining
    }
  
    // Method to decrease speed
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this; // Enable method chaining
    }
  }
  
  // 2. Define the Child Class 'EVCl' inheriting from 'CarCl'
  class EVCl extends CarCl {
    #charge; // Private property
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    // Method to charge the battery
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log(`${this.make} has a charge of ${this.#charge}%`);
      return this; // Enable method chaining
    }
  
    // Override the accelerate method to include charge logic
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
      return this; // Enable method chaining
    }
  }
  
  // 3. Create an Electric Car object and test the methods with chaining
  const myEV = new EVCl('Rivian', 120, 23);
  
  // Test method chaining
  myEV
    .accelerate()       // Rivian is going at 140 km/h, with a charge of 22%
    .accelerate()       // Rivian is going at 160 km/h, with a charge of 21%
    .brake()            // Rivian is going at 155 km/h
    .chargeBattery(90)  // Rivian has a charge of 90%
    .accelerate();      // Rivian is going at 175 km/h, with a charge of 89%
  
  // Test the updated brake method from CarCl
  myEV.brake(); // Rivian is going at 170 km/h
  