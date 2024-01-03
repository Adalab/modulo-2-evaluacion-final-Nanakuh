'use strict';
const characters = [
  {
    name: "Cenicienta",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png"
  },
  {
    name: "Hercules",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png"
  },
  {
    name: "Pinoccho",
    imageUrl: "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png"
  }
]

const resultList = document.querySelector('#result-list');

/*characters.map((character) => {
  let cardContainer = document.createElement('div');
  let characterImg = document.createElement('img');
  let characterName = document.createElement('p');
  characterName.textContent = character.name;
  characterImg.src = character.imageUrl;
  cardContainer.appendChild(characterImg);
  cardContainer.appendChild(characterName);
  resultList.appendChild(cardContainer);
})*/


characters.map((character) => {
  resultList.innerHTML += ` 
  <div>
    <img src=${character.imageUrl}/>
    <p>${character.name}</p>
  </div>
  `
})



