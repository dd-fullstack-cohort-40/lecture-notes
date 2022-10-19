function targetButton() {
  const button = document.getElementById('target')
 if( button.innerHTML === "I have been clicked"){
   button.innerHTML = "click me"
 } else {
  button.innerHTML = "I have been clicked"
 }
  console.log(button)

}
