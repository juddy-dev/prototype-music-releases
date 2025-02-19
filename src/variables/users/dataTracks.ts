import { Track } from "types/track";
import dataArtistLabel from "./dataArtistLabel";

const dataTracks: Track[] = [
      {
            id: 1,
            artist: dataArtistLabel[0],
            title: 'Track R1-1',
            idState: 3,
            state: 'COMPLETE',
            date: 'Feb 10, 2025',
            idRelease: 1
      },
      {
            id: 2,
            artist: dataArtistLabel[0],
            title: 'Track R1-2',
            idState: 3,
            state: 'COMPLETE',
            date: 'Feb 12, 2025',
            idRelease: 1
      },
      {
            id: 3,
            artist: dataArtistLabel[0],
            title: 'Track R1-3',
            idState: 3,
            state: 'COMPLETE',
            date: 'Feb 15, 2025',
            idRelease: 1
      },
      {
            id: 4,
            artist: dataArtistLabel[0],
            title: 'Track R2-1',
            idState: 1,
            state: 'COMPLETE',
            date: 'Jan 10, 2025',
            idRelease: 2
      },
      {
            id: 5,
            artist: dataArtistLabel[0],
            title: 'Track R2-2',
            idState: 1,
            state: 'COMPLETE',
            date: 'Jan 10, 2025',
            idRelease: 2
      },
      {
            id: 6,
            artist: dataArtistLabel[0],
            title: 'Track R3-1',
            idState: 2,
            state: 'PENDING',
            idRelease: 3,
            date: 'Dec 8, 2024'
      },
      {
            id: 7,
            artist: dataArtistLabel[0],
            title: 'Track R3-2',
            idState: 3,
            state: 'COMPLETE',
            idRelease: 3,
            date: 'Dec 9, 2024'
      },
      {
            id: 8,
            artist: dataArtistLabel[0],
            title: 'Track R4-1',
            idState: 3,
            state: 'COMPLETE',
            idRelease: 4,
            date: 'Nov 19, 2024'
      },
      {
            id: 9,
            artist: dataArtistLabel[0],
            title: 'Track R5-1',
            idState: 3,
            state: 'COMPLETE',
            idRelease: 5,
            date: 'Oct 19, 2024'
      },
      {
            id: 10,
            artist: dataArtistLabel[0],
            title: 'Track R4-1',
            idState: 3,
            state: 'COMPLETE',
            idRelease: 6,
            date: 'Sep 19, 2024'
      }
];

export default dataTracks;