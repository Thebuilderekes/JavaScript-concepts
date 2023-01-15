//DONT ADD STUFF ON THE PROTOYPES, THIS IS ONLY FOR LEARNING PURPOSES

//The "this" keyword can be dynamic. We can only tell what it is binding with at the point when it is called.
//Arrow functions should not be used with the This keyword

//In the examples below, we can see that the "this" keyword takes the value of whatever object in which it is found because it was appplied on the general object protoype of all objects in the file.

// Object.prototype.greet = function () {
//   console.log(this);
//   console.log(`This ${this.job} is ${this.age} years old `);
// };

//1
// const developer = {
//   name: "Ekeopre",
//   age: 31,
//   job: "web developer",
// };

// const teacher = {
//   name: "Candice",
//   age: 39,
//   job: "teacher",
// };

// developer.greet();
// teacher.greet();

// the "this" keyword id binding to whatever is on the left of the greet fuction which in this case is developer and car as shown below

//2
// const developer = {
//   name: "Ekeopre",
//   age: 31,
//   job: "web developer",
//   greet: function () {
//     console.log(`hello, my name is ${this.name}`);
//   },
// };

// developer.greet(); // translates to using developer as the this for the greet function

//3
// const car = {

//     make : "bmw",
//     model : "745i",
//     year: 2010,

//     getPrice : function(){
//         return 5000;
//     },

//     printDescription: function(){
//developer.greet();
//         console.log(this.make + "  " + this.model); // translates to using car as the "this" for the printDescription function
//     }

// }

//4
// car.printDescription()

// const person = {
//   name: "Ekeopre",

//   friend: {
//     name: "alex",
//     greet: function () {
//       console.log(this);
//       console.log(`hello my name is ${this.name}`);
//     },
//   },
// };

// person.friend.greet();

//5
//=====Using the "call" method with "this" keyword=====//
//call mehtod allows us to explicitly ste the value on which we can can bind the this keyword
// const alex = {
//   name: "Alex",
//   age: 50,

//   friend: {
//     name: "Priya",
//     age: 55,
//     greet: function (...args) {
//       console.log(args);
//       console.log(`${this.name} says hi! at the age of ${this.age}`);
//     },
//   },
// };

// alex.friend.greet.call({ name: "Mia", age: 40 }); // Mia says hi!
// "call" here allows us to explicitly set the name to "Mia" so that the "this" does not bind to "name" in the frrend object
// alex.friend.greet.call({ name: "Mia", age: 20 }, 1, 2, 3);

// 6
//===Using the "apply" method with "this" keyword=========//
//call method allows us to explicitly ste the value on which we can can bind the this keyword
// const alex = {
//   name: "Alex",
//   age: 50,

//   friend: {
//     name: "Priya",
//     age: 55,
//     greet: function (...args) {
//       console.log(args);
//       console.log(`${this.name} says hi! at the age of ${this.age}`);
//     },
//   },
// };

// alex.friend.greet.apply({ name: "Mia", age: 40 }, [3]);
// // "apply" here allows us to explicitly set the name to "Mia" so that the "this" does not bind to "name" in the friend object
// alex.friend.greet.apply({ name: "Mia", age: 20 }, [1]);

