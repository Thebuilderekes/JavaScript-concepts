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