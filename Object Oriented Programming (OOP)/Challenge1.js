// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h


// 1. Constructor function for Car
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // 2. Implement the 'accelerate' method
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // 3. Implement the 'brake' method
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // 4. Create 2 Car objects
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  // Test the methods on car1
  car1.accelerate(); // BMW is going at 130 km/h
  car1.accelerate(); // BMW is going at 140 km/h
  car1.brake();      // BMW is going at 135 km/h
  car1.brake();      // BMW is going at 130 km/h
  
  // Test the methods on car2
  car2.accelerate(); // Mercedes is going at 105 km/h
  car2.accelerate(); // Mercedes is going at 115 km/h
  car2.brake();      // Mercedes is going at 110 km/h
  car2.brake();      // Mercedes is going at 105 km/h
  