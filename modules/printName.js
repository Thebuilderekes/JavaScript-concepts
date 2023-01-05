const printName = () => {
  console.log("ekeopre");
};

const monkey = {
  name: "abu",
  age: 2,
};

export { monkey };
export default printName;
//We can only have one export default per file and this can be renamed on the import side.
//It is preferable to have all your imports and exports at the top and bottom of the files
