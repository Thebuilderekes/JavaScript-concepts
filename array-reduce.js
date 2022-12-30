//reduce takes the array and reduce it to something you can use.
// it reurns 2 values spearated by commas, the initialValue being the second value to start the reducing process and add whatever is returned at first. as shown below

//-------------------EXERCISE----------------------

// const numbers = [1, 2, 3, 4, 5, 6]
// const initialValue = 5;
// const sum = numbers.reduce( (previousNumber, currentNumber) =>
// previousNumber + currentNumber, initialValue
// )
// console.log(sum);

// const cities = ["Lagos", "Ibadan", "Yenegoa"]

// const concatCities = cities.reduce((concatStrings, city) => concatStrings + city + "--",  " " )

// console.log(concatCities)

//-------------------EXERCISE----------------------

// const numbers = [10, 20, 30, 30, 40];

// const concatNumbers = numbers.reduce((result, number) =>  {
//   console.log( result, number)
//  result.push(number)

//  return result

// }, []  )

// console.log(concatNumbers)

// const points = [55, 56, 57, 58, 59, 60]
// const sum = points.reduce(( result, point)=> result + point , 0)
// console.log((points));
// console.log(sum);

//-------------------EXERCISE----------------------

//const companies = ["apple", "tesla", "meta", "facebook"];

// @ts-ignore
// const moded = companies.reduce((concatString, company, i) =>{

//     if(company.startsWith("a")){

//       return concatString;
//     }

//     if(i === companies.length - 1){

//         return concatString + company + "-"

//     }

//         return concatString + company + "-"

// }, 0)

//console.log(moded);

//-------------------EXERCISE----------------------

// const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
// const afterTax = prices.reduce((result, price) => {
// const tax = price * 0.2;
//   if (price > 6) {
//     return result + price;
//   }
//   return result + price + tax;
// }, 0);
// console.log(afterTax);

// const items = ["light", "banana", "phone", "book", "mouse"]
//   .map((item) => item.toLocaleUpperCase())
//   .reduce((spacedStrings, strings) => spacedStrings + strings + " ", "");

// console.log(items);

// const nums = [10, 30, 50, 70, 90]
//   .map((num) => num * num)
//   .filter((value) => {
//     if (value > 1000) {
//       return value;
//     }
//   })
//   .reduce((sum, numbers) => {
//     return sum + numbers;
//   }, 0);

// console.log(nums);
