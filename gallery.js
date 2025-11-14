/* empty css                      */import{S as d,i as c}from"./assets/vendor-B2mb6eXk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const p="53247506-7aa000431d66614cf5718bca5",h="https://pixabay.com/api/";async function f(n){const o=`${h}?key=${p}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const r=await fetch(o);if(!r.ok)throw new Error("Network response was not ok");const e=await r.json();return!e.hits||e.hits.length===0?[]:e.hits}catch(r){throw console.error("Error fetching images:",r),r}}let l;function m(n){const o=document.querySelector(".gallery");o.innerHTML="";const r=n.map(e=>`
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>👍 ${e.likes}</p>
        <p>👁️ ${e.views}</p>
        <p>💬 ${e.comments}</p>
        <p>⬇️ ${e.downloads}</p>
      </div>
    </li>
  `).join("");o.innerHTML=r,l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}const y=document.querySelector("#search-form"),g=document.querySelector(".gallery"),u=document.querySelector("#loader");y.addEventListener("submit",async n=>{n.preventDefault();const o=n.target.elements["search-input"],r=o.value.trim();if(g.innerHTML="",u.classList.remove("hidden"),!r){c.info({title:"Empty Search",message:"Please enter a search term!",position:"topRight",timeout:2e3}),u.classList.add("hidden");return}try{const e=await f(r);if(!e.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3});return}m(e),o.value=""}catch(e){console.error(e),c.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight",timeout:3e3})}finally{u.classList.add("hidden")}});const a=document.getElementById("search-input");a.addEventListener("focus",()=>{a.placeholder="Type area..."});a.addEventListener("blur",()=>{a.placeholder="Search images..."});
//# sourceMappingURL=gallery.js.map
