import {lightboxTemplate} from "../components/lightboxCard.js";
import * as carousel from "../utils/lightbox.js"
import { createModalElement} from "./photographers.js"
import { displayModal, closeModal } from "../utils/modals.js";


export function displayLightbox(artistMedias) {
  console.log("dans display lightbox")
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

export function manageLightbox() {
    const prev = document.querySelector(".chevron-left");
    console.log(prev)
    const next = document.querySelector(".chevron-right");
    prev.addEventListener("click", () => {
      carousel.plusSlides(-1);
    });
    next.addEventListener("click", () => {
      carousel.plusSlides(1);
    });
  
    const lightboxModal = document.querySelector(".lightbox");
    const closeLightboxBtn = document.querySelector(".close-lightbox");
    const allMedias = document.querySelectorAll(".artist-media");
  
    allMedias.forEach((media, index) => {
      ["keydown", "click"].forEach((evenment) => {
        media.addEventListener(evenment, (event) => {
          if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
            carousel.currentSlide(index + 1);
            displayModal(closeLightboxBtn, lightboxModal);
          }
        });
      })
    });
  
    closeLightboxBtn.addEventListener("click", () => {
      closeModal(allMedias[carousel.slideIndex - 1], lightboxModal);
    });
  
    // Close modal or navigate when keys are pressed
    lightboxModal.addEventListener("keydown", (event) => {
      if (
        lightboxModal.getAttribute("aria-hidden") == "false" &&
        (event.key === "Escape" ||
          (document.activeElement == closeLightboxBtn && event.key === "Enter"))
      ) {
        closeModal(allMedias[carousel.slideIndex - 1], lightboxModal);
      }
      if (
        (event.key === "Enter" && document.activeElement == prev) ||
        event.key === "ArrowLeft"
      ) {
        carousel.plusSlides(-1);
      }
      if (
        (event.key === "Enter" && document.activeElement == next) ||
        event.key === "ArrowRight"
      ) {
        carousel.plusSlides(1);
      }
    });
  }