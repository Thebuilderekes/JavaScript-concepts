const arr = [1, 2, 3];

function mapArray(arr, times) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * times);
  }

  return newArr;
}

const doubleArray = mapArray(arr, 2);
const trippleArr = mapArray(arr, 3);
console.log(doubleArray);

console.log(trippleArr);
