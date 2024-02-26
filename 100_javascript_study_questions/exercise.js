const star = "*";

function createTriangle(value) {
  // Use a loop to iterate from 1 to the value (inclusive)
  for (let i = 1; i <= value; i++) {
    // Repeat the star character the current number of times using repeat()
    console.log(star.repeat(i));
  }
}

createTriangle(10);
