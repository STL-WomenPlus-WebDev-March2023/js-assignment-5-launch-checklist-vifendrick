// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const div = document.getElementById("missionTarget");
    div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;           
}

function validateInput(testInput) {
   let checkNumber = Number(testInput);
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(checkNumber)) {
    return "Not a Number";
   } else {
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   if (validateInput(pilot) === "Empty" | validateInput(copilot) === "Empty" | validateInput(fuelLevel) === "Empty" | validateInput(cargoLevel) === "Empty") {
    alert("Please fill in all fields!");
   } else if (validateInput(pilot) === "Is a Number" | validateInput(copilot) === "Is a Number" | validateInput(fuelLevel) === "Not a Number" | validateInput(cargoLevel) === "Not a Number" ) {
    alert("Please fill in fields with correct information!")
   } else {
    pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;
    list.style.faultyItems = "visible";
    if (fuelLevel < 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        launchStatus.innerHTML = `Shuttle Not Ready to Launch`;
        launchStatus.style.color = '#C7254E';
    } else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        launchStatus.innerHTML = `Shuttle Not Ready to Launch`;
        launchStatus.style.color = '#C7254E';
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = `Shuttle Not Ready to Launch`;
        launchStatus.style.color = '#C7254E';
    } else {
        fuelStatus.innerHTML = `Fuel level high enough for launch`;
        cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        launchStatus.innerHTML = `Shuttle is ready to launch`;
        launchStatus.style.color = '#419F6A';
    }
   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
