// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";
import animals, {useAnimals} from "./data.js";



// Destructuring Array:-
// console.log(animals);
const [cat,dog] = animals; 
// console.log(cat);

  // Working of useState (useAnimals defined in data.js)
  // const [animal, makeSound] = useAnimals(cat);
  // console.log(animal);
  // makeSound();


// Destructuring Objects:-
// const {name="Fluffy", sound="Purr"} = cat; 
// const {name, sound, feedingRequirements: {food, water}} = cat;
// console.log(food);


    const [honda,tesla] = cars;
    const {coloursByPopularity: [teslaTopColour], speedStats: {topSpeed: teslaTopSpeed}} = tesla;
    const {coloursByPopularity: [hondaTopColour], speedStats: {topSpeed: hondaTopSpeed}} = honda;
    
    // const [[teslaTopColour, teslaTopSpeed],[hondaTopColour, hondaTopSpeed]] = [[teslaColours[0], teslaSpeeds.topSpeed],[hondaColours[0], hondaSpeeds.topSpeed]];
    
    
    


    // const [teslaTopSpeed, teslaTopColour] = [tesla.coloursByPopularity[0], tesla.speedStats.topSpeed];
    
    // const [hondaTopSpeed, hondaTopColour] = [honda.coloursByPopularity[0], honda.speedStats.topSpeed];
  
    
    

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);