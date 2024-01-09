'use strict';


const cardsResult = document.querySelector('.js_cardsResult');
const searchBarInput = document.querySelector('.js_search-bar__input');
const searchBarButton = document.querySelector('.js_search-bar__button');
const favouritesList = [];


function createCharacterCard(character) {

  const card = document.createElement('div');
  card.classList.add('card', 'js_card');
  card.setAttribute('id', character._id);
  let characterImage = character.imageUrl;
  if (characterImage === undefined) {
    characterImage = "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
  }
  card.innerHTML = `
    <img src="${characterImage}" alt="Character image">
    <p>${character.name}</p>
  `;
  card.addEventListener('click', function (event) {
    const characterId = parseInt(event.currentTarget.id);
    const favouriteIndex = favouritesList.indexOf(characterId);
    if (favouriteIndex) {
      favouritesList.splice(favouriteIndex, 1);

    }
    else {

      favouritesList.push(characterId);
    }
    console.log(favouritesList)


  });
  return card
}

fetch('//api.disneyapi.dev/character?pageSize=50')
  .then(response => {
    return response.json();
  })
  .then(characters => {
    characters.data.map((character) => {

      const characterCard = createCharacterCard(character);

      cardsResult.appendChild(characterCard);

    });
  })
  .catch(error => console.log(error));

searchBarButton.addEventListener('click', (event) => {
  event.preventDefault()
  const nameToSearch = searchBarInput.value;
  cardsResult.innerHTML = '';
  fetch(`//api.disneyapi.dev/character?name=${nameToSearch}`)
    .then(response => {
      return response.json();
    })
    .then(characters => {
      if (characters.data.length > 0) {
        characters.data.map((character) => {
          const characterCard = createCharacterCard(character);

          cardsResult.appendChild(characterCard);
        });
      }
      else {
        cardsResult.innerHTML = ` 
          <div>
            <p>No se han encontrado resultados</p>
          </div>
        `;
      }

    })
    .catch(error => console.log(error));

})









