
// ---call() and bind() are used to set this keywords by ourselves

// ---call() can be used to call a method of one object with a function of another object
//call() can take in two arguments, the object you want to bind "this" to and the value of the parameter.

//apply() works ust like call, the only difference is that it takes the second argument in an array

//eg 1

const cat = {
  name: "Bailey"
}


function sayHello(message){
  console.log(`${this.name} says ${message}`)
}

sayHello.call(cat, "nice to meet you" )  //output: Bailey says nice to meet you
sayHello.apply(cat, ["nice to meet you"] )  //output: Bailey says nice to meet you


//eg 2
const person = {
  firstname: "ekeopre",
  lastname: "beredugo",
  getFullName: function () {
    const fullname = `${this.firstname}  ${this.lastname}`

    return fullname;
  },
};
const logName = function () {
  console.log(`logged: ${this.getFullName()}`); // to get this.getFullName() to work here and refer to the person object we have to
  //use logName.bind(person), assign it to the variable logPersonName, and then call logPersonName as a function as shown below. the
  // .bind creates a copy of whatever function you pass it to.
};

  const logPersonName = logName.bind(person);

//but with call() it is much easier.
logName.call(person); // We are setting our new value of "this" as "person" by using the .call(person). 
//console.log(`logged: ${this.getFullName()}`); will be translate as console.log(`logged: ${person.getFullName()}`);

//IMPORTANT
//Using .call() is a better alternative to bind in the sense that you can use this directly on the function that contains "this" keyword , pass the object that you are referring to in the parenthesis and have the function called immediately.

//.apply is a way of passing all the properties of one object into another oobject by using .apply

