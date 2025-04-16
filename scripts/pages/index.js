import photographerTemplate from "../components/photographerCard.js";

export default async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerCard = photographerTemplate(photographer);
    photographersSection.appendChild(photographerCard);
  });
}
