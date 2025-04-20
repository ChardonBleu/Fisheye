import indexPhotographerTemplate from "../components/indexPhotographerCard.js";
import photographerInfoTemplate from "../components/photographerInfoCard.js";

export class Artist {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._city = data.city;
    this._country = data.country;
    this._portrait = data.portrait;
    this._price = data.price;
    this._tagline = data.tagline;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get city() {
    return this._city;
  }

  get country() {
    return this._country;
  }

  get portrait() {
    return this._portrait;
  }

  get price() {
    return this._price;
  }

  get tagline() {
    return this._tagline;
  }

  displayIndexCard() {
    const photographersSection = document.querySelector(
      ".photographer_section",
    );
    const photographerCard = indexPhotographerTemplate(this);
    photographersSection.appendChild(photographerCard);
  }

  displayArtistInfo() {
    const article = document.querySelector(".photograph-header");
    const artistInfo = photographerInfoTemplate(this);
    article.innerHTML = artistInfo;
  }

  displayAsideInfo() {
    const totalLikes = 100;  // TODO ajouter la fonction de calcul du total de likes
    const aside = document.querySelector(".artist-level")
    const asideContent = `
      <p aria-label="total des likes du photographe" tabindex="0">${totalLikes}<i class="fa-heart fa-solid"></i></p>
      <p aria-label="tarif du photographe" tabindex="0">${this.price}€/jour</p>
    `
    aside.innerHTML = asideContent
  }
}
