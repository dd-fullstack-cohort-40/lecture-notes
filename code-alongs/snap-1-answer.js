// Given two numbers, write an algorithm that outputs the sum of all odd numbers between those numbers, inclusive.

/**
 * step 1 start
 * step 2 define value1, value2, min, max and sum
 * step 3 if value1 < value2
 *  step 3.1 set max = value2 and set min to value1
 * step 4 else
 *  step4.1 set max  = value1 and set min = value2

 * step 6 create for loop let i = min; i <= max; i = i + 1 IE i++
 *  step 6.1 if i is not divisible by 2
 *    step 6.1.1 sum = sum + i
 * step 7 display the sum
 * step 8 stop
 **/

// Take two numbers as arguments and return a new value after a mathematical operation (addition, subtraction, multiplication, etc.)  Which operation is your choice.

/**
 * a simple function to add any two numbers
 * @param value1 the first number to add
 * @param value2 the second number to add
 * @return {*} the sum of value1 + value2
 **/

function addTwoNumbers(value1, value2) {
  let sum = value1 + value2
  return sum
}

let returnValue = addTwoNumbers(2,3)
console.log(returnValue)

function concatenateTwoStrings(string1, string2) {
  //return string1 + string2
  return `${string1} ${string2}`

}

let returnValueForQuestion2 = concatenateTwoStrings("plus signs", "for strings is confusing")
console.log(returnValueForQuestion2)