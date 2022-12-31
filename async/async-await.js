// Async-await was made to make working with promises better.
//An async function returns a promise

//1

// console.log("program started");
// const makeTimeOut = (ms) => {
//   const timeOut = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("all done");
//     }, ms);
//   });
//   return timeOut;
// };

// const useTimeOut = async () => {
//  const result = await makeTimeOut(7000); // Whenever a program comes accross the "await " keyword it pauses until the function either resolves or rejects before moving to the next code to execute
//   console.log(result);
// };
// useTimeOut();
// console.log("Program complete...");

//2
const fetchData = async () => {
  return "hello"; // this is a promise
};

const result = fetchData();
console.log(result); // promise {"hello"}
// to get the actual data, we can await it inside an async function and log it
const useData = async () => {
  const data = await fetchData();
  console.log(data);
};

useData();
