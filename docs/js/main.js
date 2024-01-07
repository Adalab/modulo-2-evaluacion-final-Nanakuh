const s=()=>fetch("https://api.disneyapi.dev/character?pageSize=50").then(e=>e.ok?e.json():(console.error("Network response was not ok"),null)),t=document.querySelector(".js_cardsResult");s().then(e=>{e.data.map(r=>{t.innerHTML+=` 
                  <div class="card js_card">
                      <img src=${r.imageUrl}/>
                      <p>${r.name}</p>
                  </div>
              `})}).catch(e=>console.log(e));const c=document.querySelectorAll(".js_card");console.log(c);
//# sourceMappingURL=main.js.map
