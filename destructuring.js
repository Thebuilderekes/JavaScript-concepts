//Destrucuring allows for variables to be assigned to values in arrays, objects, maps and sets as seen below

//1
 const cities = ["Lagos", "Calabar", "Port Harcourt"];

//commas can be used to represent variables thyat need to be omitted when assigning values to the variables as seeen below
//
const [sincity, lovecity, violentcity] = cities;

console.log(sincity);

//2
// const cities = ["Lagos", "Calabar", "Port Harcourt"];
// const [lagos, calabar, portHarcourt] = cities;

// console.log(, , portHarcourt); // Here only  portHarcourt will be assigned to Port Harcourt in the arrays because the preceeding items have been ommited using the comma syntax

//3
// const cities = ["Lagos", "Calabar", "Port Harcourt"];
// const [lagos, calabar, portHarcourt, Berlin = "Berlin"] = cities; // values can be explicitly giving to the variables while destructuring

// console.log(cities);
// console.log(Berlin);

//4
// Destructuring in strings

// const [letter1, letter2] = "Hello, friend!";
// console.log(letter1, letter2); // "H" "e"

//5
//Destructuring in Ojects

// const movie = {
//   title: "Dune",
//   year: "2021",
//   movieLength: 155,
//   book: true,
// };

// THE ORDER OF THE MATCHING DOES NOT MATTER AS LONG AS DESTRUCTURED VARIABLES ARE SPELT EXACTLY AS THE KEYS(including case) IN ORDER TO ACCESS THEM. Curly braces are used and the values of the keys get printed out when trying to access the vlaues through destructuring.
// const { title, year, movieLength, book, producer = "producer name" } = movie;
// console.log(title); // "Dune"
// console.log(year); // "2021"
// console.log(movieLength); // 155
// console.log(book); // true
// console.log(producer); // producer name
// console.log(rating); // undefined because "rating" does not exist on the object

//6
// Destructuring in Sets

// const numbers = new Set();
// numbers.add(5);
// numbers.add(10);
// const [five, ten] = numbers;
// console.log(five, ten); // 5 10

//7
// Destructuring in Maps
// const groceries = new Map();
// groceries.set("apple", 25);
// groceries.set("banana", 100);
// const [apple, banana] = groceries;
// console.log(apple);
