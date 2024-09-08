// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h



// 1. Define the ES6 class 'CarCl'
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    // 2. Method to increase speed
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // 3. Method to decrease speed
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    // 4. Getter for speed in miles per hour
    get speedUS() {
      return this.speed / 1.6;
    }
  
    // 5. Setter for speed in miles per hour
    set speedUS(speedMi) {
      this.speed = speedMi * 1.6;
    }
  }
  
  // 6. Create a new car and test the methods and getter/setter
  const car1 = new CarCl('Ford', 120);
  
  // Test the methods
  car1.accelerate(); // Ford is going at 130 km/h
  car1.brake();      // Ford is going at 125 km/h
  
  // Test the getter
  console.log(`Current speed in US units: ${car1.speedUS} mi/h`); // Current speed in US units: 78.125 mi/h
  
  // Test the setter
  car1.speedUS = 100; // Set speed in miles per hour
  console.log(`Current speed in km/h: ${car1.speed}`); // Current speed in km/h: 160 km/h
  