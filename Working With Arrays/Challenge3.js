// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
const calcAverageHumanAge = (ages) => 
    ages
        .map(dogAge => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4) // Convert dog age to human age
        .filter(humanAge => humanAge >= 18) // Exclude dogs less than 18 human years old
        .reduce((sum, age, _, array) => sum + age / array.length, 0); // Calculate average age

// Test data
const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log("Average human age for Data 1:", calcAverageHumanAge(data1));
console.log("Average human age for Data 2:", calcAverageHumanAge(data2));
