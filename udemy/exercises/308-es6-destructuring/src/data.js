const animals = [
  { name: "cat", sound: "meow", feedingRequirements: {
    food: 2,
    water: 3
  } },
  { name: "dog", sound: "woof" }
];

function useAnimals(animal) {
  return [
    animal.name , // name of animal
    function() { //  makes the sound of the animal
      console.log(animal.sound);
    }
  ];
}

export default animals;
export {useAnimals};
