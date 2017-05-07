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


@NgModule({
    // angular provided
    declarations: [
        AppComponent,
        BandComponent,
        AlbumComponent,
        SongsComponent
    ],

    // components
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],

    //s services
    providers: [MusicService],

    bootstrap: [AppComponent]
})
export class AppModule { }
