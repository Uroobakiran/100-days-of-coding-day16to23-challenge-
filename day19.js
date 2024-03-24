//  **Day 19 Challenge: Start Coding!** 
// **Question 55:** Double Numbers in an Array: 
// Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers = [1, 2, 3, 4, 5, 6];
let doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);
// **Question 56:** Keep Only Strings:
// Given a mix of different types of items, make a new list that has only the words.
let mixArray = ["apple", true, 4, "hira", false, 10];
let stringArray = mixArray.filter(item => typeof item === "string");
console.log(stringArray);
// **Question 57:** Find the Average Grade:
//  Given a list of grades, calculate the average grade.
let grades = [64, 75.83, 92, 97, 85, 74, 99];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrade);
export {};
