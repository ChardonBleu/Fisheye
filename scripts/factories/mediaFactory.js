import { ArtistImage } from "../models/Image.js";
import { ArtistVideo } from "../models/Video.js";

export class MediaFactory {
  constructor(data, artist, type) {
    if (type === "image") {
      return new ArtistImage(data, artist);
    } else if (type === "video") {
      return new ArtistVideo(data, artist);
    } else {
      throw "Unknown type";
    }
  }
}
