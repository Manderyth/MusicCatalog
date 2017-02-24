import { AlbumArray } from './albums';

export interface BandArray {
    id: number;
    bandName: string;
    albums: AlbumArray;
    thumbnail: string;
    like: boolean;
}