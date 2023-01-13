//Every object in JavaScript has acess to a prototype "__proto__" by default.

//----Prototype Chain-----//

//Everytime we try to access a method or other property types on an object, JavaScript goes up the prototype chain and searches for that property until it either finds it along the chain or gets to the end of the chain where it finds "null" which indicates that the property does not exist. In the case of method property, an error message would say that the property is not a function or in the case of another property type, it would say "undefined".
// Object.prototype.hello = () => {
//   console.log("hello");
// };

// const animal = {
//   type: "monkey",
// };

// // console.log(animal.__proto__.__proto__);
// // console.log(Object.getOwnPropertyNames(animal));
// console.log(animal.hello());

// console.log(animal.toString()) //logs out [object object]
//This was able to run and not break because objects have access to a hidden list of prototypes in javascript.

// var person = {
//   firstname: "default",
//   lastname: "default",
//   getFullName: function () {
//     return this.firstname + " " + this.lastname;
//   },
// };

// var john = {
//   // firstname : "john",
//   lastname: "doe",
// };

// dont ever do this, it's for example purposes

// john.__proto__ = person; // with this, you are attatching the properties of the person object to the john object. But wuile logging  for properties of an object that has the same peoperty name as another object with this method, it will first give the result of the first object.

// console.log(john.firstname);

//================PROTOTYPE ===================//

//The prototype property is only used when you are setting "new" keyword to create an object. Every function and object created in javascript gets a special property '.prototype'

// @ts-ignore
// Object.prototytpe.boop = () => {
//   console.log("boop!");
// };

// console.log(Object);
