export function mediaTemplate(media) {
  const article = document.createElement("article");

  const artistInfo = `
    <div class="artist-media" aria-label="photo ${media.title}" tabindex="0" role="button"><a class="openLightboxBtn">${media.mediaThumbnail}</a></div>

    <section class="media-info">
      <h2>${media.title}</h2> 
      <p class="likes" aria-label="likes de la photo">${media.likes}</p>
      <i class="heart fa-solid fa-heart" aria-label="bouton likes" tabindex="0"></i>
    </section>
  `;

  article.innerHTML = artistInfo;

  return article;
}
