import { Artist } from "../models/Artist.js";

export function displayIndexPhotographers(photographers, artist) {
  photographers.forEach((photographer) => {
    artist = new Artist(photographer);
    artist.displayIndexCard();
  });
}
