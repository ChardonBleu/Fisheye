import { displayModal, closeModal } from "../utils/modals.js";
import mediaTemplate from "../components/mediaCard.js";
import formTemplate from "../components/FormCard.js";
import lightboxTemplate from "../components/lightboxCard.js";
import * as carousel from "../utils/lightbox.js"

export function displayMediaPhotographer(artist, artistMedias) {
  const galery = document.querySelector(".galery");
  galery.innerHTML = ""
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


export function manageLightbox() {
  const prev = document.querySelector(".chevron-left");
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
    media.addEventListener("click", () => {
      carousel.currentSlide(index + 1);
      displayModal(closeLightboxBtn, lightboxModal);
    });
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

export function manageLikes(artist, artistMedias) {
  const allLikesBtn = document.querySelectorAll(".heart");
  let totalLikes = 0;
  allLikesBtn.forEach((likeBtn) => {
    totalLikes += Number(
      likeBtn.parentElement.querySelector(".likes").innerHTML,
    );
    artist.displayAsideInfo(totalLikes);

    ["keydown", "click"].forEach((evenment) => {
      likeBtn.addEventListener(evenment, () => {
        const photoTitle =
          likeBtn.parentElement.querySelector("h2").textContent;
        const currentMedia = artistMedias.filter(
          (media) => media.title == photoTitle,
        )[0];
        const addLike = currentMedia.addLike();
        if (addLike) {
          totalLikes += 1;
          likeBtn.classList.add("heart_full")
        } else {
          totalLikes -= 1;
          likeBtn.classList.remove("heart_full")
        }
        likeBtn.parentElement.querySelector(".likes").innerHTML =
          currentMedia.likes;
        artist.displayAsideInfo(totalLikes);
        return totalLikes;
      });
    });
  });
}

function openNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions) {
  openFilterMenuBtn.classList.add("mask")
  closeFilterMenuBtn.classList.remove("mask")
  filterMenu.setAttribute("aria-expanded", "true")
  filterMenu.classList.add("select_shadow")
  allMaskedOptions.forEach(option => {
    option.classList.remove("mask")
  })
  allMaskedOptions[0].querySelector("p").focus()
}

function closeNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions) {
  closeFilterMenuBtn.classList.add("mask")
  openFilterMenuBtn.classList.remove("mask")
  filterMenu.setAttribute("aria-expanded", "false")
  filterMenu.classList.remove("select_shadow")
  allMaskedOptions.forEach(option => {
    option.classList.add("mask")
  })
  openFilterMenuBtn.focus()  
}

export function manageNavigationSortMenu() {
  const openFilterMenuBtn = document.querySelector(".fa-chevron-down")
  const closeFilterMenuBtn = document.querySelector(".fa-chevron-up")
  const filterMenu = document.querySelector(".select")
  const allMaskedOptions = document.querySelectorAll(".option + .mask");

  ["keydown", "click"].forEach((evenment) => {
    openFilterMenuBtn.addEventListener(evenment, (event) => {
      if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
        openNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions)
      }
    })
  });

  ["keydown", "click"].forEach((evenment) => {
    closeFilterMenuBtn.addEventListener(evenment, (event) => {
      if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
        closeNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions)
      }
    })
  }) 
}

export function sortGalery(artist, artistMedias) {
  const allOptionsTarget = document.querySelectorAll(".option p");
  const openFilterMenuBtn = document.querySelector(".fa-chevron-down")
  const closeFilterMenuBtn = document.querySelector(".fa-chevron-up")
  const filterMenu = document.querySelector(".select")
  const allMaskedOptions = document.querySelectorAll(".option + .mask");

  allOptionsTarget.forEach((option) => {
    ["keydown", "click"].forEach((evenment) => {
      option.addEventListener(evenment, (event) => {
        if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
          const allOptionsTarget = document.querySelectorAll(".option p");
          const firstOption = allOptionsTarget[0]
          const parentOption = option.parentElement
          const firstParentOption = firstOption.parentElement
          const sortKey = option.getAttribute("id")
          console.log(sortKey)

          if(option != firstOption) {
            parentOption.appendChild(firstOption)
            firstParentOption.prepend(option)
            if (sortKey === "date") {
              artistMedias.sort((a, b) => {return a.date.localeCompare(b.date) });

            } else if (sortKey === "title" ) {
              artistMedias.sort((a, b) => {return a.title.localeCompare(b.title)});

            } else {
              artistMedias.sort((a, b) => b.likes - a.likes);
            }
            
            console.log(artistMedias)
            displayMediaPhotographer(artist, artistMedias);
            closeNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions)
          }
        }
      });
    });
  });
}