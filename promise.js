// //======================================================PROMISE=============================================//

// // As soon as a promise is created, it's status is automatically "Pending". Once a promise is pending, it can only get to a resolve or reject state and nothing else after.
// // chaining promises is a very important concept. If you return anthing in the .then block you would have to chain it to another .then in order to get the value and print it out on the screen. ".then" is a way to get the value from a promise. The ".catch" block handles the value of reject

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Let's goooo with this javascript mastery");
//     // resolve("I am now a javaScript MAster!");
//     reject("blah");
//   }, 3000);
// });

// console.log("What do we want????");

// myPromise
//   .then((resolvedValue) => {
//     console.log(resolvedValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// //

// //=====================PROMISE EXERCISES=======================//

// 1;

// console.log("Program started");
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Program complete");
//   }, 3000);
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(myPromise);
// console.log("Program in progress");

// console.log("Program started");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Program complete");
//   }, 3000);

//   setTimeout(() => {
//     reject("Program failure");
//   }, 4000);
// })
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(myPromise);
// console.log("Program in progress");

// 2;
// console.log("Program started");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("step1 complete");
//   }, 3000);
// });

// console.log(myPromise);
// console.log("Program in progress");

// myPromise
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("step2 complete");
//       }, 3000);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//   });

// exercise 3;
// console.log("Program started");

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({
//       data: "hello",
//       error: null,
//     });
//   }, 5000);
// });

// console.log(myPromise);
// console.log("Program in progress");

// myPromise
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("first promise chain complete");
//       }, 2000);
//     });
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .then(() => {
//     const secodPromise = new Promise((resolve, reject) => {
//       resolve();
//     });
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("second promise chain complete");
//       }, 10000);
//     });
//   })
//   .then((value3) => {
//     console.log(value3);
//   });

// 4;
// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 3000);
// });

// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(20);
//   }, 5000);
// });

// const arrayPromises = Promise.all([myPromise, myPromise2]).then((value) => {
//   const firstValue = value[0];
//   const secondValue = value[1];
//   console.log(firstValue, secondValue);
//   console.log(firstValue + secondValue);
// });

// console.log(arrayPromises);
