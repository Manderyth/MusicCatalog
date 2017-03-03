import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AlbumArray } from '../domain/albums';
import { MusicService } from "../app/music-service.service";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {
    albumArray: AlbumArray;

    constructor(public musicService: MusicService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.route.params
          .switchMap((params: Params) => {
             return this.musicService.getAlbums(+params['bandId'], +params['albumId'])
          })
          .subscribe(albums => {
            console.log(albums);
            this.albumArray = albums
          });
  }

}
