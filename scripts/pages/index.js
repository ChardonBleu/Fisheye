import indexPhotographerTemplate from "../components/indexPhotographerCard.js";
import getDatas from "../utils/api.js";
import { dataJsonURL } from "../utils/constants.js";

export default async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerCard = indexPhotographerTemplate(photographer);
    photographersSection.appendChild(photographerCard);
  });
}

async function initIndex() {
  const { photographers } = await getDatas(dataJsonURL);
  displayData(photographers);
}

initIndex();
