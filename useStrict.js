"use strict";   // this makes it so that you must always declare all your variables before for you intialize them else it will throw an error. Should be use at the top of the file for it to work

function logName() {
     
   var person;   // this will not work without var declaration

   person = {

    firstname : "ekeopre"
   }
    console.log(`hello  ${person.firstname}` )
}

logName();

