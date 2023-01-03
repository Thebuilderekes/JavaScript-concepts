// @ts-nocheck
// Async-await was made to make working with promises better.
//An async function returns a promise

// exercise 1

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

// exercise 2
// const fetchData = async () => {
//   return "hello"; // this is a promise
// };

// const result = fetchData();
// console.log(result); // promise {"hello"}

//  to get the actual data, we can await it inside an async function and log it
// const useData = async () => {
//   const data = await fetchData();
//   console.log(data);
// };

// useData();

//You SHOULD ALWAYS use a try catnch block inside an async-await function because there is a tendency for an error to happen

// exercise 3
// const fetchPokemon = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("danger, danger ");
//     }, 2000);
//   });
// };
// console.log("Program started...");

// const getData = async () => {
//   try {
//     const result = await fetchPokemon();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();
// console.log("Program complete...");

// exercise 4
// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { user: "monkey", admin: true } });
//     }, 3000);
//   });
// };

// const login = (obj) => {
//   if (obj.data.admin === true) {
//     console.log("sucessfully logged in");
//   } else {
//     console.log("failed to login, please try again");
//   }
// };

// console.log("Program has started");

// const getData = async () => {
//   try {
//     const userData = await fetchUser();
//     login(userData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getData();
// console.log("Progam complete");

//5
// const fetchFast = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("fast done");
//     }, 2000);
//   });
// };

// const fetchSlow = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("slow done");
//     }, 6000);
//   });
// };

// console.log("Program starting...");
// const firstTimestamp = new Date();

// const getData = async () => {
//   //   const fastResult = await fetchFast();
//   //   console.log(fastResult);
//   //   const slowResult = await fetchSlow();
//   //   console.log(slowResult);

//   const [fastResult, slowResult] = await Promise.all([
//     fetchFast(),
//     fetchSlow(),
//   ]);
//   console.log(fastResult);
//   console.log(slowResult);
//   const secondTimestamp = new Date();
//   const timeElapsed = firstTimestamp - secondTimestamp;
//   console.log(timeElapsed);
// };

// getData();
// console.log("program complete...");
// // How long does it take to run this program?

const goGetCandies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "sour keys", quantity: 10 });
    }, 2000);
  });
};
const sellCandies = (candy) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(25 * candy.quantity);
    }, 2000);
  });
};

const useCandies = async () => {
  const candy = await goGetCandies();
  const result = await sellCandies(candy);
  console.log(result);
};

useCandies();
