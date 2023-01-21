//"new" keyword allows us to create new objects of a class so we can have access to the prototype of that object to have access to the prototype 

function WebDevClass(name) {
  this.name = name;
  this.activity = function () {
    console.log(`${name} is learning HTML and CSS`);
  };
}

const chiamaka = new WebDevClass("chiamaka");
const joe = new WebDevClass("joe");

chiamaka.activity();
joe.activity();
