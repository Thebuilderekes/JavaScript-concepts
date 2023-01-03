const arr = [
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
];
// sort by name string

console.log(arr.sort((a, b) => a["name"].localeCompare(b["name"]))); // arranges in alphabetical order
