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
  displayModalForm,
  displayLightbox,
} from "./pages/photographers.js";
import { manageLightbox } from "./utils/lightbox.js";
import { manageLikes } from "./utils/likes.js";

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

      this.artistMedias = videos.concat(images);
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

      this.artist.displayArtistInfo();

      displayMediaPhotographer(this.artist, this.artistMedias);
      displayModalForm(this.artist);
      manageModalForm();
      displayLightbox(this.artistMedias);
      manageLightbox();
      manageLikes(this.artist, this.artistMedias)
     
    }
  }
}

const app = new App();
app.main();
