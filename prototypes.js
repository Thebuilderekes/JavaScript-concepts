var person = {
  firstname: "default",
  lastname: "default",
  getFullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

var john = {
  // firstname : "john",
  lastname: "doe",
};

// dont ever do this, it's for example purposes

john.__proto__ = person; // with this, you are attatching the properties of the person object to the john object. But wuile logging  for properties of an object that has the same peoperty name as another object with this method, it will first give the result of the first object.

console.log(john.firstname);


//================PROTOTYPE ===================//

//The prototype property is only used when you are setting "new" keyword to create an object. Every function and object created in javascript gets a special property '.prototype'

