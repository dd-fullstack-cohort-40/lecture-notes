function targetButton() {
  console.log('someone clicked my button')
  let target = document.getElementById('target')
  console.log(target)
  if (target.innerText === 'click me') {
    target.style.borderColor = 'red'
    target.innerText = 'clicked'
    let h1Tags = document.getElementsByTagName('h1')
    console.log(h1Tags)
    h1Tags[0].innerText = 'Hi Nycole'
  } else {
    target.style.borderColor = ''
    target.innerText = 'click me'
    let h1Tags = document.getElementsByTagName('h1')
    console.log(h1Tags)
    h1Tags[0].innerText = 'Javascript events demo'
  }

}