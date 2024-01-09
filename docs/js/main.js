const c=document.querySelector(".js_cardsResult"),o=document.querySelector(".favourites-cards"),f=document.querySelector(".js_search-bar__input"),m=document.querySelector(".js_search-bar__button"),s=[];function u(e){const a=document.createElement("div");a.classList.add("card","js_card"),a.setAttribute("id",e._id);let t=e.imageUrl;return t===void 0&&(t="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney"),a.innerHTML=`
    <img src="${t}" alt="Character image">
    <p>${e.name}</p>
  `,a.addEventListener("click",function(d){const r=parseInt(d.currentTarget.id),l=s.findIndex(n=>n===r);if(l!==-1){s.splice(l,1),a.classList.remove("card__favourite");const n=document.getElementById(`f-${e._id}`);o.removeChild(n)}else{s.push(r),a.classList.add("card__favourite");const n=document.createElement("div");n.classList.add("card","js_favourite_card"),n.setAttribute("id",`f-${e._id}`);let i=e.imageUrl;i===void 0&&(i="https://via.placeholder.com/210x295/ffffff/555555/?text=Disney"),n.innerHTML=`
    <img src="${i}" alt="Character image">
    <p>${e.name}</p>
  `,o.appendChild(n)}}),a}fetch("//api.disneyapi.dev/character?pageSize=50").then(e=>e.json()).then(e=>{e.data.map(a=>{const t=u(a);c.appendChild(t)})}).catch(e=>console.log(e));m.addEventListener("click",e=>{e.preventDefault();const a=f.value;c.innerHTML="",o.innerHTML="",fetch(`//api.disneyapi.dev/character?name=${a}`).then(t=>t.json()).then(t=>{t.data.length>0?t.data.map(d=>{const r=u(d);c.appendChild(r)}):c.innerHTML=` 
          <div>
            <p>No se han encontrado resultados</p>
          </div>
        `}).catch(t=>console.log(t))});
//# sourceMappingURL=main.js.map
