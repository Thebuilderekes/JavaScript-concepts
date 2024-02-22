const letters = ["a", "b", "c"]

const addedLetters = ["x", "y"]

//const newNumbers = numbers.splice(1, 0, "x", "y")

//console.log(newNumbers)

//the above code will not work as intended because splice() returns an array that contains the number of items removed from the array and not the new modified array. If you want to keep the original array unchanged and create a new array with the modified contents, you can use slice() instead:
const newLetters = ["a", "b", "c"];

// Using slice to create a new array with additional elements
const addingLetters = newLetters.slice();  //creates a copy of the newLetters array
addingLetters.splice(1, 0, "x", "y");

console.log(addingLetters); // Output: ["a", "x", "y", "b", "c"]

