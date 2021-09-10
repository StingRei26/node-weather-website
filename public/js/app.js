// to fetch json data from a URL and parse it w weather info 
const weatherForm = document.querySelector('form'); 
const search = document.querySelector('input'); 
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
    //    checking for errors first
     if (data.error) {
        messageOne.textContent = data.error
     } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
     }

    })
   
  })
// console.log(location)
})