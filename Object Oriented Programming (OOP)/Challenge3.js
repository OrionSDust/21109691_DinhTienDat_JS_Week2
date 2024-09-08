// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%


// 1. Define the Parent Class 'Car'
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  // Method to increase speed
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // Method to decrease speed
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  // 2. Define the Child Class 'EV' inheriting from 'Car'
  function EV(make, speed, charge) {
    // Call the parent constructor
    Car.call(this, make, speed);
    this.charge = charge;
  }
  
  // Inherit methods from 'Car'
  EV.prototype = Object.create(Car.prototype);
  EV.prototype.constructor = EV;
  
  // 3. Implement the 'chargeBattery' method
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
  };
  
  // 4. Override the 'accelerate' method to include charge logic
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
  };
  
  // 5. Create an Electric Car object and test the methods
  const myEV = new EV('Tesla', 120, 23);
  
  // Test the methods
  myEV.accelerate();  // Tesla is going at 140 km/h, with a charge of 22%
  myEV.brake();       // Tesla is going at 135 km/h
  myEV.chargeBattery(90); // Charge battery to 90%
  console.log(`Current charge: ${myEV.charge}%`); // Current charge: 90%
  
  // Test accelerate again after charging
  myEV.accelerate();  // Tesla is going at 155 km/h, with a charge of 89%
  