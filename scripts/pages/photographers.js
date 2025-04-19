import { displayModal, closeModal } from "../utils/contactForm.js";
import mediaTemplate from "../components/mediaCard.js";

export function displayMediaPhotographer(artist, artistMedias) {
  artist.displayArtistInfo();

  const galery = document.querySelector(".galery");
  artistMedias.forEach((media) => {
    const mediaCard = mediaTemplate(media, artist.name);
    galery.appendChild(mediaCard);
  });
}

export function manageModalForm() {
  const contactBtn = document.querySelector(".contact_button");
  const closeModalBtn = document.querySelector(".modal > header > img");

  contactBtn.addEventListener("click", displayModal);
  closeModalBtn.addEventListener("click", closeModal);
}
