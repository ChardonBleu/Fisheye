export default function mediaTemplate(media) {
  const article = document.createElement("article");

  const artistInfo = `
    <div  class="original-media artist-media">${media.mediaElement}</div>

    <div class="media-info">
      <h2>${media.title}</h2> 
      <p class="likes" tabindex="0">${media.likes}</p>
      <i class="heart fa-solid fa-heart"></i>
    </div>
  `;

  article.innerHTML = artistInfo;

  return article;
}
