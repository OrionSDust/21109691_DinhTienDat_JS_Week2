// Function to convert underscore_case to camelCase
function convertToCamelCase(variable) {
    return variable
        .toLowerCase()
        .split('_')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

// Function to handle the conversion when the button is pressed
document.getElementById('convert').addEventListener('click', function() {
    // Get the input value from the textarea
    const input = document.getElementById('input').value;

    // Split the input into lines
    const lines = input.split('\n').map(line => line.trim()).filter(line => line.length > 0);

    // Process each line and log the results
    lines.forEach((line, index) => {
        // Convert each line to camelCase
        const camelCaseName = convertToCamelCase(line);
        
        // Create the checkmark string (one checkmark per line number)
        const checkmarks = '✅'.repeat(index + 1);

        // Log the output with checkmarks
        console.log(`${camelCaseName} ${checkmarks}`);
    });
});
