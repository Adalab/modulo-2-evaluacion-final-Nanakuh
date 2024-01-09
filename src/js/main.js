'use strict';


const cardsResult = document.querySelector('.js_cardsResult');
const searchBarInput = document.querySelector('.js_search-bar__input');
const searchBarButton = document.querySelector('.js_search-bar__button');
const favouritesList = [];

fetch('//api.disneyapi.dev/character?pageSize=50')
  .then(response => {
    return response.json();
  })
  .then(characters => {
    characters.data.map((character) => {
      let characterImage = character.imageUrl
      if (characterImage === undefined) {
        characterImage = "https://via.placeholder.com/210x295/ffffff/555555/?text=Disney";
      }

      cardsResult.innerHTML += ` 
                  <div class="card js_card">
                      <img src=${characterImage}/>
                      <p>${character.name}</p>
                  </div>
              `;
         
    });
  })
  .catch(error => console.log(error));

searchBarButton.addEventListener('click', (event) => {
  event.preventDefault()
  const nameToSearch = searchBarInput.value;
  console.log(nameToSearch);
  cardsResult.innerHTML = '';
  fetch(`//api.disneyapi.dev/character?name=${nameToSearch}`)
    .then(response => {
      return response.json();
    })
    .then(characters => {
      console.log(characters.data.length);
      if (characters.data.length > 0) {
        characters.data.map((character) => {
          cardsResult.innerHTML += ` 
                    <div class="card js_card">
                        <img src=${character.imageUrl}/>
                        <p>${character.name}</p>
                    </div>
                `;
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

document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".js__card");
  for (const card of cards) {
      card.addEventListener("click", function() {
          console.log("Tarjeta clickeada!");
      });
  }
});
/*const cards = document.querySelectorAll(".js_card");
// Función que se ejecutará cuando se haga clic en la tarjeta
function onCardClick() {
    console.log("Tarjeta clickeada!");
}

// Recorrer todos los elementos y añadir un event listener a cada uno
for (const card of cards) {
    card.addEventListener("click", onCardClick);
}*/





//DATOS



// FUNCIONES
/*function renderOne(cardData) {
  cardsResult.innerHTML += `

`
}*/
// FUNCIONES DE EVENTOS (HANDLER)
// EVENTOS

/*cardsResult.addEventListener('click', (event) => {
  console.log('Click');
})*/
// CÓDIGO CUANDO CARGA LA PAGINA
// renderOne();







