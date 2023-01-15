//"new" keyword stes up the this keyword  and the prototype

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
