const person = {
  firstname: "ekeopre",
  lastname: "beredugo",
  getFullName: function () {
    const fullname = `${this.firstname}  ${this.lastname}`;

    return fullname;
  },
};
const logName = function () {
  console.log(`logged: ${this.getFullName()}`); // to get this.getFullName() to work here and refer to the person object we have to
  //use logName.bind(person), assign it to the variable logPersonName, and then call logPersonName as a function as shown below. the
  // .bind creates a copy of whatever function you pass it to.
};

//   const logPersonName = logName.bind(person)

logName.call(person); // Using .call seems like a better alternative to bind in the sense that you can use this directly on the function that contains "this" keyword and pass the object that you are referring to in the parenthesis.

//.apply is a way of passing all the properties of one object into another oobject by using .apply
