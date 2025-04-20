export default function mediaTemplate(media) {
  const article = document.createElement("article");

  const artistInfo = `
    <div  class="original-media artist-media" aria-hidden="true">${media.mediaElement}</div>

    <div class="media-info">
      <h2 aria-label="photo ${media.title}" tabindex="0">${media.title}</h2> 
      <p class="likes" tabindex="0" aria-label="likes de la photo">${media.likes}</p>
      <i class="heart fa-solid fa-heart" aria-hidden="true"></i>
    </div>
  `;

  article.innerHTML = artistInfo;

  return article;
}
