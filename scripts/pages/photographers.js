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
  const body = document.querySelector("body");
  const formCard = formTemplate(artist);
  body.appendChild(formCard);
}

function sendFormDatas(form) {
  const allFields = document.querySelectorAll(".field");
  let formValid = false;

  allFields.forEach((input) => {
    if (input.value && input.checkValidity()) {
      formValid = true;
    }
  });
  if (formValid) {
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    console.log(searchParams.toString());
    form.reset();
    return true;
  } else {
    throw new Error("Formulaire non valide");
  }
}

export function manageModalForm() {
  const modal = document.querySelector(".contact_modal");
  const contactBtn = document.querySelector(".contact_button");
  const closeModalBtn = document.querySelector(".modal > header > img");
  const form = document.querySelector("form");

  contactBtn.addEventListener("click", () => {
    displayModal(closeModalBtn, modal);
  });
  closeModalBtn.addEventListener("click", () => {
    closeModal(contactBtn, modal);
  });

  // Close modal when escape key (keyCode = 27) is pressed
  modal.addEventListener("keydown", (e) => {
    const keyCode = e.keyCode ? e.keyCode : e.which;

    if (modal.getAttribute("aria-hidden") == "false" && keyCode === 27) {
      closeModal(contactBtn, modal);
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const sent = sendFormDatas(form);
    if (sent) {
      closeModal(contactBtn, modal);
    }
  });
}
