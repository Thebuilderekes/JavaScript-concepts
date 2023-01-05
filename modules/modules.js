import * as Everything from "./printName.js";
//We can rename the default export here and not worry about renaming it on the export side

// console.log(Everything);

Everything.default(); // this is used to get access to everything which is now the object in which all the exported variables can be accesed from. it calls all the fuctions imported into it.

console.log(Everything.monkey.age);
