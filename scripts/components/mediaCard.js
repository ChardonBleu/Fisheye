export default function mediaTemplate(media) {
  const article = document.createElement("article");

  const artistInfo = `
    <div class="artist-media" aria-label="photo ${media.title}" tabindex="0" role="button"><a class="openLightboxBtn">${media.mediaThumbnail}</a></div>

    <div class="media-info">
      <h2 aria-hidden="true">${media.title}</h2> 
      <p class="likes" aria-label="likes de la photo">${media.likes}</p>
      <i class="heart fa-solid fa-heart" aria-label="bouton likes" tabindex="0"></i>
    </div>
  `;

  article.innerHTML = artistInfo;

  return article;
}
