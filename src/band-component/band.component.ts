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
    selectedBand: BandArray;

    constructor(private musicService: MusicService, private router: Router) { }

    getBands() {
        console.log(this.bandArray);
        this.musicService.getBands().then(bandArray => this.bandArray = bandArray);
    }

    ngOnInit() {
        this.getBands();
    }

    onSelect(band: BandArray) {
        this.selectedBand = band;
    }

    goToAlbums() {
        console.log(this.selectedBand);
        this.router.navigate(['/albums', this.selectedBand.id]);
    }


}
