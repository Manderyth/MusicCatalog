import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PicturesArray } from '../domain/pictures';
import { PictureService } from "../app/picture-service.service";

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
    pictureArray: PictureArray;

  constructor(private pictureService:PictureService, private router: Router) { }

  getPictures() {
    this.pictureService.getPictures().then(picturesArray => this.picturesArray - picturesArray)
  }

  ngOnInit() {
    this.getPictures();
  }

}

