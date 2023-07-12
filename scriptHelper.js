// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;      
}

function validateInput(testInput) {
   let checkForNumber = Number(testInput);
   if (testInput === "") {
    return "Empty";
   } else if (isNaN(checkForNumber)) {
    return "Not a Number";
   } else  if (isNaN(checkForNumber) === false) {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilot = document.getElementById("pilotName");
   let copilot = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoLevel = document.getElementById("cargoMass");
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
    if (fuelLevel < 10000 && cargoLevel >= 10000) {
        list.style.faultyItems = "visible";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        cargoStatus.innerHTML = `Cargo mass too high for launch`;
        launchStatus.innerHTML = `Shuttle not ready to launch`;
        launchStatus.style.color = '#C7254E';
    } else if (fuelLevel >= 10000 && cargoLevel >= 10000) {
        list.style.faultyItems = "visible";
        cargoStatus.innerHTML = `Cargo mass too high for launch`;
        launchStatus.innerHTML = `Shuttle not ready to launch`;
        launchStatus.style.color = '#C7254E';
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        list.style.faultyItems = "visible";
        fuelStatus.innerHTML = `Fuel level too low for launch`;
        launchStatus.innerHTML = `Shuttle not ready to launch`;
        launchStatus.style.color = '#C7254E';
    } else {
        launchStatus.innerHTML = `Shuttle is ready to launch`;
        launchStatus.style.color = '#419F6A';
    }
   }
   
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
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
