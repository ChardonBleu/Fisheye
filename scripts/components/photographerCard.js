import constants from "../utils/constants.js";

export default function photographerTemplate(data) {
  const { name, portrait } = data;

  const picture = constants.portraitURL + `${portrait}`;

  const article = document.createElement("article");

  const userCard = `
    <img src="${picture}" alt="${name} portrait"/>
    <h2>${name}</h2>
  `;
  article.innerHTML = userCard;

  return article;
}
