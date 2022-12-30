// this is a function expression
let greeting = function(name) {
    return `hello ${name}`
}("ekeopre")    // this is an Immediately invoked function expression

console.log(greeting)  //this will result in an "undefined" error because "greeting" is a string

// a function cannot just exist oin a program without doing something with it. so below is invalid...

// function(name) {

//     console.log("hello")  // this cannot exit in a program without being called, it would through an error unless you wrap in between brackets

// }

//anything inside parenthenses is recognized as an expression so below is valid...


(function(name) {

    console.log("hello")  
})("ekeopre")