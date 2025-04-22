import { displayModal, closeModal } from "./modals.js";

let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.display = "none";
    slides[i].classList.add("mask");
    slides[i].classList.remove("show");
    slides[i].setAttribute("aria-hidden", "true");
  }
  // slides[slideIndex - 1].style.display = "flex";
  slides[slideIndex - 1].classList.add("show");
  slides[slideIndex - 1].classList.remove("mask");
  slides[slideIndex - 1].setAttribute("aria-hidden", "false");
  const title = slides[slideIndex - 1]
    .querySelector("h2")
    .getAttribute("aria-label");
  slides[slideIndex - 1].setAttribute("aria-label", title);
}

export function manageLightbox() {
  const prev = document.querySelector(".chevron-left");
  const next = document.querySelector(".chevron-right");
  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });

  const lightboxModal = document.querySelector(".lightbox");
  const closeLightboxBtn = document.querySelector(".close-lightbox");
  const allMedias = document.querySelectorAll(".artist-media");

  allMedias.forEach((media, index) => {
    media.addEventListener("click", () => {
      currentSlide(index + 1);
      displayModal(closeLightboxBtn, lightboxModal);
    });
  });

  closeLightboxBtn.addEventListener("click", () => {
    closeModal(allMedias[slideIndex - 1], lightboxModal);
  });

  // Close modal or navigate when keys are pressed
  lightboxModal.addEventListener("keydown", (event) => {
    if (
      lightboxModal.getAttribute("aria-hidden") == "false" &&
      (event.key === "Escape" ||
        (document.activeElement == closeLightboxBtn && event.key === "Enter"))
    ) {
      closeModal(allMedias[slideIndex - 1], lightboxModal);
    }
    if (
      (event.key === "Enter" && document.activeElement == prev) ||
      event.key === "ArrowLeft"
    ) {
      plusSlides(-1);
    }
    if (
      (event.key === "Enter" && document.activeElement == next) ||
      event.key === "ArrowRight"
    ) {
      plusSlides(1);
    }
  });
}
