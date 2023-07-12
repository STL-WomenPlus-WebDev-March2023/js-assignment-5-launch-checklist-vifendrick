// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let thePlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, thePlanet.name, thePlanet.diameter, thePlanet.star, thePlanet.distance, thePlanet.moons, thePlanet.imageUrl)
   })
   
   let list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";
   let form = document.querySelector("form");

   form.addEventListener("formSubmit", function(event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput.value;
    let copilotInput = document.querySelector("input[name=copilotName]");
    let copilot = copilotInput.value;
    let fuelInput = document.querySelector("input[name=fuelLevel");
    let fuelLevel = fuelInput.value;
    let cargoInput = document.querySelector("input[name=cargoMass]");
    let cargoLevel = cargoInput.value;
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   });
});