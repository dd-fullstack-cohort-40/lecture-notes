function handleLoadEvent () {
  fetch('https://ddc-web-student.cnm.edu/apis/')
    .then(response => response.json())
    .then(data => {
      console.log(data.data)
      document.getElementById('target').innerHTML = data.data.reduce(
        (accumulatedCards, currentDataElement) => {
          return (
            `${accumulatedCards}
              <div class="col">
               <div class="card">
                  <div class="card-body">
                     <h5 class="card-title">${currentDataElement.title}</h5>
                     <p class="card-text">${currentDataElement.body}</p>
                  </div>
                 </div>
               </div>`
          )
        },'')
    })
}