'use strict';


const charactersContainer = document.querySelector('.js_cardsResult'); // 
const favouritesContainer = document.querySelector('.favourites-cards');


const searchBarInput = document.querySelector('.js_search-bar__input');
const searchBarButton = document.querySelector('.js_search-bar__button');

const favouritesList = [];


function createCharacterCard(character) {

  // Creo una ficha para el personaje seleccionado
  const card = document.createElement('div');
  card.classList.add('card', 'js_card');
  card.setAttribute('id', character._id);
  let characterImage = character.imageUrl;

  if (characterImage === undefined) {
    characterImage = "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";// Si no hay foto pongo ésta
  }

  card.innerHTML = `
    <img src="${characterImage}" alt="Character image">
    <p>${character.name}</p>
  `;
  // Añado addEventListener (comportamiento de la ficha al pulsar)
  card.addEventListener('click', function (event) {
    const characterId = parseInt(event.currentTarget.id);
    const favouriteIndex = favouritesList.findIndex((favouriteCharacterId) => favouriteCharacterId === characterId);

    if (favouriteIndex !== -1) { // si el personaje ya existe en el array de favoritos, lo quito
      favouritesList.splice(favouriteIndex, 1);
      card.classList.remove('card__favourite');
      const cardToRemove = document.getElementById(`f-${character._id}`); // Encuenta la tarj de favoritos del personaje a eliminar
      favouritesContainer.removeChild(cardToRemove);

    }

    else { // si el personaje no existe en array de favoritos, lo añado
      favouritesList.push(characterId);
      card.classList.add('card__favourite');

      // Creo una ficha para el favorito seleccionado
      const favouriteCard = document.createElement('div');
      favouriteCard.classList.add('card', 'js_favourite_card');
      favouriteCard.setAttribute('id', `f-${character._id}`);// id específico para el favorito distinto a la ficha original.
      let characterImage = character.imageUrl;

      if (characterImage === undefined) {
        characterImage = "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";// Si no hay foto pongo ésta
      }

      favouriteCard.innerHTML = `
    <img src="${characterImage}" alt="Character image">
    <p>${character.name}</p>
  `;
      //añado la ficha de favorito a la lista de favoritos
      favouritesContainer.appendChild(favouriteCard)

    }
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

      charactersContainer.appendChild(characterCard);

    });
  })
  .catch(error => console.log(error));

searchBarButton.addEventListener('click', (event) => {
  event.preventDefault()
  const nameToSearch = searchBarInput.value;
  charactersContainer.innerHTML = '';
  favouritesContainer.innerHTML = '';

  fetch(`//api.disneyapi.dev/character?name=${nameToSearch}`)
    .then(response => {
      return response.json();
    })
    .then(characters => {
      if (characters.data.length > 0) {
        characters.data.map((character) => {
          const characterCard = createCharacterCard(character);

          charactersContainer.appendChild(characterCard);
        });
      }
      else {
        charactersContainer.innerHTML = ` 
          <div>
            <p>No se han encontrado resultados</p>
          </div>
        `;
      }

    })
    .catch(error => console.log(error));

})









