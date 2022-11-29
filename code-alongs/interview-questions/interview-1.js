// 1. In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.
function countOccurrences (startArray) {
  let countArray = []
  startArray.forEach((number) => {
    countArray[number] = countArray[number] ? countArray[number] + 1 :  1
  })
  return countArray
}


let myArray = [1,1,2,1,4,6]
let myCountArray = countOccurrences(myArray)
myCountArray.forEach((number, index) => console.log(`${index} appears in the array ${number} times.`))
console.log(myCountArray)