## Loops

A loop is a what ato run a program repeatedly until a particular condition is met

for-loops - initialization and condition, incrementation
while loops - executes when a certain condition is true
do while - executes a block of code when a condition is true. executes at least once whether condition is true or false.

## Difference between for loop and for-of loop

for loop is a general loop that can be used for any data structure but,
`for(let i = 0 i < array.length i++)`

### for-of

for-of loop is used for arrays, strings and objects only. It is used to access each value without having to use the index. it allows you to use break and continue statements in it
`for(let value of array){}`

### what is for-in loop

This is used to loop over or objects where the key is needed. It allows you to use keys as index to access each value.

```javascript
for (let key in person) {
	console.log(person[key]);
}
```

## forEach VS for-of

ForEach method can be used to iterate over each element on array and access values of arrays and objects using a callback function. it DOES NOT allow you to use break and continue statements in it.
e.g

```javascript
array.forEach(function (value) {
	console.log(value);
});
```

Here's how you can use forEach with Object.keys to iterate over the properties of an object:

```javascript
const obj = {
	name: "John",
	age: 30,
	city: "New York",
};

Object.keys(obj).forEach((key) => {
	console.log(`${key}: ${obj[key]}`);
});
```
