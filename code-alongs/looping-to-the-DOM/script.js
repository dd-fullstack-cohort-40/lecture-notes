
let people = ['Mary', 'Sue', 'Jane', 'Fred', 'Mark']

console.log(people)

let targetDiv = document.getElementById('target')
console.log(targetDiv)
people.forEach(

  (person) => {

    // targetDiv.innerHTML = `${targetDiv.innerHTML} <h2> ${person} </h2>`
    targetDiv.innerHTML = targetDiv.innerHTML + '<h2>' + person + '</h2>'
    console.log(person)

  }
)