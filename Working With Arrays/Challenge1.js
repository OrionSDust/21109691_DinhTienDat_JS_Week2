function checkDogs(dogsJulia, dogsKate) {
    // Step 1: Create a shallow copy of Julia's array and remove the first and last two elements
    const correctedJulia = dogsJulia.slice(); // Create a shallow copy
    correctedJulia.splice(0, 2); // Remove the first two elements
    correctedJulia.splice(-2); // Remove the last two elements

    // Step 2: Combine corrected Julia's data with Kate's data
    const allDogs = correctedJulia.concat(dogsKate);

    // Step 3: Log whether each dog is an adult or a puppy
    allDogs.forEach((age, index) => {
        const status = age >= 3 ? 'an adult' : 'still a puppy';
        console.log(`Dog number ${index + 1} is ${status} and is ${age} years old`);
    });
}

// Test data
const juliaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const juliaData2 = [9, 16, 6, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

// Run the function for both test datasets
console.log("Test Data 1:");
checkDogs(juliaData1, kateData1);

console.log("\nTest Data 2:");
checkDogs(juliaData2, kateData2);
