// function capitalizeWord(word){
//  let newWord = " ";
//    for (let i = 0; i < word.length; i++) {
//           if(i % 2 ===0  ){
//           newWord += word[i].toUpperCase()
//           }else {
//             newWord += word[i].toLowerCase()
//           }

//    }

//    return newWord;
// };

// console.log(capitalizeWord("ekeopre"))

// const employees = [
//   {
//     name: "ekeopre",
//     age: 31,
//   },

//   {
//     name: "jessica",
//     age: 31,
//   },
// ];

// console.log(employees);

// function createData() {
//   for (let index = 0; index < 2; index++) {
//     employees.push({ name: " lisbon", age: 30 });
//   }
// }

// createData();

// const mappedArray = employees.filter((employee) => employee.name === "ekeopre");

// console.log(mappedArray);

// const array = [];

// for (let index = 1; index <= 100; index++) {
//   array.push(index + 5);
// }
// console.log(array);

// function logName() {
//   const employeeName = "ekeopre";
//   console.log(employeeName);
// }

// logName();

// {
//   candy : "sour lo",
//   quantity: 10
// }

// const myObject = (candy){

//

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// const getSum = () => {
//   for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
//   }

//   return sum;
// };

// let result = getSum();
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 6];
// const array = [];
// const printIndex = () => {
//   for (let index = 0; index < numbers.length; index++) {
//     array.push(index);
//   }
//   return console.log(array);
// };
// let result = printIndex();
// console.log(result);
// function factoryFunc(name, age){

//     return function(){
//         console.log(`my name is ${name} and i am ${age} years old `)
//     }

// }

// const mikel = factoryFunc("mike", 21)

// mikel()

//let sodiumChloride = (function(){
//    let chemicalFormula = 'NaCl';
//    let molarMass = 58.44;
//
//    return {
//      getProperties: function(){
//        console.log(`Formula: ${chemicalFormula}`);
//        console.log(`Molar Mass: ${molarMass} g/mol`);
//      }
//    };
//  })();
//
//
//
//  sodiumChloride.getProperties()
function addTwoNums(a, b) {
	console.log(a + b);
}

function randomNum() {
	return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
	return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
	getNumber = randomNum;
} else {
	getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());
