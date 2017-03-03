import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BandArray } from '../domain/bands';
import { MusicService } from "../app/music-service.service";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {
    albumArray: BandArray;

    constructor(public musicService: MusicService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.params
          .switchMap((params: Params) => this.musicService.getSongs(+params['id']))
            .subscribe(albums => this.albumArray = albums);
    }

}
