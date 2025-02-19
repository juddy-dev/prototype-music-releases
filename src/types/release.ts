//INTERNAL COMPONENTS
import { ArtistLabel } from "./artist-label";
import { Distribution } from "./distribution";
import { Track } from "./track";

export class Release {
  id: number;
  cover: string;
  title: string;
  created_time: Date;
  date: string;
  artist: ArtistLabel;
  idState: number;
  state: string;
  tracks?: Track[];
  distributions?: Distribution[];

  constructor() {
    this.tracks = [];
    this.distributions = [];
  }
  
};