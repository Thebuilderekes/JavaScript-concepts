//These methods are used when you want to work with functions and control the flow of how they are invoked and what context they operate. They provide a way to manipulate the "this" value and the values that they point to.



function sayHello(message){
   console.log(`${message} ${this.name}`)
 }

 const person = {
   name : "Ekeopre"
 }

 //call method is used to invoke a function with a speciic context and argument
 sayHello.call(person, "hello");  //notice that it took the this value first before the message value. that is because of the call syntax


 //apply method is used to invoke a function with a speciic context and amn array of arguments
 sayHello.apply(person, ["hello"]);  //notice that it took the this value first before the message value which is in an array, that is because of the apply syntax.

 //bind creates a new function with a specific contet note invoking it immediately
 const greeting = sayHello.bind(person)

 greetPerson('greetings')


