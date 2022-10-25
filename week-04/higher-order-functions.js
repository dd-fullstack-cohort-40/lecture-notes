const doSomeTask = () => {
  return "ya I did some task"
}

const doAnotherTask = doSomeTask
console.log(doAnotherTask)
console.log(doAnotherTask())

const completedTask = doSomeTask()
console.log(completedTask)

const doSomeTaskThreeTimes = (someTask) => {
  for(let i = 0; i < 3; i++) {
    someTask()
  }
}

const displayMessage = () => {
  console.log('message')
}

doSomeTaskThreeTimes(displayMessage)