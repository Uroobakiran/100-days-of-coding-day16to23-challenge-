// *Question 46:** Enhanced Laptop Object: 
// Construct an object for a laptop including properties
//  `make`, `model`, `year`, and a method `describe()` that
//  logs a sentence about the laptop.
let laptop = {
    make: "hp",
    model: "XPS 15",
    year: 2021,
    describe: function () {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
laptop.describe();
// **Question 47: Advanced Array Destructuring:
//  Given an array of objects representing different laptops, each with properties `make`, `model`, and `year`
// use array destructuring to assign the first and second laptops to variables.
//  Then, log these const newLocal = variables.
// ** Explain & TIP:** Destructuring can also be used to quickly extract elements from arrays of objects, simplifying access to complex data structures.
let laptops = [{ making: "lenevo", model: "Lenovo ThinkPad X1 Carbon", year: 2021 },
    { making: "hp ", model: "spectre", year: 2021 },
    { making: "HP", model: "Envy x360", year: 2020 }];
let [laptop1, laptop2] = laptops;
console.log(laptop1);
console.log(laptop2);
// **Question 48:** Combining Arrays with Spread Operator: 
// Suppose you're comparing prices of two different sets of laptops. 
// Use the spread operator to combine these arrays into a single array
//  sorted in ascending order, then log the result.
let laptopPrices1 = [1300, 5000, 1700];
let laptopPrices2 = [1500, 1400, 1000];
let combinedPrices = [...laptopPrices1, ...laptopPrices2].sort((a, b) => a - b);
console.log(combinedPrices);
export {};
