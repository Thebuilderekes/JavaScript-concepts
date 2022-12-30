var person = {
    firstname  : "default",
    lastname :"default",
    greet : function(){

        return `hi ${this.firstname}`
    }
}

var john = Object.create(person); // This is another way to create a new object and setting its prototype to inherit the properties of another object. Here, an empty john object is created at this point, it is only when you assign properties to it as done below, will it be able to log out the properties 
console.log(john); // empty john object logged out without property

john.firstname = "jonas"; // property assigned to john object
console.log(john); // john object logged out with property firstname set

console.log(john.lastname);  // john object logs out inherited property gotten from person object 


// This is all about prototypal inheritance

// if Object.create does not exist in the browser because it is an older browser browser, you will need to use a polyfill to create it. 

//POLYFILL FOR OBJECT.CREATE google this and othe polyfills