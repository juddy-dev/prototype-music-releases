//ASSETS
import spotify from "/public/img/services-distributions/spotify.svg";
import deezer from "/public/img/services-distributions/deezer.svg";
import youtube from "/public/img/services-distributions/youtube.svg";
import { Distribution } from "types/distribution";

const dataDistribution = [
    {
        id: '1',
        name: 'Spotify',
        picture: spotify
      },
      {
        id: '2',
        name: 'Deezer',
        picture: deezer
    
      },
      {
        id: '3',
        name: 'Youtube',
        picture: youtube
      }
] as Distribution[];

export default dataDistribution;