let message = 'Will this be displayed?'
let mess = 'yuck'

function displaySomething (message, anotherArgument) {
  console.log(message)
  let mess = 'boo'
  console.log(mess)
  mess = 'blah'
  console.log(mess)
  console.log(anotherArgument)
}

displaySomething('hello world', mess)
displaySomething('How is your day?')
displaySomething('thing 1')
displaySomething(message)
displaySomething('thing 2')
displaySomething()
console.log(mess)

// function NAME (ARGUMENT1, ARGUMENT2) {
// BODY OF FUNCTION WHERE WE DO SOMETHING WITH THE ARGUMENTS AND MAYBE RETURN A VALUE
// }