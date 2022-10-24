console.log('get some bacon')

fetch('https://baconipsum.com/api/?type=meat-and-filler')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
    // this is where we need to use the response/data
    let targetDiv = document.getElementById('target')
    // console.log(targetDiv)
    data.forEach((paragraph) => {
      console.log(paragraph)
      // targetDiv.innerHTML = targetDiv.innerHTML + '<p>' + paragraph + '</p>'
      const p = document.createElement("p");
      p.innerText = paragraph
      targetDiv.appendChild(p);
    })
  });

console.log('this happened after the fetch')
