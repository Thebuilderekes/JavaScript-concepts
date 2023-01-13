// function sayHello(name) {
//     return function(){
//         console.log ( "hello " + name)
//     }
// }

//  let ekeopre = sayHello("ekeo"); // XX

//  ekeopre();

// closure is about binding a function to a variable so that whatever property is passed into the function bracket can be reused over and over again as that function is called by assigning it to different variables to be called just like in XX. it is only a feature in the javascript engine that allows functions to have access to other functions outside its own enviromment. So if we have two functions as shown above, even if the execution context of the first function called, ran and then is popped off the stack, as it moves to read the other function, the value of the variables in the previous function is still in memory.

const wrapper = () => {
  const logPrices = () => {
    const prices = [1, 2, 3, 4, 5];
    console.log(prices);
  };

  return logPrices;
};

const getPrices = wrapper();
getPrices();
