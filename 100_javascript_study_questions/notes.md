## what is client vs server?

Client comprises of user devices that contains application such as he browser that is used to request resources from a web server.

### What is hoisting?

Hoisting is the ability of a function or variable to declared after it has been used and be moved to the top of the scope.

## What is scope in javascript?

- what is scope in JavaScript? Scope i a feature that determines where a variable can be defined and where they can be accessed. A variable can be in the global scope function scope of block scope. Variables in the function scope have access to other variables in the global scope. Block scope (declared with var) has access to variables in the function scope and global scope. Global scoped variables only have access to variables in the global scope.

## Variable declaration

- Variables are that are declared with `var` are hoisted to the top of the scope while variables declared with `let` and const keyword are not scoped.

### Difference between let var and const?

variables declared with `var` keyword are function scoped. meaning even if you declare a variable inside a block it is still accessible outside the block. ALWAYS CREATE BLOCK SCOPED VARIABLES USING `let` keyword instead of using `var`. `const` keyword cannot be reassigned

## What are data types

## Types of data types

- Primitive data types - Boolean Strings, Number, Null, Undefined

  - They can only hold one value.
  - They are immutable meaning that once they have been declared and given a value, the value cannot be changed and a new space in memory will need to be created when you want to reassign them a new value.

- Non-primitive data types - Array Function, Object, Date, RegExp
  - These can hold multiple values
  - These are complex data types
  - They are mutable - Their values can be changed.

## what is JSON

- JSON stands for JavaScript Object Notation. is a data interchange format that allows the UI to communicate with the server to serve data.

## typeof

typeof returns a string of the type of the variable it is checking. You can receive datat from an external API and need to check the type using `typeof`

## Type coercion

Type coercion is the automatic conversion of a variable from one type to another.

### Uses of type coercion:

- String and number concatenation
- used during comparison operators

## operator precedence

## Unary, Binary and Ternary operators

Unary operators are operators that only have one operand like =
e.g `x = 5`

Binary operator
This has to do with 2 operands
e.g `x = y + z`

Ternary operator
this has to do with 3 operands

e.g `personName ? "Ekeopre" : "no name"`

## Short circuit evaluation

Short circuit is when the first part of an expression is evaluated and stops the other side from evaluating
according to whether it is true of false.
e.g `const personName = false && somefunction()`

## equality operators

Loose equality == does a type coercion while strict equality === does not
1 == "1" //true
1 === "1" //false

## Spread vs rest operator

Spread is used to copy an array or merge an array

Rest is used to represent the rest of an element of an array

## Array

Arrays is a data structure that allows us t store multiple values in a single variable.
Arrays allow us to arrange data in a more manageable way

### Array methods

find
map
shift
unshift
find
pop
push
filter
slice

## Difference between slice and splice methods

array.slice(1, 4 ) removes items from this array from the starting index to the ending index excluding the last index

array.splice(startIndex, deleteCount, ...newItems) deletes elements from the startIndex, takes in the number of items you want to delete and takes in the new idtems you want to add fromt the position of the index you have deleted.

## Array like objects

These are objects that have indexed elements and length property, similar to arrays but may not have all the methods of arrays like pop, shift, push.

### Examples of array-like objects include:

The arguments Object: As mentioned earlier, the arguments object inside a function behaves like an array but is not actually an array. It contains the arguments passed to the function.

DOM Node Lists: When you use methods like document.querySelectorAll() or properties like childNodes to access elements in the Document Object Model (DOM), you get a collection of nodes that behaves like an array but is technically not an array.

String Objects: Strings in JavaScript can be accessed using numeric indices to retrieve individual characters, making them array-like.

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

## functions

## Types of function
- Named  - This is a used for big and complex logic

- Function expression - This is when a function is stored as a value of a variable

- Anonymous - This a a function that has no name. used for small logic

- IFFE - used to immediately invoke a function

- Callback function - is a function that is passed as the parameter in another function
 
- Higher order function - this is a function that accepts a callback function as a parameter. 
  - HOF is a function that
    returns another function.

- Arrow function - used as a shortcut way of writing a normal function. It has an implicit return so it does not
require you to use the ``return`` keyword.



## What is the difference between parameters and arguments
- Positional argument  - The regular ay of passing argumemets by placeholder variables
- Named argument   - passing object as argument to have access to its properties
- Argument objects - by using the `argument` object

default parameter is when you explicitly set the value of a parameter into a function



## Event handling
Event handling is the process of resonding to user actions in a web page.
























