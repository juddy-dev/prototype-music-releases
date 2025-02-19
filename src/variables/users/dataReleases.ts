import { Release } from "types/release";

import dataArtistLabel from "./dataArtistLabel";
import dataDistribution from "./dataDistribution";
import dataTracks from "./dataTracks";

const dataRelease: Release[] = [
    {
        id: 1,
        cover: '',
        title: 'Release 1',
        created_time: new Date("2025-02-19T12:00:00Z"),        
        date: 'Feb 19, 2025',
        artist: dataArtistLabel[0],
        idState: 3,
        state: 'COMPLETE',
        tracks: dataTracks.filter(data => data.idRelease == 1),
        distributions: dataDistribution
    },
    {
        id: 2,
        cover: '',
        title: 'Release 2',
        created_time: new Date("2025-01-19T12:00:00Z"),        
        date: 'Jan 19, 2025',
        artist: dataArtistLabel[0],
        idState: 3,
        state: 'COMPLETE',
        tracks: dataTracks.filter(data => data.idRelease == 2),
        distributions: dataDistribution
    },
    {
        id: 3,
        cover: '',
        title: 'Release 3',
        created_time: new Date("2024-12-19T12:00:00Z"),        
        date: 'Dec 19, 2024',
        artist: dataArtistLabel[0],
        idState: 2,
        state: 'PENDING',
        tracks: dataTracks.filter(data => data.idRelease == 3),
        distributions: [dataDistribution[1]]
    },
    {
        id: 4,
        cover: '',
        title: 'Release 4',
        created_time: new Date("2024-11-19T12:00:00Z"),        
        date: 'Nov 19, 2024',
        artist: dataArtistLabel[0],
        idState: 3,
        state: 'COMPLETE',
        tracks: dataTracks.filter(data => data.idRelease == 4),
        distributions: dataDistribution
    },
    {
        id: 5,
        cover: '',
        title: 'Release 5',
        created_time: new Date("2024-10-19T12:00:00Z"),        
        date: 'Oct 19, 2024',
        artist: dataArtistLabel[0],
        idState: 3,
        state: 'COMPLETE',
        tracks: dataTracks.filter(data => data.idRelease == 5),
        distributions: dataDistribution
    },
    {
        id: 6,
        cover: '',
        title: 'Release 6',
        created_time: new Date("2024-09-19T12:00:00Z"),        
        date: 'Sep 19, 2024',
        artist: dataArtistLabel[0],
        idState: 2,
        state: 'PENDING',
        tracks: dataTracks.filter(data => data.idRelease == 6),
        distributions: [dataDistribution[0]]
    },
    {
        id: 999,
        cover: '',
        title: 'Release 6',
        created_time: new Date("2024-09-19T12:00:00Z"),        
        date: 'Sep 19, 2024',
        artist: dataArtistLabel[0],
        idState: 1,
        state: 'INCOMPLETE',
        tracks: [],
        distributions: []
    }
];

export default dataRelease