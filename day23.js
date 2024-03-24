//  **Day 23 Challenge: Start Coding!** 
// **Question 67:** Arithmetic with Mixed Types:
//  Write a function that takes two parameters: 
// a number and a string that represents a number (e.g., `"5"`). Return their sum as a number. 
function number_string(number1, numberString) {
    return number1 + Number(numberString);
}
console.log(number_string(42, "4"));
// **Question 68:** Multiplying Decimals:
//  Create a function that accepts two decimal numbers and returns their product.
//  Round the result to two decimal places.
function multiplyDecimal(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(multiplyDecimal(0.1, 0.2));
// **Question 69:** Dividing and Finding the Remainder: 
// Write a function that divides two numbers and returns both the quotient and the remainder. 
// Use an object to return both values.
function divide_remainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(divide_remainder(10, 3));
export {};
