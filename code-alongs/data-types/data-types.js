// 'Fred' is a string
const name = 'Fred'
// 27 is a number (also an integer)
let age = 27
console.log(name + ' is ' + age)
age = age + 1
console.log('A year later ' + name + ' is ' + age)
// name = 'Fredrick' THIS WILL NOT WORK BECAUSE name was declared with const

let people = ['Sue', 'Jim', 'Mary', name]
console.log(people[0])
people[0] = 'Susan'
console.log(people[0])