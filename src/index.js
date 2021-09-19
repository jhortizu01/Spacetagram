import "./styles/index.scss";
import SpaceRepository from "./classes/spaceRepository.js";
import SpaceObject from "./classes/spaceObject.js";
import "./images/like.svg"
import "./images/unlike.svg"
import "./images/space-background.jpeg"
import "./images/astronaut.gif"
import dayjs from 'dayjs'

let spaceRepository, spaceObject

let cardContainer = document.getElementById('cardContainer')
let submit = document.getElementById('submitButton')

function fetchAPI() {
  let API_KEY = "SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj"
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)
   .then(response => response.json())
   .then(data => instantiateData(data))
   .catch(error => console.log(error))
 }

 function instantiateData(data) {
   spaceRepository = new SpaceRepository(data)
   spaceObject = data.map(object => {
    return new SpaceObject(object)
   })

   showCards(spaceObject)
 }

 function showCards(data) {
  data.map(object =>
    {
    const spaceCard = document.createElement('div');
    spaceCard.classList = 'space-card';

    let cardContent =
    `<div class="card">
      <input type="button" class="like-button unlike" id="likeButton">
      </input>
      <p class="date">${object.date}</p>
      <img src="${object.hdurl}" class="card-image" alt="${object.title}">
      <input type="text" value="${object.hdurl}" id="imageLink">
        <button type="button" class="copy-image" id="copyImage"> Copy image link! </button>
      <article class="card-description">
        <p class="title">${object.title}</p><br>
        <p class="description">${object.explanation}</p>
      </article>
    </div>`

    cardContainer.innerHTML += cardContent
  })
 }
 

 window.addEventListener('load', () => {
  fetchAPI()
 })

 submit.addEventListener('click', getNewCards)

 function getNewCards() {
   let startDateValue = document.getElementById('startDate').value
   let endDateValue = document.getElementById('endDate').value
   validateData(startDateValue, endDateValue)
 }

 function validateData(start, end) {
  let today = new Date()
  let wrongStartError = document.getElementById('wrongStart')
  let wrongEndError = document.getElementById('wrongEnd')

   if(dayjs(start).isBefore(dayjs('1995-06-16'))) {
    wrongStartError.classList.remove('hidden')
   } else if(dayjs(end).isAfter(dayjs(today))) {
    wrongEndError.classList.remove('hidden')
   } else {
     wrongStartError.classList.add('hidden')
     wrongEndError.classList.add('hidden')
    fetchNewDates(start, end)
    clearCards()
   }
 }

 function fetchNewDates(start, end) {
  let API_KEY = "SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj"
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start}&end_date=${end}`)
   .then(response => response.json())
   .then(data => showCards(data))
   .catch(error => console.log(error))
 }

 function clearCards() {
   while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
 }

cardContainer.addEventListener('click', (e) => {
  let eventButton = e.target
  //console.log(eventButton)
  if(eventButton.classList.contains('unlike')) {
    eventButton.classList.remove('unlike')
    eventButton.classList.add('like')
  } else if (eventButton.classList.contains('like')) {
    eventButton.classList.remove('like')
    eventButton.classList.add('unlike')
  } else if (eventButton.classList.contains('copy-image')) {
      copyPageUrl()
  }
})



async function copyPageUrl() {
  var copyText = document.getElementById('imageLink').value;
  try {
    await navigator.clipboard.writeText(copyText);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

//Jun 16, 1995 and Sep 19, 2021