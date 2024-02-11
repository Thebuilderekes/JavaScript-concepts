//FUNCTIONS are first class functions in javascript. This means that they can be passed as a value to a variable, passed as an argument of another function and returned from another function

// Accessing an inner returned function in a function

//Example 1

// function alertThenReturn() {
//     alert('Message 1!');

//     return function () {
//       alert('Message 2!');
//     };
//   }

//   If alertThenReturn() is invoked in a browser, we'll first see an alert message that says 'Message 1!', followed by the alertThenReturn() function returning an anonymous function. However, we don't actually see an alert that says 'Message 2!', since none of the code from the inner function is executed. How do we go about executing the returned function?

//   Since alertThenReturn() returns that inner function, we can assign a variable to that return value:

//   const innerFunction = alertThenReturn();

//   We can then use the innerFunction variable like any other function!

//   innerFunction();

// Likewise, this function can be invoked immediately without being stored in a variable. We'll still get the same outcome if we simply add another set of parentheses to the expression alertThenReturn();:

// alertThenReturn()();

// Remember that the key difference between forEach() and map() is that forEach() doesn't return anything, while map() returns a new array with the values that are returned from the function:

function findMe(word) {
  return word;
}

const result = findMe('checking');
console.log(result);
