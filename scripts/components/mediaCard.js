export default function mediaTemplate(media) {
  const article = document.createElement("article");

  const artistInfo = `
    <div  class="original-media artist-media" aria-hidden="true">${media.mediaElement}</div>

    <div class="media-info" aria-label="description de la photo">
      <h2 tabindex="0">${media.title}</h2> 
      <p class="likes" tabindex="0" aria-label="nombre de likes">${media.likes}</p>
      <i class="heart fa-solid fa-heart" aria-hidden="true"></i>
    </div>
  `;

  article.innerHTML = artistInfo;

  return article;
}
