// add and remove function for list of items


const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (list, bookName) {
  return [...list, bookName];
}

function remove (list, bookName) {
  const index = list.indexOf(bookName);
  if (index >= 0) {
    return [...list.slice(0, index), ...list.slice(index + 1)];
    //returning an array with the list from the begining 0 of the books that has the index of the bookName and continuing from the bookname after it with index + 1
  }
  return list;
}

const newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList); // Output: ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]

const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
console.log(newerBookList); // Output: ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
console.log("========original booklist below==========")
console.log(bookList)
