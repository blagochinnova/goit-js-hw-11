import{S as y,i as m}from"./assets/vendor-9310f15c.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const p=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader");let i={key:"41751590-b6ce5e955eace60263a904c25",image_type:"photo",orientation:"horizontal",safesearch:!0};function g(){c.style.display="block",n.style.display="none"}function h(){c.style.display="none",n.style.display="flex"}function L(o){return o.reduce((e,l)=>{const{largeImageURL:s,webformatURL:t,tags:r,likes:a,views:u,comments:d,downloads:f}=l;return e+`<li class="gallery-item">
        <a href=${s}> 
          <img class="gallery-img" src=${t} alt=${r} />
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${a}</span></p>
          <p>views: <span class="text-value">${u}</span></p>
          <p>comments: <span class="text-value">${d}</span></p>
          <p>downloads: <span class="text-value">${f}</span></p>
        </div>
      </li>`},"")}function b(o){const e=L(o);n.innerHTML=e}function x(){new y(".gallery a",{nav:!0,captionDelay:250,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0}).refresh()}function v(){n.style.display="none",m.error({position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})}function w(o){g(),fetch(`https://pixabay.com/api/?${o}`).then(e=>{if(h(),!e.ok)throw new Error(e.statusText);return e.json()}).then(({hits:e})=>{e.length>0?(b(e),x()):v()}).catch(e=>{console.error(e)})}p.addEventListener("submit",o=>{o.preventDefault(),i.q=o.target.elements.search.value.trim();const e=new URLSearchParams(i);w(e),o.currentTarget.reset()});
//# sourceMappingURL=commonHelpers.js.map
