import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { BandComponent } from '../.././band-component/band.component';
import { AlbumComponent } from '../../album-component/album.component';
import { SongsComponent } from '../../songs-component/songs.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: '/bands',
        pathMatch: 'full'
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }