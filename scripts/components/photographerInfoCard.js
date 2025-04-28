import { portraitURL } from "../utils/constants.js";

export function indexPhotographerTemplate(data) {
  const picture = portraitURL + `${data.portrait}`;

  const article = document.createElement("article");

  const userCard = `
    <a href="photographer.html?id=${data.id}"
       alt="${data.name}"
       aria-label="navigation vers la page du photographe ${data.name}">
        <div  class="portrait"><img src="${picture}" alt=""/></div>
        <div  class="portrait shadow" aria-hidden="true"><img src="${picture}" alt=""/></div>
        <h2>${data.name}</h2>
    </a>   
    <p class="location">${data.city}, ${data.country}</p>
    <p class="tag">${data.tagline}</p>     
    <p class="price">${data.price}€/jour</p>
  `;
  article.innerHTML = userCard;

  return article;
}

export function photographerInfoTemplate(data) {
  const picture = portraitURL + `${data.portrait}`;

  const artistInfo = `
    <div class="artist-info" aria-label="Galerie du photographe ${data.name}">
      <h1 tabindex="0">${data.name}</h1> 
      <p class="location" tabindex="0">${data.city}, ${data.country}</p>
      <p class="tag" tabindex="0">${data.tagline}</p>
    </div>
    <button class="contact_button" aria-label="pour ouvrir un formulaire de contact">Contactez-moi</button>
    <div  class="portrait" aria-hidden="true"><img src="${picture}" alt=""/></div>   
  `;

  return artistInfo;
}
