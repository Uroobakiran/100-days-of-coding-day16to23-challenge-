#!/usr/bin/env node
// **Day 21 Challenge: Start Coding!** 

// **Question 61:** Making Enums for Vehicles:
//  Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum VehicleType {
    Car, Truck, Motorcycle
}

console.log(VehicleType);


// **Question 62:** Making a Student Template: 
// Create a blueprint for student information, including their name, age, 
// and the classes they're taking, and then fill in this blueprint with an example student.

interface Student {
    name: string;
    age: number;
    courses: string[];
}
let student: Student = {
    name: "Izzha",
    age: 22,
    courses: ["English","Mathematics","Biology"]
};

console.log(student);

// **Question 63:** Shape Shifter: 
// Write a program that can describe either a circle or a rectangle using a special type alias,
//  including properties unique to each shape.

type Shape = {
    kind: "circle" | "rectangle";
    radius?: number;   //only for circle
    width?: number;    //only for rectangle
    height?: number;   //only for rectangle
};

let circle: Shape = {
    kind: "circle",
    radius: 5
};

console.log(circle);

let rectangle: Shape = {
    kind: "rectangle",
    width: 20,
    height: 40
};


console.log(rectangle);