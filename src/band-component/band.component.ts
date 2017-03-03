import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BandArray } from '../domain/bands';
import { MusicService } from "../app/music-service.service";

@Component({
    selector: 'band-component',
    templateUrl: './band.component.html',
    styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {
    bandArray: BandArray[];
 
    constructor(private musicService: MusicService, private router: Router) { }

    getBands() {
        this.musicService.getBands().then(bandArray => this.bandArray = bandArray);
    }

    ngOnInit() {
        this.getBands();
    }

 }
