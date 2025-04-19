import { mediaURL } from "../utils/constants.js";

export default function mediaTemplate(data, artistName) {
  const folder = artistName.split(" ").join("");
  const article = document.createElement("article");

  if (data.image) {
    const picture = mediaURL + `${folder}/${data.image}`;

    const artistInfo = `
      <div  class="original-media artist-media"><img src="${picture}" alt=""/></div>

      <div class="media-info">
        <h2>${data.title}</h2> 
        <p class="likes" tabindex="0">${data.likes}</p>
        <i class="heart fa-solid fa-heart"></i>
      </div>
    `;

    article.innerHTML = artistInfo;

    return article;
  } else if (data.video) {
    const artistInfo = `
      <div  class="original-media artist-media"></div>
      <div class="media-info">
        <h2>${data.title}</h2> 
        <p class="likes" tabindex="0">${data.likes}</p>
        <i class="heart fa-solid fa-heart"></i>
      </div>
    `;

    article.innerHTML = artistInfo;

    return article;
  }
  return article;
}
