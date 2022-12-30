// const mexico = {
//   id: 24,
//   name: "Mexico",
//   capital: "Mexico city",
//   neighbours: ["USA", "Guatemala", "Belize"],
// };

// mexico.id = 25;
// mexico.neighbours.push("Honduras");
// console.log(mexico);

// const myPet = {
//   name: "sudo",
//   type: "dog",
//   breed: "poodle",
//   age: 7,
//   friends: ["Bit", "Byte", "Data"],
// };

// console.log(myPet);

// myPet.breed = "Beagle";
// myPet.colour = "Black"
// myPet.friends.pop();
// console.log(myPet);

// myPet.friends.push("Chip");
// console.log(myPet);

const funObj = {};

// add a property. Note, passing the key as a number.
funObj[360] = "My House Number";
console.log(funObj);
// It returns true because the number 360 got converted into the string '360' internally!
// console.log(funObj[360] === funObj['360']
