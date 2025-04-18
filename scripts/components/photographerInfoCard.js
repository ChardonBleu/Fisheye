import { portraitURL } from "../utils/constants.js";

export default function photographerInfoTemplate(data) {
  const picture = portraitURL + `${data.portrait}`;  

  const artistInfo = `
    <div class="artist-info">
      <h2>${data.name}</h2> 
      <p class="location" tabindex="0">${data.city}, ${data.country}</p>
      <p class="tag" tabindex="0">${data.tagline}</p>
    </div>
    <button class="contact_button">Contactez-moi</button>
    <div  class="portrait"><img src="${picture}" alt=""/></div>   
  `;

  return artistInfo
  
}

