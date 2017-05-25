import { Injectable } from '@angular/core';
import { PicturesArray } from '../domain/pictures'
import { PICTURESARRAY } from '../fake-picture-database';

@Injectable()
export class PictureService {

    getPictures(): Promise<PicturesArray> {
        return Promise.resolve(PICTURESARRAY);
    }
  }
