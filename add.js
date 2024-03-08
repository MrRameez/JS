// Receive user input as strings using prompt
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert strings to numbers (assuming valid input)
let num3 = parseFloat(num1);
let num4 = parseFloat(num2);

// Perform addition
let result = num3 + num4;

// Display the result
alert("The sum is: " + result);