// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]



function printForecast(arr) {
    // Initialize an empty array to hold formatted strings
    let forecastArray = [];

    // Iterate over the array with the index
    for (let i = 0; i < arr.length; i++) {
        // Format the string as required
        let forecastString = `${arr[i]}oC in ${i + 1} days`;
        // Push the formatted string into the array
        forecastArray.push(forecastString);
    }

    // Join all formatted strings with " ... " and add leading and trailing " ... "
    let forecastString = " ... " + forecastArray.join(" ... ") + " ... ";

    // Output the final formatted string to the console
    console.log(forecastString);
}

// Test the function with the provided datasets
printForecast([17, 21, 23]); // Expected: " ... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ... "
printForecast([12, 5, -5, 0, 4]); // Expected: " ... 12oC in 1 days ... 5oC in 2 days ... -5oC in 3 days ... 0oC in 4 days ... 4oC in 5 days ... "
