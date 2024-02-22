## what is client vs server?
 Client comprises of user devices that contains application such as he browser that is used to request resources from a web server.


### What is hoisting?
Hositong is the ability of a function or variable to declared after it has been used and be moved to the top of the scope.

## What is scope in javascript?
- what is scope in JavaScript? Scope i a feature that determines where a variable can be defined and where they can be accessed. A variable can be in the global scope function scope of block scope. Variba;es in the function scope have access to other variables in the global scope. Block scope (declared with var) has acess to variables in the fuction scope and global scope. Global scoped varibles only have access to variables in the global scope.


## Variable declaration 

- Variables are that are dclared with `var` are hoisted to the top of the scope while variables decalred with  `let` and const keyword are not scoped.

### Difference between let var and const?
variables declared with `var` keyword are function scoped. meaning even if you declare a variable inside a block it is still accessible outside the block. ALWAYS CREATE BLOCK SCOPED VARIABLES USING `let` keyword instead of using `var`. `const` keyword cnnot be reassigned

## What are data types


## Types of data types
- Primitive data types - Boolean Strings, Number, Null, Undefined 
  - They can only hold one value. 
  - They are immuteable meaing that once they have been declared and given a value, the value cannot be changed and a new space in memory will need to be created when you want to reassign them a new value.


- Non-primitive data types - Array Function, Object, Date, RegExp 
  - These can hold multiple values
  - These are complex data types
  - They are mutateable - Their values can be changed.


## what is JSON
- JSON stands for JavaScript Object Notation. is a data interchange format that allows the UI to commuicate with the server to serve data.

## typeof
typeof returns a string of the type of the variable it is checking. You can receive datat from an external API and need to check the type using `typeof`

## Type coersion
 Type coersion is the automatic conversion of a variable from one type to another.

### Uses of type coersion: 
  - String and number concatenation
  - used during comparison operators

## operator precedence


## Uninary Binary and Ternary operators

Uninary operators are operators that only have one operand like =
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
Loose equality == does a type coersion while strict equality  === does not 
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


## array like objects

These are objects that have indexed elemensts and lengtht property, similar to arrays but may not have all the methods of arrays like pop,  shift, push.

### Examples of array-like objects include:
The arguments Object: As mentioned earlier, the arguments object inside a function behaves like an array but is not actually an array. It contains the arguments passed to the function.

DOM Node Lists: When you use methods like document.querySelectorAll() or properties like childNodes to access elements in the Document Object Model (DOM), you get a collection of nodes that behaves like an array but is technically not an array.

String Objects: Strings in JavaScript can be accessed using numeric indices to retrieve individual characters, making them array-like.






