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

  get mediaThumbnail() {
    const picture =
      mediaURL + `${this.artistFolder()}/${this._video.slice(0, -4)}_mini.jpg`;
    return `<img src="${picture}#t=0" height="100%" alt="video ${this._title}">`;
  }

  get mediaElement() {
    const picture = mediaURL + `${this.artistFolder()}/${this._video}`;
    return `<video src="${picture}" height="100%" alt="video ${this._title}" controls></video>
            <h2 aria-label="video ${this._title}" aria-hidden="true">${this._title}</h2>
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
    const folder = this._artist.name.split(" ").join("");
    return folder;
  }
}
