// **Question 49:** Function with Rest Parameters:
//  Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.
function multiple_hobbies(...hobbies: string[]){
    hobbies.forEach(hobby=>{
        console.log(`I love ${hobby}.`)
    })
 }
 // Defines a function that accepts multiple hobbies as arguments
function logHobbies(...hobbies: string[]) {
    // Loops through each hobby in the array
    hobbies.forEach(hobby => {
        // Logs a statement for each hobby
        console.log(`I enjoy ${hobby}.`);
    });
}

// Calls the function with three hobbies
logHobbies("reading", "coding", "cycling");

//**Question 50:** Multiline Template Literals: 
//Use template literals to create a multiline string that describes your ideal day.
//Include at least three different activities.
let myIdealDay = `My ideal day would involve: 
1.Starting the day with a peaceful morning routine, such as meditation or light exercise.
2.Engaging in meaningful work or creative activities that inspire me.
3.Taking breaks to enjoy nature or connect with friends over coffee.
4.Unwinding in the evening with yoga or a favorite movie.
5.Ending the day with a cozy dinner with loved ones or relaxing alone time with a good book.`;

console.log(myIdealDay);

// **Question 51:** Refactoring to Arrow Functions:
// Take a simple function that calculates the area of a rectangle and refactor 
// it into an arrow function.

// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number): number {
    return width * height;
}

// Refactored into an arrow function
let calculateAreaArrow = (width: number, height: number): number => width * height;

// Example usage of the arrow function
console.log(calculateAreaArrow(6, 9)); // Logs the area of the rectangle

