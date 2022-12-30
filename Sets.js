const person = new Set();

person.add(10);

console.log(person);

const fruits = new Set(["apple", "banana", "orange", "tangerine"]);
const a = {
  name: "ekeopre",
  age: 31,
};
console.log(fruits);

console.log(fruits.add(a));
// const iterator1 = fruits[Symbol.iterator]();
// console.log(iterator1.next().value); This goes through the set and returns the first value in the set. writing this twicw will return the next valure after the first one
