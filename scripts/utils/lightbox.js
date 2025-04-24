export let slideIndex = 1;

export function plusSlides(n) {
  showSlides((slideIndex += n));
}

export function currentSlide(n) {
  showSlides((slideIndex = n));
}

export function showSlides(n) {
  let i;
  let slides = ""
  slides = document.querySelectorAll(".slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.add("mask");
    slides[i].classList.remove("show");
    slides[i].setAttribute("aria-hidden", "true");
  }
  slides[slideIndex - 1].classList.add("show");
  slides[slideIndex - 1].classList.remove("mask");
  slides[slideIndex - 1].setAttribute("aria-hidden", "false");
  const title = slides[slideIndex - 1]
    .querySelector("h2")
    .getAttribute("aria-label");
  slides[slideIndex - 1].setAttribute("aria-label", title);
}
