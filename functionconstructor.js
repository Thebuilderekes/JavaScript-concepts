//A function constructor is a function that is used to construct objects. Just like the one below. Function Person() is used to construct 'john' and 'jane' objects and adding properties to them.
function Person(firstname, lastname){   

    console.log(this) ; // at this point of running the code, the 'this' key word first points to the empty 'Person' object  created by the "new" keyword in line 13 before the 'this' keyword is set to firstname and lastname on code execution to be later logged in line 16.
    this.firstname = firstname;   //  this.firstname = firstname;  to be able to set 
                                               // the value in the function argument of jane
    this.lastname = lastname;   //     this.lastname = lastname;
    
    console.log('this is getting invoked'); 
}


var john = new Person( 'john', 'doe');
//john is the new object that has been created to also carry the properties of the function Person() because of the 'new' keyword that was added to person(). This is the modern and most acceptible way of creating objects in javascript.
var jane = new Person( 'jane', 'bond');
console.log(john);
console.log(jane);

//================PROTOTYPE ===================//

//The prototype property is only used when you are setting "new" keyword to create an object. Every function and object created in javascript gets a special property which is '.prototype'



