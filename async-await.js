let stocks = {
  fruits: ["strawberries", "grapes", "bananas", "apples"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

//relationship between time and work
//let order = (time, work) => {
  //return new Promise((resolve, reject) => {
    //if (isShopOpen) {
    //  setTimeout(() => {

  //  resolve(work());
      //}, time);
    //} else {
      //reject(console.log("our shop is closed"));
   // }
  //});
//};


let order = function(time, work){
    isShopOpen ? setTimeout(() =>{
        try {
           work()
        }catch(err){
        console.log(err)
        }
    }, time): ""
}

order(2000, () =>{console.log(`${stocks.fruits[1]} is selected`)})
