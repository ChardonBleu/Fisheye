
import mediaTemplate from "../components/mediaCard.js";


export function displayArtistMedia(artistMedias, artistName) {
  const galery = document.querySelector(".galery");
  artistMedias.forEach((media) => {
    const mediaCard = mediaTemplate(media, artistName);
    galery.appendChild(mediaCard);
  });
}

