import { dataJsonURL } from "./utils/constants.js";
import {displayArtistMedia} from "./pages/photographer.js"
import { Artist } from './models/Artist.js';
import { displayModal, closeModal } from "./utils/contactForm.js";

class App {
  constructor() {
    this.photographers = [];
    this.artistMedias = []
    this.artist
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
        let { photographers, media }  = await response.json();
        let params = new URL(document.location).searchParams;
        let photographerId = params.get("id");
        this.artist = new Artist(photographers.filter(
            (person) => person.id == photographerId,
          )[0])
        this.artistMedias = media.filter(
        (elt) => elt.photographerId == photographerId,
        );

    } else {
      throw new Error("HTTP-Error: " + response.status);
    }

  }

  async main() {
    if (new URL(document.location).pathname == "/index.html") {
        await this.fetchPhotographers();       
           
        this.photographers.forEach((photographer) => {
          this.artist = new Artist(photographer)
          this.artist.displayIndexCard()
        });

    } else if (new URL(document.location).pathname == "/photographer.html") {
        await this.fetchMedias()
        this.artist.displayArtistInfo()
        
        displayArtistMedia(this.artistMedias, this.artist.name);

        const contactBtn = document.querySelector(".contact_button");
        const closeModalBtn = document.querySelector(".modal > header > img");
      
        contactBtn.addEventListener("click", displayModal);
        closeModalBtn.addEventListener("click", closeModal);
    }
  }
}

const app = new App();
app.main();
