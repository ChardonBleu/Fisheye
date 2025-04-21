import { portraitURL } from "../utils/constants.js";

export default function photographerInfoTemplate(data) {
  const picture = portraitURL + `${data.portrait}`;

  const artistInfo = `
    <div class="artist-info" aria-label="Galerie du photographe ${data.name}">
      <h2 tabindex="0">${data.name}</h2> 
      <p class="location" tabindex="0">${data.city}, ${data.country}</p>
      <p class="tag" tabindex="0">${data.tagline}</p>
    </div>
    <button class="contact_button" aria-label="pour ouvrir un formulaire de contact">Contactez-moi</button>
    <div  class="portrait" aria-hidden="true"><img src="${picture}" alt=""/></div>   
  `;

  return artistInfo;
}
