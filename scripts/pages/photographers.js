import { mediaTemplate } from "../components/mediaCard.js";
import {
  addMediasInLightbox,
  manageOpeningLightbox,
} from "./photographersLightbox.js";

export function displayMediaPhotographer(artist, artistMedias) {
  const galery = document.querySelector(".galery");
  galery.innerHTML = "";
  artistMedias.forEach((media) => {
    const mediaCard = mediaTemplate(media, artist.name);
    galery.appendChild(mediaCard);
    const likeBtn = mediaCard.querySelector(".heart");
    if (media.alreadyLiked) {
      likeBtn.classList.add("heart_full");
    }
  });
  manageLikes(artist, artistMedias);
  addMediasInLightbox(artistMedias);
  const allMedias = document.querySelectorAll(".artist-media");
  manageOpeningLightbox(allMedias);
}

export function createModalElement(templateCard) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("role", "dialog");
  modal.innerHTML = templateCard;
  return modal;
}

function manageLikes(artist, artistMedias) {
  const allLikesBtn = document.querySelectorAll(".heart");
  let totalLikes = 0;
  allLikesBtn.forEach((likeBtn) => {
    totalLikes += Number(
      likeBtn.parentElement.querySelector(".likes").innerHTML,
    );
    artist.displayAsideInfo(totalLikes);

    ["keydown", "click"].forEach((evt) => {
      likeBtn.addEventListener(evt, (event) => {
        if (evt === "click" || (evt === "keydown" && event.key === "Enter")) {
          const photoTitle =
            likeBtn.parentElement.querySelector("h2").textContent;
          const currentMedia = artistMedias.filter(
            (media) => media.title == photoTitle,
          )[0];
          const addLike = currentMedia.addLike();
          if (addLike) {
            totalLikes += 1;
            likeBtn.classList.add("heart_full");
          } else {
            totalLikes -= 1;
            likeBtn.classList.remove("heart_full");
          }
          likeBtn.parentElement.querySelector(".likes").innerHTML =
            currentMedia.likes;
          artist.displayAsideInfo(totalLikes);
          return totalLikes;
        }
      });
    });
  });
}
