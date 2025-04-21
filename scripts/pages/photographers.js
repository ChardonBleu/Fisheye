import { displayModal, closeModal } from "../utils/contactForm.js";
import mediaTemplate from "../components/mediaCard.js";
import formTemplate from "../components/FormCard.js";

export function displayMediaPhotographer(artist, artistMedias) {
  artist.displayArtistInfo();
  artist.displayAsideInfo();

  const galery = document.querySelector(".galery");
  artistMedias.forEach((media) => {
    const mediaCard = mediaTemplate(media, artist.name);
    galery.appendChild(mediaCard);
  });
}

export function displayModalForm(artist) {
  const body = document.querySelector("body")
  const formCard = formTemplate(artist)
  body.appendChild(formCard)


}

export function manageModalForm() {
  const modal = document.querySelector(".contact_modal");
  const contactBtn = document.querySelector(".contact_button");
  const closeModalBtn = document.querySelector(".modal > header > img");

  contactBtn.addEventListener("click", () => {
    displayModal(closeModalBtn)
  });
  closeModalBtn.addEventListener("click", () => {
    closeModal(contactBtn)
  });

  // Close modal when escape key is pressed
  modal.addEventListener('keydown', e => {
    const keyCode = e.keyCode ? e.keyCode : e.which

    if (modal.getAttribute('aria-hidden') == 'false' && keyCode === 27) {
        closeModal(contactBtn)
    }
  })

}
