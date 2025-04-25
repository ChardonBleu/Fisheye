import { mediaURL } from "../utils/constants.js";

export class ArtistImage {
  constructor(data, artist) {
    this._id = data.id;
    this._date = data.date;
    this._image = data.image;
    this._likes = data.likes;
    this._photographerId = data.photographerId;
    this._price = data.price;
    this._title = data.title;
    this._artist = artist;
    this._alreadyLiked = false;
  }

  get id() {
    return this._id;
  }

  get date() {
    return this._date;
  }

  get mediaThumbnail() {
    const picture =
      mediaURL + `${this.artistFolder()}/${this._image.slice(0, -4)}_mini.jpg`;
    return `<img src="${picture}" height="100%" alt="image ${this._title}"/>`;
  }

  get mediaElement() {
    const picture = mediaURL + `${this.artistFolder()}/${this._image}`;
    return `<img src="${picture}" alt="photo ${this._title}"/>
            <h2 aria-label="photo ${this._title}" aria-hidden="true" >${this._title}</h2>
            `;
  }

  get likes() {
    return this._likes;
  }

  get photographerId() {
    return this._photographerId;
  }

  get price() {
    return this._price;
  }

  get title() {
    return this._title;
  }

  artistFolder() {
    return this._artist.name.split(" ").join("");
  }

  addLike() {
    if (!this._alreadyLiked) {
      this._likes += 1;
      this._alreadyLiked = true;
      return true;
    } else if (this._alreadyLiked) {
      this._likes -= 1;
      this._alreadyLiked = false;
      return false;
    }
  }
}
