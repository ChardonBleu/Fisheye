import constants from "../utils/constants.js";

export default function photographerTemplate(data) {
  const { name, city, country, tagline, price, portrait } = data;

  const picture = constants.portraitURL + `${portrait}`;

  const article = document.createElement("article");

  const userCard = `
    <img src="${picture}" alt="${name} portrait" class="portrait"/>
    <h2>${name}</h2>
    <p class="location">${city}, ${country}</p>
    <p class="tag">${tagline}</p>
    <p class="price">${price}€/jour</p>
  `;
  article.innerHTML = userCard;

  return article;
}
