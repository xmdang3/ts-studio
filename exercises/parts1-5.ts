// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 

import { SpaceLocation } from './SpaceLocation';


// Part 1: Declare (5) Variables With Type
//let spacecraftName : string = "Determination";
//let speedMph : number = 17500;
let kmToMars : number = 225000000;
let kmToMoon : number = 384400;
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
class Spacecraft {
    milesPerKm : number = 0.621;
    name : string;
    speedMph : number;
    constructor (name: string, speedMph: number){
        this.name = name;
        this.speedMph = speedMph;


    }

    getDaysToLocation(kmAway : number) : number {
        let milesAway : number = kmAway * this.milesPerKm;
        let hoursAway : number = milesAway/this.speedMph;
        let daysAway : number = hoursAway/24;
        return(daysAway)
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }

}




// Create an instance of the class here:

let spaceShuttle = new Spacecraft("Determination", 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kmToMars)} to get to Mars`)
//console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kmToMoon)} to get to Moon`)



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kmToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kmToMoon));
