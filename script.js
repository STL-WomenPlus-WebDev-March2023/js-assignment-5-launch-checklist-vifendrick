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
   
});