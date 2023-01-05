import fetch from "node-fetch";

const response = fetch("https://wallhaven.cc/");

response.then((result) => {
  console.log(result);
});
