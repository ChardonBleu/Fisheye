import { displayModal, closeModal } from "../utils/contactForm.js";
import getDatas from "../utils/api.js";

const contactBtn = document.querySelector(".contact_button");
const closeModalBtn = document.querySelector(".modal > header > img");

contactBtn.addEventListener("click", displayModal);
closeModalBtn.addEventListener("click", closeModal);

function displayArtistInfo(artist) {
  console.log(artist);
}

function displayArtistMedia(artistMedia) {
  console.log(artistMedia);
}

async function initArtistPage() {
  let { photographers, media } = await getDatas("data/photographers.json");

  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  const artist = photographers.filter((person) => person.id == photographerId);
  const artistMedia = media.filter(
    (elt) => elt.photographerId == photographerId,
  );

  displayArtistInfo(artist);
  displayArtistMedia(artistMedia);
}

initArtistPage();
