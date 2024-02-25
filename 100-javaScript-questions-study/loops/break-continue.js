/*
break statement: It is used to terminate the loop immediately when a certain condition is met. Once the break statement is encountered within the loop, the loop terminates, and the program continues with the statement immediately following the loop.
*/
for (let i = 1; i <= 10; i++) {
	if (i === 5) {
		break; // terminates the loop when i equals 5
	}
	console.log(i);
}

//output 1 2 3 4

// continue statement: It is used to skip the rest of the code inside the loop for the current iteration and proceed to the next iteration of the loop.
for (let i = 1; i <= 5; i++) {
	if (i === 3) {
		continue; // skips the rest of the loop body for i equals 3
	}
	console.log(i);
}
//output 1 2 4 5
