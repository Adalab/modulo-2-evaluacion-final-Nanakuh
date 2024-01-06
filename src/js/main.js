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

const resultList = document.querySelector('.js_characters');


fetchDisneyCharacters()
  .then(characters => {
    console.log(characters);
    characters.data.map((character) => {
      resultList.innerHTML += ` 
                  <div>
                      <img src=${character.imageUrl}/>
                      <p>${character.name}</p>
                  </div>
              `;
    });
  })
  .catch(error => console.log(error));








