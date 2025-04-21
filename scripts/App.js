import {
  dataJsonURL,
  indexUrlList,
  photographerUrlList,
} from "./utils/constants.js";
import { Artist } from "./models/Artist.js";
import { MediaFactory } from "./factories/mediaFactory.js";
import { displayIndexPhotographers } from "./pages/index.js";
import {
  displayMediaPhotographer,
  manageModalForm,
  displayModalForm
} from "./pages/photographers.js";

class App {
  constructor() {
    this.photographers = [];
    this.artistMedias = [];
    this.artist;
  }

  async fetchPhotographers() {
    const response = await fetch(dataJsonURL);
    if (response.ok) {
      const { photographers } = await response.json();
      this.photographers = photographers;
    } else {
      throw new Error("HTTP-Error: " + response.status);
    }
  }

  async fetchMedias() {
    const response = await fetch(dataJsonURL);
    if (response.ok) {
      let { photographers, media } = await response.json();

      let params = new URL(document.location).searchParams;
      let photographerId = params.get("id");

      this.artist = new Artist(
        photographers.filter((person) => person.id == photographerId)[0],
      );
      const images = media
        .filter((elt) => elt.photographerId == photographerId && elt.image)
        .map((image) => new MediaFactory(image, this.artist, "image"));

      const videos = media
        .filter((elt) => elt.photographerId == photographerId && elt.video)
        .map((video) => new MediaFactory(video, this.artist, "video"));

      this.artistMedias = images.concat(videos);
    } else {
      throw new Error("HTTP-Error: " + response.status);
    }
  }

  async main() {
    if (indexUrlList.includes(new URL(document.location).pathname)) {
      await this.fetchPhotographers();
      displayIndexPhotographers(this.photographers);
    } else if (
      photographerUrlList.includes(new URL(document.location).pathname)
    ) {
      await this.fetchMedias();
      displayMediaPhotographer(this.artist, this.artistMedias);
      displayModalForm(this.artist)
      manageModalForm();
    }
  }
}

const app = new App();
app.main();
