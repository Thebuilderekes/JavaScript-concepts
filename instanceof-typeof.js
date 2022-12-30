console.clear();

var d =[]
console.log(typeof d) // logs out object 
console.log(Object.prototype.toString.call(d));  // a goood way to specify what type of object that a this is. 

function Person(name){

    this.name = name;

    console.log(`hi my name is ${name}`)
}

var e = new Person("jane");
console.log(typeof e); // logs oput object
console.log(e instanceof Person);  // checks if e can be down the protoype chain  nstanceof Person as in prototypal inheritance

var c = null;
console.log( typeof c) // logs out object, this is has been a bug in javascript for a long time