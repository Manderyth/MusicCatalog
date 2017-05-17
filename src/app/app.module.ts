import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AppComponent } from './app.component';
import { BandComponent } from '../band-component/band.component';
import { MusicService } from "./music-service.service";
import { AlbumComponent } from '../album-component/album.component';
import { SongsComponent } from '../songs-component/songs.component';
import { SortComponent } from '../sort-component/sort.component';
import { PicturesComponent } from '../pictures-component/pictures.component';
import { PictureService } from "./picture-service.service";


@NgModule({
    // angular provided
    declarations: [
        AppComponent,
        BandComponent,
        AlbumComponent,
        SongsComponent,
        SortComponent,
        PicturesComponent
    ],

    // components
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],

    //s services
    providers: [MusicService, PictureService],

    bootstrap: [AppComponent]
})
export class AppModule { }
