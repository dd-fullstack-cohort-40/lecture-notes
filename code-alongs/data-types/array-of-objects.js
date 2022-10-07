// Json (javascript object notation)
let person1 = {
  name: 'Fred',
  age: 27
}

let person2 = {
  name: 'Sue',
  age: 32
}

let person3 = {
  name: 'Jim',
  age: 21
}

console.log(person1.name)
let students = [person1, person2, person3, {name: 'Mary', age: 23, favoriteFood: 'pasta'}]
console.log(students[1].name)

students.forEach(student => console.log(student.name + ' is ' + student.age))
// is the same as...
// students.forEach(function (student) { console.log(student.name + ' is ' + student.age)})