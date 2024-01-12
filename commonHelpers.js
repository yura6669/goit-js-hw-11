import{S as f,i as d}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function m(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,close:!1,overlay:!1,displayMode:"once",color:"#EF4040",messageColor:"#FFFFFF",messageSize:"16px",iconColor:"#FFFFFF",theme:"dark",messageLineHeight:"24px",iconColor:"#FFFFFF"})}const c=document.querySelector(".search-form"),h=document.querySelector(".search-input"),l=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",captionClass:"caption-style",close:!0,closeText:"×",fadeSpeed:250,animationSpeed:250}),a=document.querySelector(".loader");c.addEventListener("submit",g);function g(s){s.preventDefault(),l.innerHTML="",a.classList.add("loader-show");const t=h.value;F(t),c.reset()}function F(s){const r=`https://pixabay.com/api/?key=38212376-ffcb529addc704f756c0c7d48&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(r).then(e=>e.json()).then(e=>{if(e.hits.length===0)m(),a.classList.remove("loader-show");else{const o=b(e.hits);l.insertAdjacentHTML("beforeend",o),a.classList.remove("loader-show"),y.refresh()}}).catch(e=>console.log(e))}function b(s){return s.map(({webformatURL:t,largeImageURL:i,tags:r,likes:e,views:o,comments:n,downloads:u,user:p})=>`
        <li class="photo-card">
            <a href="${i}" class="gallery__item">
                <img src="${t}" alt="Author: ${p}, tags: ${r}" class="gallery__image" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${e}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${o}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${n}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${u}</span>
                </p>
            </div>
        </li>
        `).join("")}
//# sourceMappingURL=commonHelpers.js.map
