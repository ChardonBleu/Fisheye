import { displayModal, closeModal } from "../utils/contactForm.js";
import getDatas from "../utils/api.js";
import photographerInfoTemplate from "../components/photographerInfoCard.js"
import mediaTemplate from "../components/mediaCard.js"
import { dataJsonURL } from "../utils/constants.js";

const contactBtn = document.querySelector(".contact_button");
const closeModalBtn = document.querySelector(".modal > header > img");

contactBtn.addEventListener("click", displayModal);
closeModalBtn.addEventListener("click", closeModal);

function displayArtistInfo(artist) {
    const article = document.querySelector(".photograph-header")
    const artistInfo = photographerInfoTemplate(artist)
    article.innerHTML = artistInfo;
}

function displayArtistMedia(artistMedias, artistName) {
    const galery = document.querySelector(".galery")
    artistMedias.forEach((media) => {
        const mediaCard = mediaTemplate(media, artistName);
        galery.appendChild(mediaCard);
    });
    
}

async function initArtistPage() {
  let { photographers, media } = await getDatas(dataJsonURL);

  let params = new URL(document.location).searchParams;
  let photographerId = params.get("id");

  const artist = photographers.filter((person) => person.id == photographerId)[0];
  const artistMedias = media.filter(
    (elt) => elt.photographerId == photographerId,
  );

  displayArtistInfo(artist);
  displayArtistMedia(artistMedias, artist.name);
}

initArtistPage();
