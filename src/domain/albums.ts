import { SongsArray } from './songs';

export interface AlbumArray {
    title: string;
    thumbnail: string;
    releaseDate: number;
    songs: SongsArray;
}