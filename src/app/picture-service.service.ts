import { Injectable } from '@angular/core';
import { PICTURESARRAY } from '../fake-picture-database';

@Injectable()
export class PictureService {

    getPictures(): Promise<PictureArray> {
        return Promise.resolve(PICTURESARRAY);
    }
  }
