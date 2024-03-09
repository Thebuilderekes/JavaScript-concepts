console.log("Using var:");
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log("Inside loop with var: i =", i);
    }, 1000);
}
//console.log("Outside loop with var: i =", i);
/*
 *
Explanation:

In both cases, a loop runs three times, and within the loop, a setTimeout function is used to log the value of the loop counter variable (i or j) after 1 second.
With var, the loop counter i is declared outside the loop block and is accessible globally. So, when setTimeout executes after 1 second, it prints the value of i at the time of execution, which is 3 because the loop has already completed.
With let, the loop counter j is declared using let inside the loop block. This restricts its scope to the loop body, and a new variable j is created for each iteration. As a result, when setTimeout executes after 1 second, it prints the value of j specific to each iteration, as expected.
Note: Uncommenting the last line attempting to access j outside the loop will result in a ReferenceError because j is not accessible outside its block scope.
This example illustrates how using var and let for loop counter variables can lead to different outcomes, particularly in scenarios involving asynchronous operations like setTimeout.
 *
 * */
