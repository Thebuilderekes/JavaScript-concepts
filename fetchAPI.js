import fetch from "node-fetch";

// const response = fetch("https://wallhaven.cc/");

// response.then((result) => {
//   console.log(result);
// });

//1
// const response = fetch("https://www.craigslist.org/about/");

// response
//   .then((result) => {
//     const text = result.text();
//     return text;
//   })
//   .then((value) => {
//     console.log(value);
//   });

//using async await
// const getPage = async () => {
//   const data = await response;
//   const text = data.text();
//   return text;
// };

// const getPageHtml = async () => {
//   const html = await getPage();
//   console.log(html);
// };

// getPageHtml();

//2
// getting JSON
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => {
//     const JsonContent = response.json();
//     return JsonContent;
//   })
//   .then((value) => {
//     console.log(typeof value);
//     console.log(value);
//   });

//3

// const response = fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

// const getUrl = async () => {
//   const url = await response;
//   const pikachuImg = url.json();
//   return pikachuImg;
// };

// const getPikachuArt = async () => {
//   const art = await getUrl();
//   const pikachuURL = art.sprites.other["official-artwork"]["front_default"];
//   console.log(pikachuURL);
// };

// getPikachuArt();

//4
