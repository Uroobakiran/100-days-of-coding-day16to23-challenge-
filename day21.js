// **Day 21 Challenge: Start Coding!** 
// **Question 61:** Making Enums for Vehicles:
//  Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
console.log(VehicleType);
let student = {
    name: "Izzha",
    age: 22,
    courses: ["English", "Mathematics", "Biology"]
};
console.log(student);
let circle = {
    kind: "circle",
    radius: 5
};
console.log(circle);
let rectangle = {
    kind: "rectangle",
    width: 20,
    height: 40
};
console.log(rectangle);
export {};
