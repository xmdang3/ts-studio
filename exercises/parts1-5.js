"use strict";
// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
// Part 1: Declare (5) Variables With Type
//let spacecraftName : string = "Determination";
//let speedMph : number = 17500;
var kmToMars = 225000000;
var kmToMoon = 384400;
//let milesPerKm : number = 0.621;
// Part 2: Print Days to Mars
//let milesToMars : number = kmToMars * milesPerKm;
//let hoursToMars : number = milesToMars/speedMph;
//let daysToMars : number = hoursToMars/24;
// Code an output statement here (use a template literal):
//console.log(`${spacecraftName} would take ${daysToMars} to get to Mars`)
// Part 3: Create a Function ("getDaysToLocation")
/*
function getDaysToLocation(kmAway : number) : number {
    let milesAway : number = kmAway * milesPerKm;
    let hoursAway : number = milesAway/speedMph;
    let daysAway : number = hoursAway/24;
    return(daysAway)
}
*/
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//console.log(`${spacecraftName} would take ${getDaysToLocation(kmToMars)} to get to Mars`)
//console.log(`${spacecraftName} would take ${getDaysToLocation(kmToMoon)} to get to Moon`)
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKm = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kmAway) {
        var milesAway = kmAway * this.milesPerKm;
        var hoursAway = milesAway / this.speedMph;
        var daysAway = hoursAway / 24;
        return (daysAway);
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spacecraft("Determination", 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kmToMars)} to get to Mars`)
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kmToMoon)} to get to Moon`)
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kmToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kmToMoon));
