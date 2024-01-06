'use strict';


const fetchDisneyCharacters = () => {
  return fetch('https://api.disneyapi.dev/character?pageSize=50')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Network response was not ok');
        return null;
      }
    });
};

const cardsResult = document.querySelector('.js_cardsResult');


fetchDisneyCharacters()
  .then(characters => {
    console.log(characters);
    characters.data.map((character) => {
      cardsResult.innerHTML += ` 
                  <div>
                      <img src=${character.imageUrl}/>
                      <p>${character.name}</p>
                  </div>
              `;
    });
  })
  .catch(error => console.log(error));

//QUERY SELECTOR
//const cardsResult = document.querySelector('.js_cardsResult');




// FUNCIONES
/*function renderOne(cardData) {
  cardsResult.innerHTML += `
  
`
}*/
// FUNCIONES DE EVENTOS (HANDLER)
// EVENTOS
// CÓDIGO CUANDO CARGA LA PAGINA
// renderOne();



