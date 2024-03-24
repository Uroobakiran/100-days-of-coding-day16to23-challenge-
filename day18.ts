#!/usr/bin/env node
//**Question 52:** Make a Smartphone Object: 
//Create a simple way to keep track of a smartphone's details. Include its brand,
//  model, and other key features like how much storage it has, the size of 
//  its screen, and how long its battery lasts.

let smartPhone = {
    make: "readme ",
    model: "note 11", specification: {
        storage: "256GB",
        screenSize: "6.43",
        batteryLife:"24 hours"
    }
};

console.log(smartPhone)

// **Question 53:** Pulling Apart a Nested Object: 
// Imagine you have a list inside another list that shows what a computer programmer
//  knows, like coding languages, tools, and software frameworks. Find a way to get 
//  three specific skills from this list and show them.

let devoloperSkills = {
    languages:["javascript","c++","python"],
    tools:["Jenkins","Postman","Kubernetes"],
    frameworks:["Node.js","Django","Flutter"]
};
let {languages,tools,frameworks} = devoloperSkills

console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`)

// **Question 54:** Making Flexible Object Keys:
//  Learn how to set up a list where you can change the name of each section
//   based on what you need at that moment, like adjusting labels based on user 
//   choices.

