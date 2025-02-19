//INTERNAL COMPONENTS
import { ArtistLabel } from "./artist-label";

export class Track {

  id: number;
  artist: ArtistLabel;
  title: string;
  idState: number;
  idRelease: number;
  state: string;
  date?: string;
  audio?: string;

  constructor() {
  }

};