import { ArtistImage } from "../models/Image.js";
import { ArtistVideo } from "../models/Video.js";

export class MediaFactory {
  constructor(data, artist, type) {
    switch (type) {
      case "image":
        return new ArtistImage(data, artist);
      case "video":
        return new ArtistVideo(data, artist);
      default:
        throw "Unknown type";
    }
  }
}
