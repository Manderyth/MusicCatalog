import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { BandComponent } from '../.././band-component/band.component';
import { AlbumComponent } from '../../album-component/album.component';
import { SongsComponent } from '../../songs-component/songs.component';
import { SortComponent } from '../../sort-component/sort.component';
import { PicturesComponent } from '../../pictures-component/pictures.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/sort',
        pathMatch: 'full'
    },
    {
        path: 'sort',
        component: SortComponent,
    },
    {
        path: 'bands',
        component: BandComponent,
    },
    {
        path: 'albums/:id',
        component: AlbumComponent
    },
    {
        path: 'songs/:bandId/:albumId',
        component: SongsComponent
    },
    {
        path: 'pictures',
        component: PicturesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }