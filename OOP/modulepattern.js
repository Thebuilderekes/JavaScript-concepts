//MODULE PATTERN
//module patterns are used to make objects private within a function so that the variables used cannot be easilty accessed from outside.  This can be done by seting a variable object to an IIFE as shown below

//===================EXAMPLE============================

// let sodiumChloride = (function(){
//     let chemicalFormula = 'NaCl';
//     let molarMass = 58.44;

//     return {
//       getProperties: function(){
//         console.log(`Formula: ${chemicalFormula}`);
//         console.log(`Molar Mass: ${molarMass} g/mol`);
//
//     };
//   })();

//THE REVEALING MODULE PATTERN
//
//The revealing module pattern is another form of module pattern where the modules are in the function and
//are accessed through the returned object

//The underlying philosophy of the Revealing Module Pattern is that, while we still maintain encapsulation (as in the Module Pattern), we also reveal certain properties (and methods). The key ingredients to the Revealing Module Pattern are:
//
//    An IIFE (wrapper)
//    The module content (variables, methods, objects, etc.)
//    A returned object literal

//===================EXAMPLE============================

//let myModule = (function(){
//
//   function privateModule(message){
//      console.log(message)
//   }
//
//
//   function publicModule(message){
//      console.log(message)
//   }
//
//   return {
//      publicMethod: publicModule
//   }
//})()
//
//
//
//myModule.publicMethod('hello')
//
//

//IMPORTANT NOTE
//The object variable pointing to the private IIFE does not have access to the variables being used inside it by using the dot notion like it does with the methods that exist inside the IIFE. what is

//==================EXAMPLE============================
// var counter =  (function (){
//     let count = 0;
//        // private

//           function print(message) {
//            console.log(message + "----" + count)
//        }
//          // return an object

//          return {

//            get: function() {
//              return count;

//            },

//            set: function(value) {
//                count = value;

//              },

//              increment: function() {
//                  count += 1;
//                  print("after increment: ");

//              },

//             reset: function() {
//                print("before reset: " )
//                count = 0;
//                print("after reset: ")
//          }
//        }

//    })();

//    counter.increment();
//    counter.increment();
//    counter.increment();
//    counter.reset();
//    counter.set(7);
//    console.log(counter.get());
//    counter.reset();

//the idea is to be able to trace wherever you declare any variable and where you keep its value all round the program. WHOLISTICALLY WHY??? SOON TO FIND OUT!
