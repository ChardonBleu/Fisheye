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
  }

  get id() {
    return this._id;
  }

  get date() {
    return this._date;
  }

  get mediaElement() {
    const folder = this._artist.name.split(" ").join("");
    const picture = mediaURL + `${folder}/${this._image.slice(0, -4)}_mini.jpg`;
    return `<img src="${picture}" height="100%"/>`;
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
}
