import { displayModal, closeModal } from "../utils/modals.js";
import mediaTemplate from "../components/mediaCard.js";
import formTemplate from "../components/FormCard.js";
import lightboxTemplate from "../components/lightboxCard.js";

export function displayMediaPhotographer(artist, artistMedias) {
  const galery = document.querySelector(".galery");
  artistMedias.forEach((media) => {
    const mediaCard = mediaTemplate(media, artist.name);
    galery.appendChild(mediaCard);
  });
}

export function createModalElement(templateCard) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("role", "dialog");
  modal.innerHTML = templateCard;
  return modal;
}

export function displayModalForm(artist) {
  const body = document.querySelector("body");
  const formCard = formTemplate(artist);
  const formModal = createModalElement(formCard);
  formModal.classList.add("contact");
  body.appendChild(formModal);
}

export function displayLightbox(artistMedias) {
  const body = document.querySelector("body");
  const lightboxCard = lightboxTemplate();
  const lightboxModal = createModalElement(lightboxCard);
  lightboxModal.classList.add("lightbox");
  body.appendChild(lightboxModal);

  const slidesContainer = document.querySelector(".slides-container");

  artistMedias.forEach((media) => {
    const slide = document.createElement("li");
    slide.classList.add("slide");
    slide.setAttribute("aria-hiddel", "true");
    slide.innerHTML = media.mediaElement;
    slidesContainer.appendChild(slide);
  });
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
  const modal = document.querySelector(".contact");
  const contactBtn = document.querySelector(".contact_button");
  const closeModalBtn = document.querySelector(".contact_modal > header > img");
  const form = document.querySelector("form");

  contactBtn.addEventListener("click", () => {
    displayModal(closeModalBtn, modal);
  });

  closeModalBtn.addEventListener("click", () => {
    closeModal(contactBtn, modal);
  });

  // Close modal when escape key (keyCode = 27) is pressed
  modal.addEventListener("keydown", (event) => {
    if (
      modal.getAttribute("aria-hidden") == "false" &&
      event.key === "Escape"
    ) {
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
