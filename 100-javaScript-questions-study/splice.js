const numbers = [1,2,3,4]
const newNumbers = [ 6,7,8,9]

numbers.splice(2, 2, ...newNumbers)
console.log(numbers)

//array.splice(startIndex, deleteCount, ...itemstoAdd)