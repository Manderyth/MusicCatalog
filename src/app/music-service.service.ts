import { Injectable } from '@angular/core';
import { BandArray } from '../domain/bands';
import { AlbumArray } from '../domain/albums';
import { SongsArray } from '../domain/songs';
import { BANDARRAY } from '../fake-database';

@Injectable()
export class MusicService {

    getBands(): Promise<BandArray[]> {
        return Promise.resolve(BANDARRAY);
    }

    getBand(id: number): Promise<BandArray> {
        return this.getBands()
            .then(bands => bands.find(band => band.id === id));
    }

    getAlbums(bandId: number, albumId: number): Promise<AlbumArray> {
        return this.getBand(bandId)
            .then(band => band.albums.find(album => album.id === albumId));
    }
}