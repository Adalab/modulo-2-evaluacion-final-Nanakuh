'use strict';


const cardsResult = document.querySelector('.js_cardsResult');
const searchBarInput = document.querySelector('.js_search-bar__input');
const searchBarButton = document.querySelector('.js_search-bar__button');

fetch('//api.disneyapi.dev/character?pageSize=50')
  .then(response => {
    return response.json();
  })
  .then(characters => {
    characters.data.map((character) => {
      cardsResult.innerHTML += ` 
                  <div class="card js_card">
                      <img src=${character.imageUrl}/>
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


//const cardsResult = document.querySelector('.js_cardsResult');

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







