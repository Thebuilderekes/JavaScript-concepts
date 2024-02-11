//Mixins are used when we want to allow an object to inherit properties from multiple objects without using inheritance. One way we can make this happen is to use
//Object.assign()

//Object.assign(target, source) allows the target object to inherit properties fromthe source object

//multiple object properties can be combined and inherited by an object

//==================EXAMPLE============================

// class Dog {
//	constructor(name) {
//	  this.name = name;
//	}
//  const dogFunctionality = {
//	bark: () => console.log("Woof!"),
//	wagTail: () => console.log("Wagging my tail!"),
//	play: () => console.log("Playing!"),
//  };
//
//  //Object.assign(Dog.prototype, dogFunctionality);
//
//
////lets create a pet1
//  const pet1 = new Dog("Daisy");
//
//  pet1.bark()

//==================EXAMPLE============================
// const duck ={
// legs: 4,
// head: 1
// }

// const bear ={
// type: "mammal"
// }

// const cow = {
// makesound : function(){
// 		    console.log("moo")
// 	    }
// }

// const dog = Object.assign({}, duck, bear)

// const cow2 = Object.assign({}, duck, cow)
// console.log(cow.makesound())

const check = (function () {
  let word = 'checking';
  return {
    getWord: function () {
      console.log(`${word}`);
    },
  };
})();
check.getWord();
