import { SongsArray } from './songs';

export interface AlbumArray {
    id: number;
    title: string;
    thumbnail: string;
    releaseDate: number;
    songs: SongsArray[];
}