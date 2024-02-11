//FACTORY FUNCTION
//A factory function is a function that returns an object, but isn't itself a class or constructor. As such, we invoke a factory function as a normal function without using the new operator. Using a factory function, we can easily create object instances without the complexity of classes and constructors!

//example

//function Basketball(color) {
//  return {
  //  color: color,
   // numDots: 35000
 // };
//}



function makeGreeting(language) {
  return function (firstname, lastname) {

    if (language === "en") {
      console.log(`hello my name is ${firstname} ${lastname}`);
    }
    if (language === "es") {
      console.log(`hola my name is ${firstname} ${lastname}`);
    }
  };
}

let greetEnglish = makeGreeting("en");
let greetSpanish = makeGreeting("es");

greetEnglish("ekeopre", "beredugo"); 
greetSpanish("ekeopre", "beredugo");


// makeGreeting() is a factory function because it can be assigned to different function objects and be reused all over again according to whatever argument is past to it.

//note: Everytime you call a function, you get a new execution context.
