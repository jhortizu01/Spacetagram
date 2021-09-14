import "./styles/index.scss";
import SpaceRepository from "./classes/spaceRepository.js";
import SpaceObject from "./classes/spaceObject.js";
import "./images/like.svg"
import "./images/unlike.svg"
import "./images/space-background.jpeg"
import "./images/astronaut.gif"

let spaceRepository, spaceObject

let cardContainer = document.getElementById('cardContainer')

function fetchAPI() {
  let API_KEY = "SjnTawcUeG6oSoWsk4yVaMlKBouZUGWGX1yoNWbj"
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=20`)
   .then(response => response.json())
   .then(data => instantiate(data));
 }

 function instantiate(data) {
   spaceRepository = new SpaceRepository(data)
   spaceObject = data.map(object => {
    return new SpaceObject(object)
   })
   showCards()
 }

 function showCards() {
  spaceObject.map(object =>
    {
    const spaceCard = document.createElement('div');
    spaceCard.classList = 'space-card';

    let cardContent =
    `<div class="card">
      <input type="button" class="like-button unlike" id="likeButton">
      </input>
    
      <p class="date">${object.date}</p>
      <img src="${object.hdurl}" class="card-image" alt="${object.title}">
      <article class="card-description">
        <p class="title">${object.title}</p><br>
        <p class="description">${object.explanation}
        </p>
      </article>
    </div>`

    cardContainer.innerHTML += cardContent
  })
 }

 function loadScreen() {
   let loader = document.getElementById("loadScreen")
   loader.parentElement.removeChild(loader)
 }

 window.addEventListener('load', () => {
  setTimeout(loadScreen, 1000)
  fetchAPI()
 })

cardContainer.addEventListener('click', (e) => {
  let likeButton = e.target
  if(likeButton.closest('input').classList.contains('unlike')) {
    likeButton.closest('input').classList.remove('unlike')
    likeButton.closest('input').classList.add('like')
  } else if (likeButton.closest('input').classList.contains('like')) {
    likeButton.closest('input').classList.remove('like')
    likeButton.closest('input').classList.add('unlike')
  }
})