import { portraitURL } from "../utils/constants.js";

export default function indexPhotographerTemplate(data) {
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
    <p class="location" tabindex="0">${data.city}, ${data.country}</p>
    <p class="tag" tabindex="0">${data.tagline}</p>     
    <p class="price" tabindex="0"s>${data.price}€/jour</p>
  `;
  article.innerHTML = userCard;

  return article;
}
