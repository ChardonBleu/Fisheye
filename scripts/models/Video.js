import { mediaURL } from "../utils/constants.js";

export class ArtistVideo {
  constructor(data, artist) {
    this._id = data.id;
    this._date = data.date;
    this._video = data.video;
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
    const picture = mediaURL + `${folder}/${this._video.slice(0, -4)}_mini.jpg`;
    return `<img src="${picture}#t=0" height="100%"></video>`;
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
