function buttonClicked () {
  console.log('what up')
  // make some change to the DOM
  let porkTag = document.getElementById('pork')
  let pTagText = porkTag.innerText
  let pTagArray = pTagText.split(' ')
  let reversedPTagArray = pTagArray.reverse()
  let reversedPTagText = reversedPTagArray.join(' ')
  console.log(porkTag)
  porkTag.innerText = reversedPTagText
}

function findAndReplace (event) {
  event.preventDefault()
  let text = document.getElementById('findAndReplaceParagraph').innerText
  let find = document.getElementById('text-find').value
  let replace =document.getElementById('text-replace').value

  const regularExpression = new RegExp(find, 'gi')

  const newText = text.replace(regularExpression, replace)

  document.getElementById('findAndReplaceParagraph').innerText = newText
}


const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

const originalScrollDeleteArrayOfWords = document.getElementById('scrollDelete').innerText.split(' ')

const scrollDelete = (event) => {
  console.log(event.wheelDeltaX)
  let scrollDeleteParagraph = document.getElementById('scrollDelete')
  let arrayOfWords = scrollDeleteParagraph.innerText.split(' ')
  if (event.wheelDeltaX < 0) {
    arrayOfWords.pop()
  } else {
    arrayOfWords.push(originalScrollDeleteArrayOfWords[arrayOfWords.length])
  }
  scrollDeleteParagraph.innerText = arrayOfWords.join(' ')
}





