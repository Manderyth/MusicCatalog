import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PicturesArray } from '../domain/pictures';
import { PictureService } from "../app/picture-service.service";

@Component({
  selector: 'picture-component',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})

export class PicturesComponent implements OnInit {
    picturesArray: PicturesArray;

  constructor(private pictureService:PictureService, private router: Router) { }

  getPictures() {
    this.pictureService.getPictures().then(pictureArray => this.picturesArray = pictureArray)
   }

  ngOnInit() {
    this.getPictures();
  }

}

