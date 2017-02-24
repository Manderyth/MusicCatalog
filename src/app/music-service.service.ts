import { Injectable } from '@angular/core';
import { BandArray } from '../domain/bands';
import { BANDARRAY } from '../fake-database';

@Injectable()
export class MusicService {

    getBands(): Promise<BandArray[]> {
        return Promise.resolve(BANDARRAY);
    }

    getAlbums(id: number): Promise<BandArray> {
        return this.getBands()
            .then(bands => bands.find(band => band.id === id));
    }

}
