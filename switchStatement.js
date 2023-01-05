//switch statements works best primitive types like numbers, booleans and strings. it is case sensitive when checking for strings

const animal = "Dog";

switch (animal) {
  case "Monkey":
    console.log("this is correct");
    break;
  case "dog":
    console.log("not what we want");
    break;
  case "cat":
    console.log("we expect monkey");
    break;

  default:
    console.log("waiting for type of animal");
    break;
}
