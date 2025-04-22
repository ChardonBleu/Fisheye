export default function lightboxTemplate() {
  const artistInfo = `
      <div class="lightbox_modal">
        <div aria-label="carousel" class="carousel" aria-label="image closeup view">
          <i tabindex="0" class="close-lightbox fa-solid fa-xmark" aria-label="Close dialog" role="button"></i>
          <i tabindex="0" class="chevron-left fa-solid fa-chevron-left" aria-label="Previous image" role="link"></i>
          <ul class="slides-container" id="slides-container"></ul>
          <i tabindex="0" class="chevron-right fa-solid fa-chevron-right" aria-label="Next image" role="link"></i>
        </div>
      </div>
      `;

  return artistInfo;
}
