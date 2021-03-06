import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BandArray } from '../domain/bands';
import { MusicService } from "../app/music-service.service";

import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-album-component',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
    bandArray: BandArray;
    
    constructor(public musicService: MusicService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.musicService.getBand(+params['id']))
            .subscribe(band => this.bandArray = band);
    }

}