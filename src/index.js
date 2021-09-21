import "./styles/index.scss";

import SpaceObject from "./classes/spaceObject.js";
import "./images/like.svg"
import "./images/unlike.svg"
import "./images/space-background.jpeg"
import "./images/astronaut.gif"
import dayjs from 'dayjs'

let spaceObject
let cardContainer = document.getElementById('cardContainer')
let submit = document.getElementById('submitButton')

//Functions//

const fetchAPI = () => {
  let API_KEY = "SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj"
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)
   .then(response => response.json())
   .then(data => instantiateData(data))
   .catch(error => console.log(error))
 }

const instantiateData = (data) => {
   spaceObject = data.map(object => {
    return new SpaceObject(object)
   })

   showCards(spaceObject)
 }

const showCards = (data) => {
  data.map(object =>
    {
    const spaceCard = document.createElement('div');
    spaceCard.classList = 'space-card';

    let cardContent =
    `<section class="card">
      <input aria-label="like" type="button" class="like-button unlike" id="likeButton">
      </input>
      <p aria-label="date of photo" role="note" class="date">${object.date}</p>
      <img src="${object.hdurl}" class="card-image" alt="${object.title}">
      <input aria-label="image link ${object.hdurl}" type="text" value="${object.hdurl}" id="imageLink" class="image-link"><br>
        <button aria-label="click to copy image link" type="button" class="copy-image" id="copyImage"> Copy image link! </button>
      <article class="card-description">
        <p  aria-label="${object.title}" class="title">${object.title}</p><br>
        <p  aria-label="${object.explanation}" class="description">${object.explanation}</p>
      </article>
    </section>`

    cardContainer.innerHTML += cardContent
  })
} 

const getNewCards = () => {
   let startDateValue = document.getElementById('startDate').value
   let endDateValue = document.getElementById('endDate').value
   validateData(startDateValue, endDateValue)
 }

const validateData = (start, end) => {
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

const fetchNewDates = (start, end) => {
  let API_KEY = "SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj"
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${start}&end_date=${end}`)
   .then(response => response.json())
   .then(data => showCards(data))
   .catch(error => console.log(error))
 }

const clearCards = () => {
  while (container.firstChild) {
   container.removeChild(container.firstChild);
 }
}

async function copyPageUrl() {
  var copyText = document.getElementById('imageLink').value;
  console.log(copyText)
  try {
    await navigator.clipboard.writeText(copyText);
    console.log('Page URL copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

//Event Listeners

window.addEventListener('load', () => {
  fetchAPI()
 })

submit.addEventListener('click', getNewCards)

cardContainer.addEventListener('click', (e) => {
  let eventButton = e.target
  let likeBtn = document.getElementById('likeButton')

  if(eventButton.classList.contains('unlike')) {
    eventButton.classList.remove('unlike')
    eventButton.classList.add('like')
    eventButton.ariaLabel = 'unlike'
  } else if (eventButton.classList.contains('like')) {
    eventButton.classList.remove('like')
    eventButton.classList.add('unlike')
    eventButton.ariaLabel = 'like'
  } else if (eventButton.classList.contains('copy-image')) {
      copyPageUrl()
  }
})