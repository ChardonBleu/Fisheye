import { lightboxTemplate } from "../components/lightboxCard.js";
import * as carousel from "../utils/lightbox.js";
import { createModalElement } from "./photographers.js";
import { displayModal, closeModal } from "../utils/modals.js";

export function displayEmptyLightbox() {
  const main = document.querySelector("main");
  const lightboxCard = lightboxTemplate();
  const lightboxModal = createModalElement(lightboxCard);
  lightboxModal.classList.add("lightbox");
  main.appendChild(lightboxModal);
}

export function addMediasInLightbox(artistMedias) {
  const slidesContainer = document.querySelector(".slides-container");
  slidesContainer.innerHTML = "";

  artistMedias.forEach((media) => {
    const slide = document.createElement("li");
    slide.classList.add("slide");
    slide.setAttribute("aria-hidden", "true");
    slide.innerHTML = media.mediaElement;
    slidesContainer.appendChild(slide);
  });
}

function lightboxPrevNav() {
  carousel.plusSlides(-1);
}

function lightboxNextNav() {
  carousel.plusSlides(1);
}

function closeLightbox(lightboxModal) {
  const allMedias = document.querySelectorAll(".artist-media");
  closeModal(allMedias[carousel.slideIndex - 1], lightboxModal);
}

export function manageOpeningLightbox(allMedias) {
  const lightboxModal = document.querySelector(".lightbox");
  const closeLightboxBtn = document.querySelector(".close-lightbox");

  allMedias.forEach((media, index) => {
    ["keydown", "click"].forEach((evt) => {
      media.addEventListener(evt, (event) => {
        if (evt === "click" || (evt === "keydown" && event.key === "Enter")) {
          carousel.currentSlide(index + 1);
          displayModal(closeLightboxBtn, lightboxModal);
        }
      });
    });
  });
}

export function manageClosingLightbox() {
  const lightboxModal = document.querySelector(".lightbox");
  const closeLightboxBtn = document.querySelector(".close-lightbox");

  closeLightboxBtn.addEventListener("click", () => {
    closeLightbox(lightboxModal);
  });

  lightboxModal.addEventListener("keydown", (event) => {
    if (
      lightboxModal.getAttribute("aria-hidden") == "false" &&
      (event.key === "Escape" ||
        (document.activeElement == closeLightboxBtn && event.key === "Enter"))
    ) {
      closeLightbox(lightboxModal);
    }
  });
}

export function manageNavLightbox() {
  const prev = document.querySelector(".chevron-left");
  const next = document.querySelector(".chevron-right");
  const lightboxModal = document.querySelector(".lightbox");

  prev.addEventListener("click", lightboxPrevNav);
  next.addEventListener("click", lightboxNextNav);

  lightboxModal.addEventListener("keydown", (event) => {
    if (
      (event.key === "Enter" && document.activeElement == prev) ||
      event.key === "ArrowLeft"
    ) {
      lightboxPrevNav();
    }
    if (
      (event.key === "Enter" && document.activeElement == next) ||
      event.key === "ArrowRight"
    ) {
      lightboxNextNav();
    }
  });
}
