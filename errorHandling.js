//Uncomment code to run it.

// throw "there was an error";

//Anything after a throw is unreacheable code. Any error that happens after the throw and catch will not be ran and the program will crash To make the next code reacheable, we would need to use a try and catch block and pass the error into the catch to have access to the error as shown below

//example

// const message = "hello"; // this message can be reached because it is in the global scope
// try {
//   throw "this is an error";
// } catch (error) {
//   console.error(error);
//   console.log(message); // you will get an error if you try to log this if the variable is within the try block because of scope
// }

try {
  throw new Error("uh-oh");
} catch (error) {
  console.log(error);
}
console.log("program complete");
