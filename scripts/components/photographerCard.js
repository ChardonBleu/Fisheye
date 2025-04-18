import { portraitURL } from "../utils/constants.js";

export default function photographerTemplate(data) {
  const { id, name, city, country, tagline, price, portrait } = data;

  const picture = portraitURL + `${portrait}`;

  const article = document.createElement("article");

  const userCard = `
    <a href="photographer.html?id=${id}"
       alt="${name}"
       aria-label="navigation vers la page du photographe ${name}">
        <div  class="portrait"><img src="${picture}" alt=""/></div>
        <div  class="portrait shadow" aria-hidden="true"><img src="${picture}" alt=""/></div>
        <h2>${name}</h2>
    </a>   
    <p class="location" tabindex="0">${city}, ${country}</p>
    <p class="tag" tabindex="0">${tagline}</p>     
    <p class="price" tabindex="0"s>${price}€/jour</p>
  `;
  article.innerHTML = userCard;

  return article;
}
